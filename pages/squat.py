import av
import copy
import cv2 as cv
import numpy as np
import mediapipe as mp
import streamlit as st

from multiprocessing import Queue, Process
from streamlit_webrtc import VideoProcessorBase, webrtc_streamer, WebRtcMode

from utils import CvFpsCalc
from app import pose_process
from utils.fake_objects import FakeResultObject, FakeLandmarksObject, FakeLandmarkObject
from utils.functions import calculate_angle
from utils.turn import get_ice_servers



_SENTINEL_ = "_SENTINEL_"



class Tokyo2020PictogramVideoProcessor(VideoProcessorBase):
    def __init__(self) -> None:
        self._in_queue = Queue()
        self._out_queue = Queue() 
        self.stage = 'up'
        self.counter = 0
        self._pose_process = Process(target=pose_process, kwargs={
            "in_queue": self._in_queue,
            "out_queue": self._out_queue,
        })
        self._cvFpsCalc = CvFpsCalc(buffer_len=10)
        self._pose_process.start()

    def recv(self, frame: av.VideoFrame) -> av.VideoFrame:
        image = frame.to_ndarray(format="bgr24")
        image = cv.flip(image, 1)  
        image = copy.deepcopy(image)
        
        image = cv.cvtColor(image, cv.COLOR_BGR2RGB)
        mp_pose = mp.solutions.pose

        results = self._infer_pose(image)

        if results.pose_landmarks:
            landmarks1 = results.pose_landmarks.landmark
            
            # Get hip, knee and ankle coordinates
            hip = [int(landmarks1[mp_pose.PoseLandmark.LEFT_HIP.value].x * image.shape[1]),
                   int(landmarks1[mp_pose.PoseLandmark.LEFT_HIP.value].y * image.shape[0])]
            knee = [int(landmarks1[mp_pose.PoseLandmark.LEFT_KNEE.value].x * image.shape[1]),
                    int(landmarks1[mp_pose.PoseLandmark.LEFT_KNEE.value].y * image.shape[0])]
            ankle = [int(landmarks1[mp_pose.PoseLandmark.LEFT_ANKLE.value].x * image.shape[1]),
                     int(landmarks1[mp_pose.PoseLandmark.LEFT_ANKLE.value].y * image.shape[0])]

            # Calculate knee angle
            angle = calculate_angle(hip, knee, ankle)

            cv.putText(image, f'Angle: {round(angle, 2)}', (50, 50), cv.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            cv.putText(image, 'REPS:', (300,50), cv.FONT_HERSHEY_SIMPLEX, 1, (255,255,255), 2)
            cv.putText(image, str(self.counter), (450,50), cv.FONT_HERSHEY_SIMPLEX, 1, (255,255,255), 2)

            # Check squat form
            if angle > 160:
                self.stage = "down"
            if angle < 90 and self.stage == 'down':
                self.stage = "up"
                self.counter += 1

            # Form feedback
            if 90 <= angle <= 160:
                cv.putText(image, 'correct', (100,100), cv.FONT_HERSHEY_SIMPLEX, 1, (0,255,0), 2)
            else:
                if angle > 160:
                    set_text("squat lower", (255,0,0), image)
                elif angle < 90:
                    set_text("too low", (255,0,0), image)

        return av.VideoFrame.from_ndarray(image, format="rgb24")

    def _infer_pose(self, image):
        self._in_queue.put_nowait(image)
        return self._out_queue.get(timeout=10)

    def _stop_pose_process(self):
        self._in_queue.put_nowait(_SENTINEL_)
        self._pose_process.join(timeout=10)

    def __del__(self):
        self._stop_pose_process()



def set_text(text, color, image):
    cv.putText(image, text, (100,100), cv.FONT_HERSHEY_SIMPLEX, 1, color, 2)



def main():
    st.header("Squats")
    st.markdown("""Keep your body fully in frame and turn sideways. The webcam will track your form.""")
    
    def processor_factory():
        return Tokyo2020PictogramVideoProcessor()

    webrtc_ctx = webrtc_streamer(
        key="tokyo2020-Pictogram",
        mode=WebRtcMode.SENDRECV,
        rtc_configuration={"iceServers": get_ice_servers()},
        media_stream_constraints={"video": True, "audio": False},
        video_processor_factory=processor_factory,
    )
    
    st.session_state["started"] = webrtc_ctx.state.playing

if __name__ == "__main__":
    main()
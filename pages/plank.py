import av
import time
import copy
import base64
import cv2 as cv
import numpy as np
from pygame import mixer
from gtts import gTTS
import mediapipe as mp
import streamlit as st

from multiprocessing import Queue, Process
from streamlit_webrtc import VideoProcessorBase, webrtc_streamer, WebRtcMode
from utils import CvFpsCalc
# from main import draw_landmarks, draw_stick_figure

from app import pose_process
from utils.fake_objects import FakeResultObject, FakeLandmarksObject, FakeLandmarkObject
from utils.functions import calculate_angle
from utils.turn import get_ice_servers


_SENTINEL_ = "_SENTINEL_"

def autoplay_audio(file_path: str):
    with open(file_path, "rb") as f:
        data = f.read()
        b64 = base64.b64encode(data).decode()
        md = f"""
            <audio autoplay="true">
            <source src="data:audio/mp3;base64,{b64}" type="audio/mp3">
            </audio>
            """
        st.markdown(
            md,
            unsafe_allow_html=True,
        )

autoplay_audio("pcvoice.mp3")
class Tokyo2020PictogramVideoProcessor(VideoProcessorBase):

    # correct = gTTS(text='correct', lang='en')
    # correct.save("correct.mp3")

    # wrong = gTTS(text='wrong', lang='en')
    # wrong.save("wrong.mp3")

    autoplay_audio("pcvoice.mp3")

    
    def __init__(self) -> None:
        self._in_queue = Queue()
        self._out_queue = Queue()
        self.starting_time = time.time()
        self.hello = True
        

        # mixer.init()
        
        
        # self.elapsed_time = 0
        
        self._pose_process = Process(target=pose_process, kwargs={
            "in_queue": self._in_queue,
            "out_queue": self._out_queue,
        })
        self._cvFpsCalc = CvFpsCalc(buffer_len=10)

        self._pose_process.start()
        

        # reason why stage doesn't make sense in recv function is bc stage is set to 'up' for every frame processed, so it resets.
    
    
    def recv(self, frame: av.VideoFrame) -> av.VideoFrame:
        

        # display_fps = self._cvFpsCalc.get()
        image = frame.to_ndarray(format="bgr24")
        image = cv.flip(image, 1)  # Mirrors image
        image = copy.deepcopy(image) #just copies the image so the original image will stay unaffected
        
        image = cv.cvtColor(image, cv.COLOR_BGR2RGB)
        mp_pose = mp.solutions.pose

        results = self._infer_pose(image)
        # start_time = datetime.now()
        # diff = (datetime.now() - start_time).seconds


        if results.pose_landmarks is not None:
            elapsed_time = int(time.time() - self.starting_time)
            
            landmarks1 = results.pose_landmarks.landmark
            # ankle1 = [int(landmarks1[mp_pose.PoseLandmark.LEFT_ANKLE.value].x * image.shape[1]),
            #             int(landmarks1[mp_pose.PoseLandmark.LEFT_ANKLE.value].y * image.shape[0])]
            knee1 = [int(landmarks1[mp_pose.PoseLandmark.LEFT_KNEE.value].x * image.shape[1]),
                    int(landmarks1[mp_pose.PoseLandmark.LEFT_KNEE.value].y * image.shape[0])]
            hip1 = [int(landmarks1[mp_pose.PoseLandmark.LEFT_HIP.value].x * image.shape[1]),
                    int(landmarks1[mp_pose.PoseLandmark.LEFT_HIP.value].y * image.shape[0])]
            shoulder1 = [int(landmarks1[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x * image.shape[1]),
                    int(landmarks1[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y * image.shape[0])]


            angle1 = calculate_angle(shoulder1, hip1, knee1)
            # hip_angle = calculate_angle(shoulder1, hip1, elbow1)

            cv.putText(image, f'Angle: {round(angle1, 2)}', (50, 50), cv.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            cv.putText(image, 'Timer:' , (300,50), 
                        cv.FONT_HERSHEY_SIMPLEX, 1, (255,255,255), 2)
            cv.putText(image, f'{str(elapsed_time)}s', (420,50), 
                cv.FONT_HERSHEY_SIMPLEX, 1, (255,255,255), 2)


            cv.circle(image, tuple(shoulder1), 10, (255, 255, 255), -1)
            cv.circle(image, tuple(hip1), 10, (255, 255, 255), -1)
            cv.circle(image, tuple(knee1), 10, (255, 255, 255), -1)
           
            # print("Stage is!", self.stage)
            
            if 150 <= abs(angle1):

                
                cv.putText(image, 'correct', (100, 100), cv.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
                autoplay_audio("local_audio.mp3")

                if self.hello == True:
                    # autoplay_audio("local_audio.mp3")
                
                    
                    # mixer.music.load("pcvoice.mp3")
                    # mixer.music.play()
                    self.hello = False
                    print(self.hello)
        

            else:
                
                self.starting_time = time.time()

                cv.putText(image, 'lower your hip', (100, 100), cv.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)

                if self.hello == False:
                    # autoplay_audio("pcvoice.mp3")
                    # mixer.music.load("wrong.mp3")
                    # mixer.music.play()
                    
                    self.hello = True

        return av.VideoFrame.from_ndarray(image, format="rgb24")

    def _infer_pose(self, image):
        self._in_queue.put_nowait(image)
        return self._out_queue.get(timeout=10)

    def _stop_pose_process(self):
        self._in_queue.put_nowait(_SENTINEL_)
        self._pose_process.join(timeout=10)

    def __del__(self):
        self._stop_pose_process()


def main():
    st.header("Plank")
    st.markdown("""Keep your body fully in frame and slightly tilted, the webcam will track the right side of your body. See video below!""")
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
    #try testing code without this session state statement

    st.video("videos/plank.mp4")


if __name__ == "__main__":
    main()
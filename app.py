import streamlit as st 
import copy
import cv2 as cv
import numpy as np
import mediapipe as mp
import av
import streamlit as st

from multiprocessing import Queue, Process
from streamlit_webrtc import VideoProcessorBase, webrtc_streamer, WebRtcMode
from utils import CvFpsCalc
# from main import draw_landmarks, draw_stick_figure

from utils.fake_objects import FakeResultObject, FakeLandmarksObject, FakeLandmarkObject
from utils.functions import calculate_angle
from utils.turn import get_ice_servers


_SENTINEL_ = "_SENTINEL_"


def main():
    st.header("Workout Wizard")
    st.sidebar.success("Select a workout above.")


    st.info("Wanna be your best self? ⬅️ Try out the exercises on the left to see if you're performing them correctly!")

    

    contact_form = """
    <form action="https://formsubmit.co/fatimahandhussain@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="email" name="email" placeholder= "Your email:" required>
        <input type="text" name="feedback" placeholder= "Any feedback:" required>
        <input type="hidden" name="_next" value="https://huggingface.co/spaces/fatimahhussain/workoutwizard">
        <button type="submit"">Send</button>
    </form>
    """

    st.markdown(contact_form, unsafe_allow_html=True)

    # from st docs!!
    # with st.form("my_form"):
    #     st.write("Do you have any feedback? Please let Fatimah know down below!")
    #     email = st.text_input("Email:")
    #     maintext= st.text_input("Feedback:")
    #     # Every form must have a submit button.
    #     submitted = st.form_submit_button("Submit")
    #     if submitted:
    #         # st.write("Thanks for your input!")
    #         st.write("your email", email, "your feedback", maintext)

    # stframe = st.empty()
    




def pose_process(
    in_queue: Queue, #queue where the function will read input items
    out_queue: Queue, #queue where function will put output items
):
#initalizes pose object from mediapipe library

    pose = mp.solutions.pose.Pose(
        static_image_mode=False,
        model_complexity=0,
        min_detection_confidence=0.5,
        min_tracking_confidence=0.5,
    )

#
    while True:
        input_item = in_queue.get(timeout=10)
        if isinstance(input_item, type(_SENTINEL_)) and input_item == _SENTINEL_:
            break

        results = pose.process(input_item)

        # Check if landmarks data is present
        if results.pose_landmarks and results.pose_landmarks.landmark:
            landmarks = [
                FakeLandmarkObject(
                    x=pose_landmark.x,
                    y=pose_landmark.y,
                    z=pose_landmark.z,
                    # visibility=pose_landmark.visibility, 
                ) for pose_landmark in results.pose_landmarks.landmark
            ]
        # Create the picklable_results object with either populated or empty landmarks

        #what is picklable? maintain program state across sessions,
        picklable_results = FakeResultObject(pose_landmarks=FakeLandmarksObject(landmark=landmarks))

        # Put the result in the queue
        out_queue.put_nowait(picklable_results)

        #out_queue:  put an item on the queue if a free slot is immediately available, else raise the Full exception (timeout is ignored in that case).

if __name__ == "__main__":
    main()
import os
import time
import argparse

import numpy as np
import cv2

parser = argparse.ArgumentParser()
parser.add_argument('infile')

args = parser.parse_args()
print(args)

infile = args.infile

WINDOW_NAME = infile
TRACK_BAR_NAME = 'trackbar'

cv2.namedWindow(WINDOW_NAME)

cap = cv2.VideoCapture(infile)
number_of_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
video_fps = cap.get(cv2.CAP_PROP_FPS)
play_wait_timeout = int(1000.0 / video_fps)

global_frame_index = 0
global_pause = False
global_update_with_frame_index = False
global_trackbar_updated = False


def onTrackbarChanged(seek_pos):
    global global_frame_index, global_update_with_frame_index, global_trackbar_updated
    if global_trackbar_updated:
        global_trackbar_updated = False
    else:
        global_frame_index = seek_pos
        global_update_with_frame_index = True


cv2.createTrackbar(
    TRACK_BAR_NAME,
    WINDOW_NAME,
    global_frame_index,
    number_of_frames,
    onTrackbarChanged,
)

print('number of frames', number_of_frames)
print('video fps', video_fps)

last_frame = None

while True:
    if global_update_with_frame_index:
        global_update_with_frame_index = False
        if global_frame_index < 0:
            global_frame_index = 0
        if global_frame_index >= number_of_frames:
            global_frame_index = number_of_frames - 1

        global_trackbar_updated = True
        cv2.setTrackbarPos(TRACK_BAR_NAME, WINDOW_NAME, global_frame_index)
        cap.set(cv2.CAP_PROP_POS_FRAMES, global_frame_index)

        ret, frame = cap.read()

        if ret is False:
            print('ret is False')
            print('failed to seek to frame number ' + repr(global_frame_index))
            break
        else:
            # print('should update to frame number', global_frame_index)
            cv2.imshow(WINDOW_NAME, frame)
            last_frame = frame

            global_pause = True
            k = cv2.waitKey(play_wait_timeout)
    elif global_pause:
        if last_frame is not None:
            cv2.imshow(WINDOW_NAME, last_frame)

        k = cv2.waitKey(play_wait_timeout)
    else:
        ret, frame = cap.read()

        if ret is False:
            print('ret is False')
            global_pause = True
        else:
            global_frame_index += 1
            cv2.imshow(WINDOW_NAME, frame)
            last_frame = frame

            global_trackbar_updated = True
            cv2.setTrackbarPos(TRACK_BAR_NAME, WINDOW_NAME, global_frame_index)

            k = cv2.waitKey(play_wait_timeout)

    k = k & 0xff
    if k == ord('q') or k == 27:
        break
    elif k == 32:  # space key
        global_pause = not global_pause
    elif k == 44:  # < key
        # pause and seek to previous frame
        global_pause = True
        global_update_with_frame_index = True
        # print('global_frame_index (before)', global_frame_index)
        global_frame_index -= 1
        # print('global_frame_index (after)', global_frame_index)
        pass
    elif k == 46:  # > key
        # pause and seek to next frame
        global_pause = True
        global_update_with_frame_index = True
        global_frame_index += 1
        pass

    if not (k == 255):
        # print('k:', k)
        pass

cap.release()
cv2.destroyAllWindows()

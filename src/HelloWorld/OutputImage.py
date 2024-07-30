import cv2
import os
video_path = 'out/HelloWorld.mp4'
output_dir = 'output/'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)
frames_to_capture = [108, 297, 529, 808, 980, 1083, 1316, 1917]
video = cv2.VideoCapture(video_path)
if not video.isOpened():
    print("cannot open video")
    exit()
frame_count = int(video.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"Total frame {frame_count}")
for frame_number in frames_to_capture:
    if frame_number >= frame_count:
        print(f"Frmae {frame_number} exceed max frame number, exit")
        continue
    video.set(cv2.CAP_PROP_POS_FRAMES, frame_number)
    success, frame = video.read()
    if success:
        output_path = os.path.join(output_dir, f'frame_{frame_number}.png')
        cv2.imwrite(output_path, frame)
        print(f"Frame {frame_number} save as {output_path}")
    else:
        print(f"Can't read {frame_number}")
video.release()
print("Complete")

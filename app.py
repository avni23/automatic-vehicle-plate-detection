from ultralytics import YOLO
from flask import Flask, render_template, Response
import cv2
import pickle
import tempfile
import os



app = Flask(_name_)

# Load your license plate detection model
load_license_plate_model = YOLO('yolov8l.pt')
model = load_license_plate_model()
#pickle.dump(model,open('model.pkl','wb'))
#pickle.load(open('model.pkl','rb'))

# Function to capture video frames
def generate_frames():
    cap = cv2.VideoCapture(0)  # Use 0 for default camera or provide the video file path

    while True:
        success, frame = cap.read()
        if not success:
            break
        else:
            
            
            # processed_frame = detect_license_plate(frame, model)
           
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # multipart streaming
    cap.release()

    cv.destroyAllWindows()        

@app.route('/')
def index():
    return render_template('index.html')  
    
@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        # Save the video file to a temporary directory
        temp_dir = tempfile.mkdtemp()
        video_path = os.path.join(temp_dir, 'input_video.mp4')
        file.save(video_path)

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if _name_ == "_main_":
    app.run(debug=True)
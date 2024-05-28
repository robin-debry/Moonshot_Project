from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
from ultralytics import YOLO


app = Flask(__name__)
CORS(app)

# Load the YOLOv8 model
model = YOLO("yolov8n.pt")

@app.route('/detect', methods=['POST'])
def detect():
    files = request.files.getlist('images')
    alt_texts = []

    for file in files:
        image = Image.open(io.BytesIO(file.read()))

        # Perform detection
        results = model(image)

        # Extract the detected objects with confidence higher than 60%
        detections = results[0].boxes
        high_conf_detections = [box for box in detections if box.conf > 0.60]
        labels = [model.names[int(box.cls)] for box in high_conf_detections]

        # Count occurrences of each label
        label_counts = {}
        for label in labels:
            label_counts[label] = label_counts.get(label, 0) + 1

        # Create alt text for this image
        alt_text_parts = []
        for label, count in label_counts.items():
            if count > 1:
                alt_text_parts.append(f"{count} {label}s")
            else:
                alt_text_parts.append(f"{count} {label}")
        
        alt_text = ", ".join(alt_text_parts) if alt_text_parts else "No detectable objects"
        alt_texts.append(alt_text)

    # Allow requests from all origins
    response = jsonify({"alt_texts": alt_texts})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

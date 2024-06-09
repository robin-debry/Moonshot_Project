from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
from ultralytics import YOLO
import os
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)

# Load the YOLO model
model_path = "best.pt"

# Ensure the model file exists
if not os.path.isfile(model_path):
    logging.error(f"The model file {model_path} does not exist.")
    raise FileNotFoundError(f"The model file {model_path} does not exist.")

try:
    model = YOLO(model_path)
    logging.info(f"Successfully loaded model from {model_path}")
except Exception as e:
    logging.error(f"Error loading the YOLO model: {e}")
    raise RuntimeError(f"Error loading the YOLO model: {e}")

@app.route('/detect', methods=['POST'])
def detect():
    try:
        files = request.files.getlist('images')
        confidence_threshold = float(request.form.get('confidence', 0.60))
        alt_texts = []

        for file in files:
            image = Image.open(io.BytesIO(file.read()))

            # Perform detection
            results = model(image)

            # Extract the detected objects with confidence higher than specified threshold
            detections = results[0].boxes
            high_conf_detections = [box for box in detections if box.conf > confidence_threshold]
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

        response = jsonify({"alt_texts": alt_texts})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except Exception as e:
        logging.error(f"Error processing request: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

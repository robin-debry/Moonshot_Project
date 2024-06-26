# Technical Specification

<details>
<summary>Table of contents</summary>
  
- [Technical Specification](#technical-specification)
  - [Introduction](#introduction)
  - [Context](#context)
  - [Target audience](#target-audience)
  - [Technologies](#technologies)
    - [Browser Extension (Frontend)](#browser-extension-frontend)
    - [Backend Server](#backend-server)
    - [Machine Learning Model](#machine-learning-model)
  - [Setting up Python environment](#setting-up-python-environment)
  - [Training the machine learning model](#training-the-machine-learning-model)
  - [Tracking the performance of the model](#tracking-the-performance-of-the-model)
  - [Integrating the extension with the browser](#integrating-the-extension-with-the-browser)
  - [Why Ultralytics YOLOv8 is the best choice for this project](#why-ultralytics-yolov8-is-the-best-choice-for-this-project)
    - [Pertinence Against the Problem](#pertinence-against-the-problem)
  - [Comparison of YOLOv8 with Other Models](#comparison-of-yolov8-with-other-models)
    - [YOLOv8](#yolov8)
    - [VGG16 + LSTM](#vgg16--lstm)
    - [ResNet + Transformer](#resnet--transformer)
    - [EfficientNet + GRU](#efficientnet--gru)
  - [Detailed comparison table of machine learning models](#detailed-comparison-table-of-machine-learning-models)
  - [Why Flask is the best choice for the backend Server](#why-flask-is-the-best-choice-for-the-backend-server)
    - [Lightweight and Scalable](#lightweight-and-scalable)
  - [Why PyTorch is the best choice for the machine learning model](#why-pytorch-is-the-best-choice-for-the-machine-learning-model)
    - [Deep learning framework](#deep-learning-framework)
    - [Comparison of PyTorch with other machine learning frameworks](#comparison-of-pytorch-with-other-machine-learning-frameworks)
      - [PyTorch](#pytorch)
      - [TensorFlow](#tensorflow)
      - [Keras](#keras)
      - [OpenCV](#opencv)
    - [Detailed comparison table of machine learning frameworks](#detailed-comparison-table-of-machine-learning-frameworks)
  - [Comparison of Flask with other backend frameworks](#comparison-of-flask-with-other-backend-frameworks)
    - [Flask](#flask)
    - [Django](#django)
    - [Node.js (Express)](#nodejs-express)
    - [Ruby on rails](#ruby-on-rails)
  - [Detailed comparison table of backend frameworks](#detailed-comparison-table-of-backend-frameworks)
  - [Conclusion](#conclusion)
  - [Resources](#resources)

</details>

## Introduction

This document details the technical specifications for a project to improve screen readers by automatically generating accurate alternative text for images using a machine learning model. This will lead to an enhanced Web accessibility for persons with visual impairments.

## Context

Screen readers are tools that read aloud to users with visual impairments the text content of web pages. Often, they fail when it comes to images with missing descriptive alternative text. This project tries to remedy this situation by creating a browser extension that auto-generates appropriate alt text for images, thus improving web accessibility, using machine learning.

## Target audience

The primary users of this project are:

**Visually impaired individuals:** People who rely on screen readers to access web content.

## Technologies

The following technologies are intended to be used in the project

**Programming Languages:** Python is to be used in the development and training of the machine learning model. For the browser extension, JavaScript for frontend, HTML/CSS. Frameworks: PyTorch and Ultralytics YOLOv8 for the ML part. Flask for the server backend.

**Tools:**

- IDEs: Visual Studio Code
- Version Control: Git and GitHub
- Virtual Environment: Virtualenv for managing Python dependencies
- Software Architecture: The software architecture of this project follows a modular and scalable design, consisting of the following components:

### Browser Extension (Frontend)

**Responsibilities:**

- Capture images from web pages.
- Send images to the backend server for processing.
- Display generated alternative text to the user.

**Technologies:**

- JavaScript for the core functionality.
- HTML/CSS for the user interface.

### Backend Server

**Responsibilities:**

- Host the machine learning model.
- Receive image data from the browser extension.
- Process images using the machine learning model to generate alt text.
- Send the generated alt text back to the browser extension.

**Technologies:**

- Flask for setting up a lightweight server.
- PyTorch and Ultralytics YOLOv8 for integrating and serving the machine learning model.

### Machine Learning Model

**Responsibilities:**

- Recognize the content of images.
- Generate descriptive alt text.

**Technologies:**

- PyTorch for the underlying deep learning framework.
- Ultralytics YOLOv8 for object detection and feature extraction.

## Setting up Python environment

Create a virtual environment using virtualenv to ensure a clean and isolated environment for the project. Run the following command in the project directory:

1. Create a virtual environment:

    ```bash
    virtualenv venv
    ```

2. Activate the virtual environment:

    ```bash
    source venv/bin/activate
    ```

3. Install the required packages:

    ```bash
    pip install flask torch torchvision ultralytics
    ```

4. Install the Comet_ml package for tracking and optimizing the model:

    ```bash
    pip install comet_ml
    ```

    This package is optional but recommended for better tracking and optimizing of the model.

## Training the machine learning model

To train the machine learning model using PyTorch and Ultralytics YOLOv8
We will use the COCO dataset for training the model. Especially the COCO128 dataset for faster training.
For that we will use the following command:

```python
model.train(data="coco128.yaml", epochs=100)  # train the model for 100 epochs
```

This command will start the training process using the COCO128 dataset and train the model for 100 epochs.
It will generate the dataset automatically.

## Tracking the performance of the model

To track the performance of the model, we can use the Comet_ml package. This package allows us to log and visualize the training process, including metrics, hyperparameters, and model performance.
With Comet_ml, we can easily monitor the training progress with graphs and charts, making it easier to optimize the model.
![Comet_ml](images/trackingComet_ml.png)

## Integrating the extension with the browser

- Packaging the browser extension for different browsers (Chrome, Firefox, etc.).
- Ensuring compatibility with various screen readers (JAWS, NVDA, VoiceOver).

## Why Ultralytics YOLOv8 is the best choice for this project

### Pertinence Against the Problem

- The problem of generating descriptive alt text for images is essentially an image captioning task, which requires understanding and describing the content of an image in natural language.
  
- YOLOv8 is a state-of-the-art object detection system that can detect and classify multiple objects within an image, providing detailed information about the content. This makes it ideal for generating descriptive alt text for images.

- Feature Extraction and Caption Generation: YOLOv8 can detect and classify multiple objects within an image, providing detailed information about the content. These features can then be used to generate descriptive and contextually relevant alt text, ensuring that visually impaired users receive accurate descriptions of the visual content.

- This choice of algorithm leverages the strengths of YOLOv8 in real-time object detection to provide a robust solution for generating alt text, directly addressing the needs of visually impaired users who rely on screen readers.

## Comparison of YOLOv8 with Other Models

### YOLOv8

**Strengths:**

- Real-time Performance: YOLOv8 is designed for real-time object detection, providing quick and accurate detection of multiple objects in an image.
High Accuracy: It offers improved accuracy and speed compared to earlier YOLO versions.
- Versatility: Effective in detecting a wide variety of objects, making it useful for generating descriptive alt text in diverse contexts.

**Weaknesses:**

- Caption Generation: YOLOv8 focuses on object detection. Additional steps are needed to convert detected objects into descriptive sentences.
  
### VGG16 + LSTM

**Strengths:**

- Image Captioning: Combining VGG16 (a CNN) with LSTM (a type of RNN) is a classic approach for image captioning. VGG16 extracts features, and LSTM generates coherent captions.
- Proven Performance: This architecture has been widely used and validated for generating descriptive captions.

**Weaknesses:**

- Speed: Slower compared to YOLOv8 in terms of object detection due to the complexity of combining CNN and LSTM.
- Scalability: May not perform as well in real-time applications compared to YOLOv8.

### ResNet + Transformer

**Strengths:**

- High Accuracy: Known for excellent performance in generating high-quality captions.

**Weaknesses:**

- Complexity: More computationally intensive and requires more resources, which can impact real-time performance.
- Implementation Difficulty: More complex to implement and fine-tune compared to YOLOv8.

### EfficientNet + GRU

**Strengths:**

- Efficiency: EfficientNet is designed to be both accurate and efficient, providing good performance with lower computational cost.
- Caption Generation: GRUs (Gated Recurrent Units) are simpler and faster alternatives to LSTMs for sequence generation.

**Weaknesses:**

- Real-time Performance: While efficient, it might not match YOLOv8's real-time object detection capabilities.

## Detailed comparison table of machine learning models

| Feature | YOLOv8 | VGG16 + LSTM | ResNet + Transformer | EfficientNet + GRU |
| --- | --- | --- | --- | --- |
| Real-time Performance | Excellent | Moderate | Moderate | Good |
| Accuracy | High | High | Very High | High |
| Object Detection | Outstanding | Good (requires additional steps) | Good (requires additional steps) | Good (requires additional steps) |
| Caption Generation | Requires additional steps | Excellent | Excellent | Good |
| Implementation Complexity | Moderate | High | High | Moderate |
| Resource Efficiency | High | Moderate | Low | High |
| Scalability | Excellent | Moderate | Low | Good |

## Why Flask is the best choice for the backend Server

### Lightweight and Scalable

- Flask is a lightweight and flexible microframework that is well-suited for building RESTful APIs and web services. It provides a simple and efficient way to set up a server backend for processing image data and generating alt text.

- Flask's modular design allows for easy integration with other Python libraries and frameworks, making it an ideal choice for hosting the machine learning model and handling image processing tasks.

- Flask's scalability and extensibility make it a versatile tool for building robust and efficient server applications, ensuring that the backend server can handle a large volume of image requests and provide timely responses to the browser extension.

## Why PyTorch is the best choice for the machine learning model

### Deep learning framework

- PyTorch is a powerful deep learning framework that provides a flexible and efficient platform for building and training neural networks. It offers a wide range of tools and libraries for developing complex machine learning models, making it an ideal choice for training the image recognition model.

- PyTorch's dynamic computational graph and automatic differentiation capabilities simplify the process of building and optimizing deep learning models, allowing for rapid prototyping and experimentation with different architectures and hyperparameters.

### Comparison of PyTorch with other machine learning frameworks

#### PyTorch

**Strengths:**

- Dynamic Computational Graph: PyTorch uses a dynamic computational graph, making it flexible and easy to debug.
- Strong Community and Ecosystem: Extensive support and a large number of pre-trained models and libraries.
- Ease of Use: Intuitive design and syntax, similar to Python, making it accessible to researchers and developers.
- Integration with Python: Seamless integration with Python libraries and tools.
- Versatility: Suitable for both research and production environments.

**Weaknesses:**
Performance: Slightly less optimized for production deployment compared to TensorFlow.

#### TensorFlow

**Strengths:**

- Static Computational Graph: Optimized for performance and deployment in production environments.
- Wide Adoption: Extensive industry adoption and support.
- Versatile: Supports a wide range of machine learning tasks, including deep learning and traditional ML.
- TensorFlow Serving: Robust tools for deploying models in production.

**Weaknesses:**

- Steeper Learning Curve: More complex and less intuitive than PyTorch.
- Debugging: More difficult to debug due to static computational graphs.

#### Keras

**Strengths:**

- High-Level API: User-friendly and easy to use, ideal for quick prototyping.
- Integration with TensorFlow: As part of TensorFlow 2.x, it benefits from TensorFlow's performance optimizations.
- Modularity: Simple to build and experiment with different models.

**Weaknesses:**

- Less Control: Higher-level abstraction can limit fine-grained control over model architecture and training processes.
- Dependency on TensorFlow: Performance and capabilities are tied to TensorFlow.

#### OpenCV

**Strengths:**

- Computer Vision Focus: Specifically optimized for computer vision tasks with extensive image processing capabilities.
- Real-Time Performance: Excellent performance for real-time applications.
Comprehensive Library: A wide range of functions for image and video analysis.

**Weaknesses:**

- Limited Deep Learning Support: While it supports deep learning models, it is not as comprehensive as frameworks like PyTorch or TensorFlow.
- Less Suitable for Training: Better suited for deployment rather than training deep learning models.

### Detailed comparison table of machine learning frameworks

| Feature | PyTorch | TensorFlow | Keras | OpenCV |
| --- | --- | --- | --- | --- |
| Ease of Use | High | Moderate | Very High | Moderate |
| Flexibility | Very High | High | Moderate | Moderate |
| Debugging | Easy (Dynamic Graph) | Hard (Static Graph) | Easy | Moderate |
| Performance | High | Very High | High | Very High |
| Deployment | Good | Excellent | Good | Excellent |
| Community and Ecosystem | Very Strong | Very Strong | Strong | Strong |
| Real-Time Applications | Good | Good | Moderate | Excellent |
| Image Processing Capabilities | Moderate | Moderate | Moderate | Excellent |
| Deep Learning Focus | Strong | Strong | Strong | Moderate |
| Integration with Python Libraries | Excellent | Good | Good | Good |

## Comparison of Flask with other backend frameworks

### Flask

**Strengths:**

- Simplicity and Flexibility: Flask is a micro-framework that is lightweight and easy to use, making it ideal for small to medium-sized applications.
- Modularity: Allows developers to pick and choose the components they need, promoting flexibility.
- Documentation and Community: Well-documented with a strong community for support.
- Integration with Python: Seamless integration with Python libraries, which is beneficial for a machine learning project.
  
**Weaknesses:**

- Limited Built-in Features: Requires additional libraries and extensions for features that are built-in with other frameworks.
- Scalability: Not as inherently scalable as some other frameworks for very large applications.

### Django

**Strengths:**

- Batteries-Included: Comes with a lot of built-in features, including an ORM, authentication, and an admin panel, which can speed up development.
- Security: Strong emphasis on security features and practices.
Scalability: Better suited for larger applications with complex requirements.
- Documentation and Community: Extensive documentation and a large community.

**Weaknesses:**

- Monolithic: Can be overkill for smaller applications due to its monolithic nature.
- Learning Curve: Steeper learning curve compared to Flask.
- Flexibility: Less flexible than Flask due to its opinionated design.

### Node.js (Express)

**Strengths:**

- Performance: High performance due to its non-blocking, event-driven architecture.
- JavaScript Everywhere: Allows using JavaScript for both frontend and backend, promoting a consistent development environment.
- Asynchronous Processing: Naturally suited for handling multiple concurrent connections, making it ideal for real-time applications.
- Large Ecosystem: Extensive ecosystem with a wide range of packages available through npm.

**Weaknesses:**

- Callback Hell: Can lead to complex and hard-to-maintain code if not managed properly (though modern practices like Promises and async/await help mitigate this).
- Single-Threaded: Despite its asynchronous nature, Node.js runs on a single thread, which can be a bottleneck for CPU-intensive tasks.
- Scalability: Can be challenging to scale for very high-traffic applications.

### Ruby on rails

**Strengths:**

- Convention over Configuration: Emphasizes conventions to streamline development, leading to faster development cycles.
- Built-in Features: Comes with many built-in features, such as ORM, migrations, and scaffolding.
- Community and Resources: Strong community and a wealth of resources and libraries (gems).
- Productivity: High developer productivity due to the framework's emphasis on simplicity and convention.

**Weaknesses:**

- Performance: Generally slower than Node.js and even Flask in some scenarios.
- Scalability: Can be more challenging to scale for very high-traffic applications.

## Detailed comparison table of backend frameworks

| Feature | Flask | Django | Node.js (Express) | Ruby on Rails |
| --- | --- | --- | --- | --- |
| Ease of Use | High | Moderate | High | High |
| Flexibility | Very High | Moderate | High | Moderate |
| Learning Curve | Gentle | Steep | Gentle | Moderate |
| Built-in Features | Minimal | Extensive | Minimal | Extensive |
| Performance | Good | Moderate | Excellent | Moderate |
| Scalability | Moderate | High | High | Moderate |
| Community and Ecosystem | Strong | Very Strong | Very Strong | Strong |
| Integration with Machine Learning | Excellent | Excellent | Good | Good |
| Security | Moderate | Very High | Moderate | High |
| Development Speed | Fast | Moderate | Fast | Fast |

## Conclusion

This project intends to significantly enhance web accessibility for visually impaired users by creating a tool that generates accurate alternative text for images. Using machine learning, this project shall try to bridge the gap between visual content and people who depend on screen readers to make the web more accessible to all.

## Resources

- [JAWS (Job Access With Speech)](https://www.freedomscientific.com/products/software/jaws/)
- [NVDA (NonVisual Desktop Access)](https://www.nvaccess.org/)
- [VoiceOver](https://www.apple.com/accessibility/mac/vision/)
- [Google Chrome](https://www.google.com/chrome/)
- [PyTorch Documentation](https://pytorch.org/docs/stable/index.html)
- [Flask Documentation](https://flask.palletsprojects.com/en/2.0.x/)
- [Comet_ml](https://www.comet.ml/)
- [COCO Dataset](https://cocodataset.org/)
- [Ultralytics YOLOv8](https://docs.ultralytics.com/modes/)
- [LSTM (Long Short-Term Memory)](https://en.wikipedia.org/wiki/Long_short-term_memory)
- [GRU (Gated Recurrent Unit)](https://en.wikipedia.org/wiki/Gated_recurrent_unit)
- [VGG16 Documentation](https://neurohive.io/en/popular-networks/vgg16/)
- [ResNet Documentation](https://neurohive.io/en/popular-networks/resnet/)
- [EfficientNet Documentation](https://neurohive.io/en/popular-networks/efficientnet/) 
- [OpenCV Documentation](https://opencv.org/)
- [Node.js Documentation](https://nodejs.org/en/)
- [Ruby on Rails Documentation](https://rubyonrails.org/)
- [Express Documentation](https://expressjs.com/)
- [Django Documentation](https://www.djangoproject.com/)
- [TensorFlow Documentation](https://www.tensorflow.org/)
- [Keras Documentation](https://keras.io/)

# Functional Specifications

<details>
<summary>Table of contents</summary>

- [Functional Specifications](#functional-specifications)
  - [Context](#context)
  - [Target audience](#target-audience)
  - [Screen reader](#screen-reader)
    - [What is a screen reader?](#what-is-a-screen-reader)
    - [How does screen reader work?](#how-does-screen-reader-work)
    - [Why it is useful to improve them?](#why-it-is-useful-to-improve-them)
  - [Personas](#personas)
    - [Persona 1 Emma Johnson](#persona-1-emma-johnson)
    - [Persona 2 John Smith](#persona-2-john-smith)
  - [Laws and regulations](#laws-and-regulations)
  - [Requirements](#requirements)
  - [Functionalities](#functionalities)
  - [Must have](#must-have)
  - [Out of scope](#out-of-scope)
  - [Compatibility](#compatibility)
  - [Privacy](#privacy)
  - [Risks and assumptions](#risks-and-assumptions)
  - [Security](#security)
  - [Tools and Technologies](#tools-and-technologies)
    - [Programming Languages](#programming-languages)
      - [Frameworks and Libraries](#frameworks-and-libraries)
      - [Development Environment](#development-environment)
      - [Version Control](#version-control)
      - [Setup Development Environment](#setup-development-environment)
      - [Develop Machine Learning Model](#develop-machine-learning-model)
      - [Create Backend Server](#create-backend-server)
  - [Testing](#testing)
  - [Success criteria](#success-criteria)
  - [References](#references)
  - [Glossary](#glossary)

</details>

## Context

Nowadays, the web is a very important part of our lives. It is used for many things, such as shopping, working, learning, and communicating. However, not everyone can use the web easily. People with disabilities, such as visual impairments, may have difficulty using the web. Screen readers are tools that help people with visual impairments use the web. They read the content of web pages out loud, so that people with visual impairments can hear it. However, screen readers are not perfect. They sometimes have trouble reading web pages correctly especially with images. In this project, I will try to improve screen readers by adding the correct alternative text to permit the screen reader to read the image . I will do this by training a machine learning model to recognize the content of an image. The model will then generate the correct alternative text for the image. This will help people with visual impairments.

## Target audience

In the world, there are between 40 and 45 million people who are blind. There are also between 285 and 300 million visually impaired people

## Screen reader

### What is a screen reader?

A screen reader is software that reads the content of a web page out loud. It does this by converting the text on the web page into speech. The screen reader can also read the content of images on the web page. However, it sometimes has trouble reading images correctly. This is because images do not have text associated with them. The screen reader cannot read the content of an image.

### How does screen reader work?

A screen reader works by converting the text on a web page into speech. It does this by using a text-to-speech engine.

### Why it is useful to improve them?

It is important to improve screen readers so that people with visual impairments can use the web more easily. By adding the correct alternative text to images, we can help screen readers read images correctly. This will make it easier for people with visual impairments to access the web.

## Personas

### Persona 1 Emma Johnson

- Age: 28
- Occupation: Content Creator
- Location: New York, USA
- Disability: Visually Impaired

**Background:**
Emma is a professional content creator who produces online tutorials and blogs about digital marketing. Despite her visual impairment, she is highly active on social media and relies heavily on technology for her work. Emma uses a screen reader to navigate the web and manage her online presence. She is proficient in using assistive technologies but often finds herself frustrated when encountering images without descriptive alternative text.

**Goals:**
To efficiently manage her website and social media content.
To access and understand web content without any barriers.
To create accessible content for her audience, ensuring inclusivity.

**Challenges:**
Struggles with images on websites that lack descriptive alternative text.
Experiences difficulties in accessing visual content, which hampers her ability to engage fully with digital resources.
Needs to ensure her own content is accessible, requiring reliable tools that support her in generating accurate alternative text.

**Technology Usage:**
Devices: MacBook Pro, iPhone
Assistive Tools: VoiceOver (screen reader)
Browsers: Safari, Google Chrome

**Needs:**
A reliable browser extension that can generate accurate alternative text for images.
Seamless integration with her current tools and workflow.
A tool that ensures her own content is accessible, promoting inclusivity among her audience.

### Persona 2 John Smith

- Age: 45
- Occupation: Customer Service Representative
- Location: London, UK
- Disability: Blind

**Background:**
John works as a customer service representative at a major telecom company. He has been blind since birth and has extensive experience using screen readers to perform his job. John enjoys staying informed about the latest technologies and uses the web for both professional and personal purposes. He often encounters challenges when images on web pages lack proper alternative text.

**Goals:**
To perform his job duties effectively without visual information barriers.
To stay informed about news and advancements in technology.
To independently navigate the web and access all types of content.

**Challenges:**
Finds it difficult to interpret web content when images are not described properly.
Encounters limitations in professional tasks that involve interacting with image-based information.
Needs to constantly rely on colleagues for assistance with inaccessible web content.
Technology Usage:
Devices: Windows PC, Android smartphone
Assistive Tools: JAWS (screen reader)
Browsers: Mozilla Firefox, Google Chrome

**Needs:**
An extension that can automatically generate descriptive alternative text for images.
Compatibility with JAWS to ensure seamless usage.
A tool that enhances his independence by providing accurate and contextually relevant image descriptions.

## Laws and regulations

The Web Content Accessibility Guidelines (WCAG) are a set of guidelines that help make the web more accessible to people with disabilities. The guidelines are divided into three levels: A, AA, and AAA. Level A is the minimum level of accessibility, while level AAA is the highest level of accessibility. The guidelines cover a wide range of topics, such as text alternatives for images, keyboard accessibility, and color contrast. By following the guidelines, web developers can make their websites more accessible to people with disabilities.
Moreover in France, the law for the digital republic (2016) requires that all public websites must be accessible to people with disabilities. This includes people with visual impairments. The law also requires that all public websites must be compatible with screen readers.

## Requirements

For this project to be successful, the project requires the following:

- A machine learning model to recognize the content of an image and generate the correct alternative text for the image.
- A server to host the machine learning model. It will be used to send the image to the model and receive the correct alternative text.
- Google Chrome at the beginning the extension will be tested on this browser

## Functionalities

The project is an extension that will have the following functionalities:

- The extension will take an image as input.
- The extension will use a machine learning model to recognize the content of the image.
- The extension will generate the correct alternative text for the image.

## Must have

- A machine learning model to recognize the content of an image
- A way to generate the correct alternative text for the image
- A way to test the extension

## Out of scope

In the future, the extension could be extended to include the following functionalities:

- Detecting the language of the image
- Generating alternative text in multiple languages
- Generating alternative text for videos
- Deploying the extension to the Chrome Web Store

## Compatibility

The extension will be compatible with the following browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Apple Safari

I chose these browsers because they are the most popular browsers in the world. By making the extension compatible with these browsers, we can reach the largest number of users.

The extension will be compatible with the following screen readers:

- JAWS
- NVDA
- VoiceOver

I chose these screen readers because they are the most used screen readers by people with visual impairments. By making the extension compatible with these screen readers, we can reach the largest number of users.

## Privacy

The extension will not collect any personal information from the user. The extension will only use the image that the user provides as input. The image will not be stored on the server. The extension will generate the correct alternative text for the image and display it to the user.

## Risks and assumptions

| Risk | Assumption|
|------|-----------|
|The machine learning model may not be able to recognize the content of an image|Take in the future an other model|
|The server may not be able to handle the number of requests|Use a cloud service to host the server that will be for the next version of the project|
|The extension may not be compatible with all browsers and screen readers|Test the extension with a wide range of browsers and screen readers|
|The extension may not be able to generate the correct alternative text for an image|Test the extension with a wide range of images|

## Security

The security for extension is very important. The extension will not collect any personal information from the user. The extension will only use the image that the user provides as input. The image will not be stored on the server. The extension will generate the correct alternative text for the image and display it to the user.

## Tools and Technologies

### Programming Languages

- Python: For developing and training the machine learning model.
- JavaScript: For developing the browser extension.
- HTML/CSS: For creating the user interface of the extension.

#### Frameworks and Libraries

- PyTorch: For building and training the machine learning model.
- Flask: For setting up the server to host the machine learning model.

#### Development Environment

- IDE/Code Editors: Visual Studio Code, PyCharm, or any preferred IDE.
- Virtual Environment: For managing Python dependencies.

#### Version Control

- Git: For version control.
- GitHub For repository hosting.

#### Setup Development Environment

- Install Python
- Setup a virtual environment for Python dependencies.
- Initialize a Git repository for version control.

#### Develop Machine Learning Model

- Collect and preprocess image datasets.
- Train the machine learning model using PyTorch.
- Save the trained model for deployment.

#### Create Backend Server

- Set up a Flask server.
- Load the trained machine learning model.
- Create API endpoints to handle image uploads and return generated alternative text.

## Testing

- Test the browser extension across different browsers and screen readers for the first version it will be tested on Google Chrome with VoiceOver.
- Test the extension with a wide range of images to ensure that it can generate the correct alternative text for all types of images.

## Success criteria

If the extension can generate the correct alternative text for an image, then the project will be considered a success.

It is important to test the extension with a wide range of images to ensure that it can generate the correct alternative text for all types of images.

## References

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [The law for the digital republic (2016)](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000032034220&categorieLien=id)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/)
- [NVDA](https://www.nvaccess.org/)
- [VoiceOver](https://www.apple.com/accessibility/mac/vision/)
- [Google Chrome](https://www.google.com/chrome/)
- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)

## Glossary

**Alternative Text (Alt Text)**
A short, written description of an image that is read aloud by screen readers to describe the content of the image to users who cannot see it.

**Assistive Technology**
Devices or software that help people with disabilities perform functions that might otherwise be difficult or impossible.

**Cloud Service**
A service that is provided to users over the internet from a cloud computing provider's servers, rather than being hosted on a local server.

**Digital Accessibility**
The practice of making digital content and services accessible to all users, including those with disabilities.

**IDE (Integrated Development Environment)**
A software application that provides comprehensive facilities to computer programmers for software development. Examples include Visual Studio Code and PyCharm.

**Machine Learning Model**
A type of artificial intelligence that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. It uses algorithms to identify patterns in data.

**NVDA (NonVisual Desktop Access)**
A free, open-source screen reader for Microsoft Windows. It allows blind and vision-impaired people to use a computer by reading the text on the screen in a computerized voice.

**PyTorch**
An open-source machine learning library based on the Torch library, used for applications such as computer vision and natural language processing.

**Virtual Environment**
A tool to keep dependencies required by different projects in separate places, by creating isolated environments for each of them. This is helpful in managing project-specific dependencies and avoiding conflicts.

**VoiceOver**
A screen reader built into Apple Inc.'s macOS, iOS, watchOS, and tvOS operating systems. It enables visually impaired users to use a computer or mobile device.

**Dependencies**
Software libraries or packages that a program needs to function correctly. They are usually installed using package managers like pip for Python.

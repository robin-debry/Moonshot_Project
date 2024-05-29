# Functional Specifications

<details>
<summary>Table of contents</summary>

- [Functional Specifications](#functional-specifications)
  - [Context](#context)
  - [Users](#users)
  - [Screen reader](#screen-reader)
    - [What is a screen reader ?](#what-is-a-screen-reader-)
    - [How does screen reader work ?](#how-does-screen-reader-work-)
    - [Why it is useful to improve them ?](#why-it-is-useful-to-improve-them-)
  - [Personas](#personas)
    - [Persona 1](#persona-1)
    - [Persona 2](#persona-2)
  - [Laws and regulations](#laws-and-regulations)
  - [Requirements](#requirements)
  - [Functionalities](#functionalities)
  - [Must have](#must-have)
  - [Out of scope](#out-of-scope)
  - [Compatibility](#compatibility)
  - [Privacy](#privacy)
  - [Risks and assumptions](#risks-and-assumptions)
  - [Security](#security)
  - [Development environment](#development-environment)
  - [Success criteria](#success-criteria)
  - [References](#references)
  - [Glossary](#glossary)

</details>

## Context

Nowadays, the web is a very important part of our lives. It is used for many things, such as shopping, working, learning, and communicating. However, not everyone can use the web easily. People with disabilities, such as visual impairments, may have difficulty using the web. Screen readers are tools that help people with visual impairments use the web. They read the content of web pages out loud, so that people with visual impairments can hear it. However, screen readers are not perfect. They sometimes have trouble reading web pages correctly especially with images. In this project, I will try to improve screen readers by adding the correct alternative text to permit the screen reader to read the image . I will do this by training a machine learning model to recognize the content of an image. The model will then generate the correct alternative text for the image. This will help people with visual impairments.

## Users

In the world, there are between 40 and 45 million people who are blind. There are also between 285 and 300 million people who are visually impaired.
12 million of them use internet everyday.

## Screen reader

### What is a screen reader ?

A screen reader is a software that reads the content of a web page out loud. It does this by converting the text on the web page into speech. The screen reader can also read the content of images on the web page. However, it sometimes has trouble reading images correctly. This is because images do not have text associated with them. The screen reader cannot read the content of an image.

### How does screen reader work ?

The screen reader is a software that reads the content of a web page out loud. It does this by converting the text on the web page into speech. The screen reader can also read the content of images on the web page. However, it sometimes has trouble reading images correctly. This is because images do not have text associated with them. The screen reader cannot read the content of an image.

### Why it is useful to improve them ?

It is important to improve screen readers so that people with visual impairments can use the web more easily. By adding the correct alternative text to images, we can help screen readers read images correctly. This will make it easier for people with visual impairments to access the web.

## Personas

### Persona 1

### Persona 2

## Laws and regulations

The Web Content Accessibility Guidelines (WCAG) are a set of guidelines that help make the web more accessible to people with disabilities. The guidelines are divided into three levels: A, AA, and AAA. Level A is the minimum level of accessibility, while level AAA is the highest level of accessibility. The guidelines cover a wide range of topics, such as text alternatives for images, keyboard accessibility, and color contrast. By following the guidelines, web developers can make their websites more accessible to people with disabilities.
Moreover in France, the law for the digital republic (2016) requires that all public websites must be accessible to people with disabilities. This includes people with visual impairments. The law also requires that all public websites must be compatible with screen readers.

## Requirements

For this project to be successful, the project requires the following:

- A machine learning model to recognize the content of an image and generate the correct alternative text for the image.
- A server to host the machine learning model. It will be used to send the image to the model and receive the correct alternative text.
- Google Chrome at the beginning the extension will be test on this browser

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

I choose these browsers because they are the most popular browsers in the world. By making the extension compatible with these browsers, we can reach the largest number of users.

The extension will be compatible with the following screen readers:

- JAWS
- NVDA
- VoiceOver

I choose these screen readers because they are the most used screen readers by people with visual impairments. By making the extension compatible with these screen readers, we can reach the largest number of users.

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

## Development environment

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



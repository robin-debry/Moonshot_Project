# Functional Specifications

<details>
<summary>Table of contents</summary>

- [Functional Specifications](#functional-specifications)
  - [Overview](#overview)
    - [Context](#context)
    - [Users](#users)
  - [What is a screen reader ?](#what-is-a-screen-reader-)
    - [How does screen reader work ?](#how-does-screen-reader-work-)
    - [Why it is useful to improve them ?](#why-it-is-useful-to-improve-them-)
  - [Personas](#personas)
    - [Persona 1](#persona-1)
    - [Persona 2](#persona-2)
    - [Persona 3](#persona-3)
  - [Laws and regulations](#laws-and-regulations)
  - [Ressources](#ressources)
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
  - [Glossary](#glossary)

## Overview

### Context

Nowadays, the web is a very important part of our lives. It is used for many things, such as shopping, working, learning, and communicating. However, not everyone can use the web easily. People with disabilities, such as visual impairments, may have difficulty using the web. Screen readers are tools that help people with visual impairments use the web. They read the content of web pages out loud, so that people with visual impairments can hear it. However, screen readers are not perfect. They sometimes have trouble reading web pages correctly especially with images. In this project, I will try to improve screen readers by adding the correct alternative text to permit the screen reader to read the image . I will do this by training a machine learning model to recognize the content of an image. The model will then generate the correct alternative text for the image. This will help people with visual impairments.

### Users

The users of this project are people with visual impairments who use screen readers to access the web.

## What is a screen reader ?

### How does screen reader work ?

The screen reader is a software that reads the content of a web page out loud. It does this by converting the text on the web page into speech. The screen reader can also read the content of images on the web page. However, it sometimes has trouble reading images correctly. This is because images do not have text associated with them. The screen reader cannot read the content of an image.

### Why it is useful to improve them ?

It is important to improve screen readers so that people with visual impairments can use the web more easily. By adding the correct alternative text to images, we can help screen readers read images correctly. This will make it easier for people with visual impairments to access the web.

## Personas

### Persona 1

### Persona 2

### Persona 3

## Laws and regulations

The Web Content Accessibility Guidelines (WCAG) are a set of guidelines that help make the web more accessible to people with disabilities. The guidelines are divided into three levels: A, AA, and AAA. Level A is the minimum level of accessibility, while level AAA is the highest level of accessibility. The guidelines cover a wide range of topics, such as text alternatives for images, keyboard accessibility, and color contrast. By following the guidelines, web developers can make their websites more accessible to people with disabilities.
Moreover in France, the law for the digital republic (2016) requires that all public websites must be accessible to people with disabilities. This includes people with visual impairments. The law also requires that all public websites must be compatible with screen readers.

## Ressources

## Requirements

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

## Privacy

The extension will not collect any personal information from the user. The extension will only use the image that the user provides as input. The image will not be stored on the server. The extension will generate the correct alternative text for the image and display it to the user.

## Risks and assumptions

### Security

### Development environment

## Success criteria

If the extension can generate the correct alternative text for an image, then the project will be considered a success.

It is important to test the extension with a wide range of images to ensure that it can generate the correct alternative text for all types of images.

## Glossary

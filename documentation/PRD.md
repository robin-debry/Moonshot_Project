# Product Requirement Document(PRD) Moonshot Project

<details>
<summary>Table of Contents</summary>

- [Product Requirement Document(PRD) Moonshot Project](#product-requirement-documentprd-moonshot-project)
  - [Overview](#overview)
  - [Opportunity statement](#opportunity-statement)
  - [Audience](#audience)
  - [What will happen](#what-will-happen)
  - [Success criteria](#success-criteria)
  - [Sizing](#sizing)
  - [Selected solution](#selected-solution)
  - [Constraint](#constraint)
  - [Milestones](#milestones)

</details>

## Overview

Nowadays, not all images can be accessed optimally by screen readers since they rely on the website's structure. My solution is to enhance their capabilities by creating an extension that modifies the website's structure when screen readers are unable to read images.

## Opportunity statement

The issue lies in the inadequate adaptation of websites for visually impaired or blind individuals, even with the aid of screen readers. The development of these screen readers is crucial for facilitating easy and accessible use by such individuals. Given the vast scope of web accessibility, attention has been narrowed down to improving the reading of text embedded in images.

## Audience

These enhancements will greatly assist individuals with partial sight or blindness as they presently encounter significant difficulties with Internet usage, compared to their sighted counterparts.

## What will happen

Today, screen reading software can convert specific images to audio formats, provided the website has a designated web structure that conforms to the required standards. This includes the use of "alt" tags, which provide written descriptions. This extension is intended to enable screen readers to recognise the existence of "alt" tags, thus making images that are currently inaccessible readable in the future. However, the challenge lies in providing accurate and detailed information within these tags.

## Success criteria

Once the project is operational, it will undergo testing and usage by visually impaired and blind individuals to determine its effectiveness. Additionally, it will be essential to identify any discrepancies the extension may encounter as it is impractical to evaluate all potential scenarios independently. Thus, allowing genuine users to ascertain the extension's capabilities as per their usage would be optimal.

## Sizing

The investment will require more time, as I have not yet identified any potential economic costs associated with this project.
In term of time I believe finish the first version before the end of january to have the time to analyse the possible changes

## Selected solution

For this project, I have opted to develop a Firefox extension, as a significant portion of screen reader users prefer Firefox. The focus of the extension is on adding alt tags to images that are missing because these tags provide the necessary information about the image to screen readers. Without these alt tags, users cannot access the details of the image.

## Constraint

There are three main limitations to this project. Firstly, compatibility between different operating systems must be considered, as some screen readers only function on Windows whilst others only work on MAC. Additionally, compatibility between different screen readers may also be a constraint as each has its own unique method of operation. Moreover, compatibility between different search engine because is not the same to create an extension for Firefox or for Google chrome.

## Milestones

The project began on 1st April 2022 after the acceptance of my chosen subject. The initial test version is expected to be complete by 1st March 2024

- **User research and testing**: This milestone is crucial as it allows us to understand user requirements and how they currently use available solutions. We can then gather their feedback and propose a solution that precisely aligns with their needs.

- **Main feature development**: This milestone would involve developing the main feature of the extension, adding the alt tag and be readable by the screen reader

- **Beta testing** : This milestone entails testing an almost-final iteration of the software with a sizeable user group to pinpoint any residual glitches, user experience problems, or other aspects requiring enhancement. As a result, I shall reach out to relevant associations to enlist a substantial number of test users.

- **Launch**: This milestone entails public release of the extension on Google Chrome.

- **Ongoing maintenance and support**: This milestone entails regular updates for bug fixes, maintaining the extension, and providing support to users who experience issues or require assistance in using the software.

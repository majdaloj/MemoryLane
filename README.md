# What it is 🕵️
MemoryLane is a unique and innovative mobile application designed to help users capture and relive their precious moments. Instead of being the one to curate an image for others, with a nostalgic touch, the app provides a personalized space for friends to document and remember shared memories ~ creating a digital journey through their life experiences.

Whether it's a cherished photo, an audio clip, a video or a special note, MemoryLane allows users to curate their memories in a visually appealing and organized manner. With its user-friendly interface and customizable features, MemoryLane aims to be a go-to platform for individuals seeking to celebrate, reflect upon, and share the meaningful moments that shape their lives.

# Inspiration ✨
The inspiration behind MemoryLane was born from a recognition of the impact that modern social media can have on our lives. While social platforms offer a convenient way to connect with others, they often come with the side effect of overwhelming timelines, constant notifications, and FOMO.

In an age where online interactions can sometimes feel fleeting and disconnected, MemoryLane seeks to offer a refuge—a space where users can curate and cherish their memories without the distractions of mainstream social media. The platform encourages users to engage in a more mindful reflection of their life experiences, fostering a sense of nostalgia and a deeper connection to the moments that matter.

# What it does 💻

## Home:

- The Home section serves as the main dashboard where users can scroll through a personalized feed of their memories.
- This is displayed in chronological order of memories that haven't been viewed yet.
- It fetches and displays user-specific content, including photos, notes, and significant events, organized chronologically.

## Archive:

- The Archive section provides users with a comprehensive repository of all their previously viewed memories.
- It implements data retrieval mechanisms to fetch and display archived content in a structured and easily accessible format.
- [stretch goal] include features such as search functionality and filtering options to enhance the user's ability to navigate through their extensive archive.

## Create Memory:

- The core feature of MemoryLane enables users to add new memories to share with other users.
- Includes multi-media support.

## Friends:

- The Friends section focuses on social interactions, allowing users to connect with friends.
- Unlike other social media, we do not support likes, comments or sharing in hopes of being motivation to reach out to the friend who shared a memory on other platforms.

## Settings:

- Incorporates user preferences, allowing adjustments to account settings including a filter for memories to be shared, incorporating Cohere's LLM to ensure topics marked as sensitive or toxic are not shown on Home feed.

# How we built it 🔨
Frontend: React Native (We learned it during the hackathon!)

Backend: Node.js, AWS, Postgres

In this project, we utilized React Native for the frontend, embracing the opportunity to learn and apply it during the hackathon. On the backend, we employed Node.js, leveraged the power of AWS services (S3, AWS-RDS (postgres), AWS-SNS, EventBridge Scheduler).

Our AWS solution comprised the following key use-cases:

- AWS S3 (Simple Storage Service): Used to store and manage static assets, providing a reliable and scalable solution for handling images, videos, and other media assets in our application.

- AWS-RDS (Relational Database Service): Used to maintain a scalable and highly available postgres database backend.

- AWS-SNS (Amazon Simple Notification Service): Played a crucial role in enabling push notifications, allowing us to keep users informed and engaged with timely updates.

- AWS EventBridge Scheduler: Used to automate scheduled tasks and events within our application. This included managing background processes, triggering notifications, and ensuring seamless execution of time-sensitive operations, such as sending memories.

# Challenges we ran into ⚠️
- Finding and cleaning data set, and using Cohere API.
- AWS connectivity:
  - One significant challenge stemmed from configuring the AWS PostgreSQL database for optimal compatibility with Sequelize. Navigating the AWS environment and configuring the necessary settings, such as security groups, database credentials, and endpoint configurations, required careful attention to detail. Ensuring that the AWS infrastructure was set up to allow secure and efficient communication with our Node.js application became a pivotal aspect of the connectivity puzzle.
  - Furthermore, Sequelize, being a powerful Object-Relational Mapping (ORM) tool, introduced its own set of challenges. Mapping the database schema to Sequelize models, handling associations, and ensuring that Sequelize was configured correctly to interpret PostgreSQL-specific data types were crucial aspects. Dealing with intricacies in Sequelize's configuration, such as connection pooling and dialect-specific settings, added an additional layer of complexity.
- Native React Issues:
  - There were many deprecated and altered libraries, so as a first time learner it was very hard to adjust.
Expo Go's default error is "Keep text between the tags", but this would be non-descriptive and be related to whitespace. VSCode would not notice and extensive debugging.
- Deploying to Google Play (original plan):
  - :( what happened to free deployment to the Google Play store??
  - After prepping our app for deployment we ran into a wall of a registration fee of $25, in the spirit of hackathons we decided this would not be a step we would take.

# Accomplishments that we're proud of 🏆
Our proudest achievement lies in translating a visionary concept into reality. We embarked on a journey that started with a hand-drawn prototype and culminated in the development of a fully functional application ready for deployment on the Play Store. This transformative process showcases our dedication, creativity, and ability to bring ideas to life with precision and excellence.

# What we learned 🏫
- Nostalgia does not have to be sad!
- Brain chemistry is unique! How do we form memories and why we may forget some? :)

# What's next for MemoryLane 💭
What's next for MemoryLane is an exciting journey of refinement and expansion. Discussing with our fellow hackers we already were shown interest in a social media platform that wasn't user-curating centric. As this was the team's first time developing using React Native, we plan to gather user feedback to enhance the user experience and implement additional features that resonate with our users. This includes refining the media scrolling functionality, optimizing performance, and incorporating more interactive and nostalgic elements.

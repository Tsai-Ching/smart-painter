# smart-painter

This is an App build with React.

## Project Overview

This is a hands-on project from the Udemy course - The Complete Web Developer in 2023: Zero to Mastery by Andrei Neagoie. To improve documents reading and API integration, alternatives libraries and 3rd party API are used on this project.

- Use [react-tsparticles](react-tsparticles) and [background generator](https://github.com/Tsai-Ching/background-generator) as background.
- Use Create React App to create an interface.
- Generate Images With [DALL·E 2](https://openai.com/dall-e-2) API from OpenAI.
- Using the PostgreSQL database to store and manage user identities, access permissions, and login status.

## Installation and Execution

Access the project by visiting https://smart-painter.onrender.com in a web browser.

You can find smart-painter-api [here](https://github.com/Tsai-Ching/smart-painter-api).

## Demo

![Demo](https://user-images.githubusercontent.com/108188981/252830114-7230aa41-31b2-44f0-b7ed-c300e37f43c0.png))

## Features

- A PERN (PostgreSQL + Express.js + React.js + Node.js) full stack project.
- RESTful API:
| Method | Route            | Description                            |
| ------ | ---------------- | -------------------------------------- |
| POST   | /api/signin      | Validation                             |
| POST   | /api/register    | Add user info (input) to database      |
| GET    | /api/profile/:id | Present user info after signin         |
| PUT    | /api/image       | Convert cover image URL to image       |
| POST   | /api/imageurl    | Fetch a response from DALL-E           |

## Technologies

### Frontend

- HTML5
- CSS3
- Javascript
- React
  
### Backend

- nodejs
- express
- PostgresSQL
- Knex.js

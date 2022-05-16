# Grow: Work - Backend

This repo is subject to large changes as this project evolves. To learn more about the over all project please visit the repo listed below.

## Related Repos

[Native Mobile App](https://github.com/Grow-Work/frontend-react-native)

[Desktop Web App](https://github.com/Grow-Work/frontend-react-desktop)

## Tech Stack - subject to change

• MongoDB / Mongoose

• Node / Express

• JavaScript

• Json webtokens

## Instalation and Starting

• Npm i - install dependencies

• Npm start - run app with node

• Npm run server - rup app with nodemon

• Npm run test - to be added

• You'll need to create your own .env file with:

MONGODB_URL={your_key_here}
JWT_SECRET={your_secret_here}

## Base url

Base URL: https://grow-work.herokuapp.com/

## Data Structures

### Users

| data         | type   | required |
| ------------ | ------ | -------- |
| id           | number | no       |
| email        | string | yes      |
| password     | string | yes      |

### Profiles

| data          | type   | required |
| ------------- | ------ | -------- |
| user_id       | number | yes      |
| company_name  | string | no       |
| user_name     | string | no       |
| location      | string | no       |
| sector        | string | no       |
| contact_email | string | no       |
| phone         | string | no       |
| blurb         | string | no       |
| roles         | array  | no       |
| jobs          | array  | no       |
| skills        | array  | no       |
| links         | array  | no       |

### Job Object

| data         | type   | required |
| ------------ | ------ | -------- |
| title        | string | no       |
| description  | string | no       |
| starting     | string | no       |
| ending       | string | no       |

## End Points

### Authentication Routes

| Method | Endpoint       | Token Required | Description                                |
| ------ | -------------- | -------------- | ------------------------------------------ |
| POST   | `/auth/signup` | no             | Registers new user and returns token       |
| POST   | `/auth/signin` | no             | Signs in registered user and returns token |

### Profiles Routes

| Method | Endpoint                      | Token Required | Description                               |
| ------ | ------------------------------| -------------- | ----------------------------------------  |
| GET    | `/profiles/companies`         | yes            | Returns all company profiles              |
| GET    | `/profiles/companies/:id`     | yes            | Returns single company profile by id      |
| GET    | `/profiles/professionals`     | yes            | Retruns all "professionals" profiles      |
| GET    | `/profiles/professionals/:id` | yes            | Returns single professional profile by id |
| POST   | `/account/profile`            | yes            | Returns newly added profile               |
| GET    | `/account/profile`            | yes            | Returns the current user's profile        |
| PUT    | `/account/profile`            | yes            | Returns the user's newly updated profile  |
| DELETE | `/account/profile`            | yes            | Deletes the user's profile                |




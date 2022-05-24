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
| id           | number | yes      |
| email        | string | yes      |
| password     | string | yes      |
| account_type | string | yes      |

### Company Profiles

| data                 | type   | required |
| -------------------- | ------ | -------- |
| user_id              | number | yes      |
| company_name         | string | no       |
| company_location     | string | no       |
| company_sector       | string | no       |
| company_email        | string | no       |
| company_phone        | string | no       |
| company_description  | string | no       |
| company_job_listings | array  | no       |
| company_links        | array  | no       |

### Professionals Profiles

| data            | type   | required |
| --------------- | ------ | -------- |
| user_id         | number | yes      |
| person_name     | string | no       |
| person_location | string | no       |
| person_email    | string | no       |
| person_phone    | string | no       |
| person_bio      | string | no       |
| person_skills   | array  | no       |
| person_links    | array  | no       |
| saved_jobs      | array  | no       |

### Job Object

| data             | type   | required |
| ---------------- | ------ | -------- |
| user_id          | number | yes      |
| title            | string | no       |
| company          | string | no       |
| description      | string | no       |
| compensation     | string | no       |
| required_skills  | array  | no       |
| preferred_skills | array  | no       |
| location         | string | no       |
| job_type         | string | no       |
| apply_link       | string | no       |

## End Points

### Authentication Routes

| Method | Endpoint       | Token Required | Description                                |
| ------ | -------------- | -------------- | ------------------------------------------ |
| POST   | `/auth/signup` | no             | Registers new user and returns token       |
| POST   | `/auth/signin` | no             | Signs in registered user and returns token |

### Companies Routes

| Method | Endpoint         | Token Required | Description                          |
| ------ | ---------------- | -------------- | ------------------------------------ |
| GET    | `/companies`     | yes            | Returns all company profiles         |
| GET    | `/companies/:id` | yes            | Returns single company profile by id |

### Job Listing Routes

| Method | Endpoint                | Token Required | Description                          |
| ------ | ----------------------- | -------------- | ------------------------------------ |
| GET    | `/job-listing`          | yes            | Returns all job postings             |
| GET    | `/job-listing/:id`      | yes            | Returns single company profile by id |
| POST   | `/job-listing/:id/save` | yes            | Saves single job listing             |

### Professionals Routes

| Method | Endpoint             | Token Required | Description                                 |
| ------ | -------------------- | -------------- | ------------------------------------------- |
| GET    | `/professionals`     | yes            | Retruns all "professionals" profiles        |
| GET    | `/professionals/:id` | yes            | Returns single "professional" profile by id |

### Account Company Routes

| Method | Endpoint                           | Token Required | Description                                |
| ------ | ---------------------------------- | -------------- | ------------------------------------------ |
| POST   | `/account/company/profile`         | yes            | Returns newly added company profile        |
| GET    | `/account/company/profile`         | yes            | Returns the current user's company profile |
| PUT    | `/account/company/profile`         | yes            | Returns the user's newly updated profile   |
| DELETE | `/account/company/profile`         | yes            | Deletes the user's profile                 |
| POST   | `/account/company/job-listing`     | yes            | Returns newly added job listing            |
| GET    | `/account/company/job-listing`     | yes            | Returns the current user's job listings    |
| GET    | `/account/company/job-listing/:id` | yes            | Returns single job listing by current user |
| PUT    | `/account/company/job-listing/:id` | yes            | Returns user's newly updated job listing   |
| DELETE | `/account/company/job-listing/:id` | yes            | Deletes the user's job listing             |

### Account Professional Routes

| Method | Endpoint                              | Token Required | Description                              |
| ------ | ------------------------------------- | -------------- | ---------------------------------------- |
| POST   | `/account/professional/profile`       | yes            | Returns newly added person profile       |
| GET    | `/account/professional/profile`       | yes            | Returns the current user's profile       |
| PUT    | `/account/professional/profile`       | yes            | Returns the user's newly updated profile |
| DELETE | `/account/professional/profile`       | yes            | Deletes the user's profile               |
| DELETE | `/account/professional/saved-job/:id` | yes            | Deletes the user's job listing           |

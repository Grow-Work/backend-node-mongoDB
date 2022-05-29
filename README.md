# Grow: Work - Backend

This repo is subject to large changes as this project evolves. To learn more about the over all project please visit the repo listed below.

## Related Repos

[Native Mobile App](https://github.com/Grow-Work/frontend-react-native)

[Desktop Web App](https://github.com/Grow-Work/frontend-react-desktop)

## Tech Stack - subject to change

- MongoDB / Mongoose

- Node / Express

- Json webtokens

- Tests with Mocha

## Instalation and Starting

• Npm i - install dependencies

• Npm start - run app with node

• Npm run server - rup app with nodemon

• Npm run test - runs tests with mocha

• You'll need to create your own .env file with:

MONGODB_URL={your_key_here}<br>
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

### Professionals Profiles

| data       | type   | required |
| ---------- | ------ | -------- |
| user_id    | number | yes      |
| first_name | string | no       |
| last_name  | string | no       |
| location   | string | no       |
| email      | string | no       |
| phone      | string | no       |
| bio        | string | no       |
| skills     | string | no       |
| links      | array  | no       |
| saved_jobs | array  | no       |

### Company Profiles

| data        | type   | required |
| ----------- | ------ | -------- |
| user_id     | number | yes      |
| name        | string | no       |
| location    | string | no       |
| sector      | string | no       |
| email       | string | no       |
| phone       | string | no       |
| description | string | no       |
| links       | array  | no       |

### Job Object

| data             | type   | required |
| ---------------- | ------ | -------- |
| user_id          | number | yes      |
| title            | string | no       |
| company          | string | no       |
| description      | string | no       |
| compensation     | string | no       |
| required_skills  | string | no       |
| preferred_skills | string | no       |
| location         | string | no       |
| job_type         | string | no       |
| apply_link       | string | no       |

## End Points

### Authentication Routes

| Method | Endpoint       | Token Required | Description                                |
| ------ | -------------- | -------------- | ------------------------------------------ |
| POST   | `/auth/signup` | no             | Registers new user and returns token       |
| POST   | `/auth/signin` | no             | Signs in registered user and returns token |

### Professionals Routes

| Method | Endpoint             | Token Required | Description                                 |
| ------ | -------------------- | -------------- | ------------------------------------------- |
| GET    | `/professionals`     | yes            | Retruns all "professionals" profiles        |
| GET    | `/professionals/:id` | yes            | Returns single "professional" profile by id |

### Companies Routes

| Method | Endpoint         | Token Required | Description                          |
| ------ | ---------------- | -------------- | ------------------------------------ |
| GET    | `/companies`     | yes            | Returns all company profiles         |
| GET    | `/companies/:id` | yes            | Returns single company profile by id |

### Job Listing Routes

| Method | Endpoint                | Token Required | Description                              |
| ------ | ----------------------- | -------------- | ---------------------------------------- |
| GET    | `/job-listing`          | yes            | Returns all job postings                 |
| GET    | `/job-listing/:id`      | yes            | Returns single job listing by id         |
| POST   | `/job-listing/:id/save` | yes            | Saves single job listing to user profile |

### Account Company Routes

| Method | Endpoint                            | Token Required | Description                                |
| ------ | ----------------------------------- | -------------- | ------------------------------------------ |
| POST   | `/account/company/profile`          | yes            | Returns newly added company profile        |
| GET    | `/account/company/profile`          | yes            | Returns the current user's company profile |
| PUT    | `/account/company/profile`          | yes            | Returns the user's newly updated profile   |
| DELETE | `/account/company/profile`          | yes            | Deletes the user's profile                 |
| POST   | `/account/company/job-listings`     | yes            | Returns newly added job listing            |
| GET    | `/account/company/job-listings`     | yes            | Returns the current user's job listings    |
| GET    | `/account/company/job-listings/:id` | yes            | Returns single job listing by current user |
| PUT    | `/account/company/job-listings/:id` | yes            | Returns user's newly updated job listing   |
| DELETE | `/account/company/job-listings/:id` | yes            | Deletes the user's job listing             |

### Account Professional Routes

| Method | Endpoint                              | Token Required | Description                                |
| ------ | ------------------------------------- | -------------- | ------------------------------------------ |
| POST   | `/account/professional/profile`       | yes            | Returns newly added 'professional' profile |
| GET    | `/account/professional/profile`       | yes            | Returns the current user's profile         |
| PUT    | `/account/professional/profile`       | yes            | Returns the user's newly updated profile   |
| DELETE | `/account/professional/profile`       | yes            | Deletes the user's profile                 |
| DELETE | `/account/professional/saved-job/:id` | yes            | Deletes the user's saved job listing       |



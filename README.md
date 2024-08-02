# Twitter Clone

A full-stack Twitter clone application built with the MERN stack (MongoDB, Express, React, Node.js).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- User authentication (sign up, login, logout)
- User profiles
- Creating and deleting tweets
- Liking on tweets
- Following and unfollowing users
- Responsive design

## Tech Stack

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens), bcrypt

## Usage

- Register a new account or log in with an existing account.
- Create tweets, follow users, like and comment on tweets.
- Explore tweets from users you follow.

## API Endpoints

## Auth

- POST [/api/auth/register](http://localhost:8080/api/v1/user/) - Register a new user
- POST [/api/auth/login](http://localhost:8080/api/v1/user/login) - Login a user

## Users

- GET /api/users/otherUser/:id - Get all users
- PUT /api/users/bookmark/:id - BookMark a user by ID
- POST /api/users/follow/:id - Follow a user
- POST /api/users/unfollow/:id - Unfollow a user

## Tweets

- POST /api/v1/tweet/create - Create a new tweet
- GET api/v1/tweet/getAllTweets - Get all tweets
- GET api/v1/tweet/getAllTweets/:id - Get a tweet by ID
- DELETE /api/v1/tweet/delete/:id - Delete a tweet by ID
- POST /api/v1/tweet/like/:id - Like a tweet
- POST /api/v1/tweet/Unlike/:id - Unlike a tweet

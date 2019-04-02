![CF](http://i.imgur.com/7v5ASc8.png) LAB - Authentication
=================================================

## Lab: Class 11

### Author: Alexander White

### Links and Resources
* [PR](https://github.com/alex-white-401-advanced-javascript/lab-11/pull/1)
* [![Build Status](https://travis-ci.com/alex-white-401-advanced-javascript/lab-11.svg?branch=master)](https://travis-ci.com/alex-white-401-advanced-javascript/lab-11)
* [Heroku](https://lychee-cupcake-28724.herokuapp.com) * This link isn't deployed

#### Documentation
* [jsdoc]()

### Modules
#### `index.js`
##### mongoose.connect

#### `/src/app.js`
##### module.exports = { server: app, start:

#### `.src/auth/middleware.js`
##### function _authBasic(authString)
##### function _authenticate(user)
##### function _authError()

#### `/src/auth/router.js`
##### authRouter.post('/signup', (req, res, next)
##### authRouter.post('/signin', auth, (req, res, next)

#### `/src/routes/book.js.js`
##### function handleGetAll(req, res, next)
##### function handleGetOne(req, res, next)

### Setup

#### Running the app
* Clone Repo down
* Create .env file in root directory with PORT and MONGO_URI
* `npm i` 
* `npm start`
  
#### Tests
* How do you run tests? `npm test`
* What assertions were made? 
* What assertions need to be / should be made? 

#### Collaborators
* Aaron Ferris
* Cory Henderson
* Jon Gentry
* Gregory Dukes
* Vanessa Wei
* Spencer Hirata

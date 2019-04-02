'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../auth/middleware.js');

router.get('/books',auth, handleGetAll);
router.get('/books/:id',auth, handleGetOne);

// Route Handlers
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @param  {} {console.log('loggedin'
 * @param  {3} ;letbooks={count
 * @param  {[{title:'MobyDick'}} results
 * @param  {'LittleWomen'}} {title
 * @param  {'EloquentJavascript'}} {title
 * @param  {} ]
 * @param  {} };res.status(200
 * @param  {} .json(books
 */
function handleGetAll(req, res, next) {
  console.log('logged in');
  let books = {
    count: 3,
    results: [
      { title:'Moby Dick' },
      { title:'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };
  res.status(200).json(books);
}
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @param  {'MobyDick'} {letbook={title
 * @param  {} };res.status(200
 * @param  {} .json(book
 */
function handleGetOne(req, res, next) {
  let book = {
    title:'Moby Dick',
  };
  res.status(200).json(book);
}

module.exports = router;

'use strict';

const User = require('./users-model.js');

module.exports = (req, res, next) => {

  try {

    let [authType, authString] = req.headers.authorization.split(/\s+/); // changed encodedString to authString*

    // BASIC Auth  ... Authorization:Basic ZnJlZDpzYW1wbGU=

    switch(authType.toLowerCase()) {
      case 'basic':
        return _authBasic(authString); // changed encodedString to authString*
      default:
        return _authError();
    }

  } catch(e) {
    return _authError();
  }
  /**
   * @param  {} authString
   * @param  {} {letbase64Buffer=Buffer.from(authString
   * @param  {} 'base64'
   * @param  {} ;letbufferString=base64Buffer.toString(
   * @param  {} ;let[username
   * @param  {'} password]=bufferString.split('
   */
  function _authBasic(authString) { // added authString to function*
    let base64Buffer = Buffer.from(authString,'base64'); // <Buffer 01 02...>
    let bufferString = base64Buffer.toString(); // john:mysecret
    let [username,password] = bufferString.split(':');  // variables username="john" and password="mysecret"
    let auth = {username,password};  // {username:"john", password:"mysecret"} *Chnaged [] to {}*

    return User.authenticateBasic(auth)
      .then( user => _authenticate(user) );
  }
  /**
   * @param  {} user
   * @param  {} {if(user
   * @param  {} {req.user=user;req.token=user.generateToken(
   * @param  {} ;next(
   * @param  {} ;}else{_authError(
   */
  function _authenticate(user) {
    if ( user ) {
      req.user = user; // Added*
      req.token = user.generateToken(); // Added *
      next();
    }
    else {
      _authError();
    }
  }
  /**
   * @param  {401} {next({status
   * @param  {'Unauthorized'} statusMessage
   * @param  {'InvalidUserID/Password'}} message
   */
  function _authError() {
    next({status: 401, statusMessage: 'Unauthorized', message: 'Invalid User ID/Password'});
  }

};


const passport = require('passport');
const express = require('express');
const router = express.Router();

router.route('/signup').post( (req, res, next) => {
  passport.authenticate('local-signup', (err, user, info) => {
    if (err){
      return res.status(500).json({'error': err})
    } else if (!user){
      return res.status(400).json({'Message': 'User already exists'})
    } else {
      return res.status(200).json({'message': 'Success creating user', 'user': user})
    }
  })(req, res, next);
})

router.route('/login').post( (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (err){
      return res.status(500).json({'error': err})
    } else if (!user){
      return res.status(400).json({'Message': 'No user found'})
    } else {
      return res.status(200).json({'message': 'Success logging in', 'user': user})
    }
  })(req, res, next);
})

module.exports = router;

// const passport = require('passport');
const express = require('express');
const User = require('../model/user');
const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    User.find({}, (err, users) => {
      if(err) {
        return console.log(err);
      }
      return res.status(200).json(users);
    });
  })
  .post((req, res, next) => {
    User.create({ name: req.body.name }, (err, user) => {
      if(err) {
        return console.log(err);
      }
      return res.status(200).json(user);
    })
  });
router.route('/:id')
  .get((req, res, next) => {
    User.findById(req.params.id, (err, user) => {
      if(err) {
        return console.log(err);
      }
      return res.status(200).json(user);
    })
  })
  .delete((req, res, next) => {
    return User.findById(req.params.id, (err, entity) => {
      if(err) {
        return console.log(err);
      } else if(!entity) {
        return res.status(404).end();
      }
      return entity.remove((err, entity) => {
        res.status(204).end();
      });
    });
  });

// router.route('/signup').post( (req, res, next) => {
  // passport.authenticate('local-signup', (err, user, info) => {
    // if (err){
      // return res.status(500).json({'error': err})
    // } else if (!user){
      // return res.status(400).json({'Message': 'User already exists'})
    // } else {
      // return res.status(200).json({'message': 'Success creating user', 'user': user})
    // }
  // })(req, res, next);
// })
//
// router.route('/login').post( (req, res, next) => {
  // passport.authenticate('local-login', (err, user, info) => {
    // if (err){
      // return res.status(500).json({'error': err})
    // } else if (!user){
      // return res.status(400).json({'Message': 'No user found'})
    // } else {
      // return res.status(200).json({'message': 'Success logging in', 'user': user})
    // }
  // })(req, res, next);
// })
//
module.exports = router;

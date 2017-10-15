// const passport = require('passport');
const express = require('express');
const Room = require('../model/room');
const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    Room.find({}, (err, rooms) => {
      if(err) {
        return console.log(err);
      }
      return res.status(200).json(rooms);
    });
  })
  .post((req, res, next) => {
    Room.create({ name: req.body.name }, (err, room) => {
      if(err) {
        return console.log(err);
      }
      return res.status(200).json(room);
    })
  });
router.route('/:id')
  .get((req, res, next) => {
    Room.findById(req.params.id, (err, room) => {
      if(err) {
        return console.log(err);
      }
      return res.status(200).json(room);
    })
  })
  .delete((req, res, next) => {
    return Room.findById(req.params.id, (err, entity) => {
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

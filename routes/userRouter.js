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
module.exports = router;

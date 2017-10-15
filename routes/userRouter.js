// const passport = require('passport');
const express = require('express');
const User = require('../model/user');
const router = express.Router();

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      // eslint-disable-next-line prefer-reflect
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

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
  .put((req, res, next) => {
      if(req.body._id) {
        Reflect.deleteProperty(req.body, '_id');
      }
      return User.findById(req.params.id).exec()
      .then(handleEntityNotFound(res))
      .then(patchUpdates(req.body))
      .then(respondWithResult(res))
    }
  )
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

const express = require('express');
const Room = require('../model/room');
const router = express.Router();

router.route('/')
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
module.exports = router;

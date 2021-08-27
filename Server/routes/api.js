const { Router } = require('express');
const express = require('express');
const fileController = require('../controllers/fileController.js');
const router = express.Router();

router.get('/', fileController.getSurfSpots, function (req, res) {
  console.log('test');
  return res.status(200).json([{beaches: res.locals.oahu.beach, surf: res.locals.oahu.surf}]);
  
  // return res.status(200).send("you received data");
})

module.exports = router;
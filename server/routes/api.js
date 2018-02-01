const express = require('express'),
      router = express.Router(),
      dataService = require('../services/dataService'),
      userService = require('../services/userService');

router.get('/data', dataService.getData);
router.post('/data', dataService.saveData);
router.get('/users', userService.getUsers);
router.post('/users', userService.saveUser);

module.exports = router;

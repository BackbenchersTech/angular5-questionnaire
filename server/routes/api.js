const express = require('express'),
      router = express.Router(),
      dataService = require('../services/dataService'),
      userService = require('../services/userService'),
      mailerService = require('../services/mailerService');

router.get('/data', dataService.getData);
router.post('/data', dataService.saveData);
router.get('/users', userService.getUsers);
router.post('/users', userService.saveUser);
router.post('/send', mailerService.sendGridMail);

module.exports = router;
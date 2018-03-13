const express = require('express'),
      router = express.Router(),
      dataService = require('../services/dataService'),
      userService = require('../services/userService'),
      mailerService = require('../services/mailerService'),
      codeService = require('../services/codeService');

router.get('/data', dataService.getData);
router.post('/data', dataService.saveData);
router.get('/users', userService.getUsers);
router.post('/users', userService.saveUser);
router.post('/send', mailerService.sendGridMail);
router.post('/giftcode', codeService.saveCode);

module.exports = router;
const express = require('express'),
      router = express.Router(),
      dataService = require('../services/dataService'),
      userService = require('../services/userService'),
      mailerService = require('../services/mailerService'),
      giftService = require('../services/codeService');

router.get('/data', dataService.getData);
router.post('/data', dataService.saveData);
router.get('/users', userService.getUsers);
router.post('/users', userService.saveUser);
router.post('/send', mailerService.sendGridMail);
router.post('/giftcode', giftService.saveCode);
router.get('/giftcode', giftService.getCodes);
router.post('/gift', giftService.assignGift);
router.get('/gift', giftService.getGifts);

module.exports = router;
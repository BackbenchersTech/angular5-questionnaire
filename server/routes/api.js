const express = require('express'),
      router = express.Router(),
      dataService = require('../services/dataService');

router.get('/data', dataService.getData);
router.post('/data', dataService.saveData);

module.exports = router;
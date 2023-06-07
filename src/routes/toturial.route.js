var express = require('express');
const router = express.Router();

const toturialController = require('../app/controllers/ToturialController');

router.get('/:slug', toturialController.show);

router.get('/', toturialController.index);



module.exports = router;
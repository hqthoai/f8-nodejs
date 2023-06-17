var express = require('express');
const router = express.Router();

const cakeController = require('../app/controllers/CakeController');

router.get('/all-cake', cakeController.showAll);
router.post('/store', cakeController.store);
router.get('/create', cakeController.create);
router.get('/manage-cake', cakeController.manageCake);
router.get('/:slug', cakeController.show);

module.exports = router;
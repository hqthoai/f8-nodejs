var express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.post('/store', userController.store);
router.get('/create', userController.create);
router.get('/manage-user', userController.manageUser);
router.get('/:id/edit', userController.edit);
router.delete('/:id', userController.delete);
router.delete('/:id/force', userController.forceDelete);
router.put('/:id', userController.update);
router.patch('/:id/restore', userController.restore);

router.get('/trash-user',userController.trashUsers);
router.get('/:slug', userController.show);

module.exports = router;
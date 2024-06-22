const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.get('/', userController.getAllUsers);
router.get('/sorted', userController.getUsersSortedByName);
router.get('/:id', userController.getUserById);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/age/:age', userController.getUsersOlderThan);
router.get('/domain/:domain', userController.getUsersByDomain);


module.exports = router;

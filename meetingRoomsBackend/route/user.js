const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.delete('/:phoneNumber', userController.deleteUser);

module.exports = router;
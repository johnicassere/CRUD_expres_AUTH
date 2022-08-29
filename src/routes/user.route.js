const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
//const { validId, validObjectBody } = require('../middlewares/user.middlewares');
const authMiddleware = require("../middlewares/auth.middleware");


router.post('/create',  userController.createUserController);
router.get('/all-users', userController.findUsersController);
router.get('/one-user/:id', authMiddleware, userController.findUserByIdController);
router.put('/update-user/:id', authMiddleware, userController.updateUserController);
router.delete('/delete/:id', authMiddleware, userController.deleteUserController);




module.exports = router;

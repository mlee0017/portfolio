const express = require('express')
const router = express.Router()
// const { authorize } = require('../middleware/authMiddleware')
const userController = require('../controllers/userCtrl')
router.get('/', userController.show)
module.exports = router; 
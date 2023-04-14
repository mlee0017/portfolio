const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userCtrl')
router.get('/', userCtrl.show)
module.exports = router; 
const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentCtrl')
const { authorize, confirmUserAccess } = require('../middleware/authMid')
router.get('/seed', commentController.seed)
router.get('/', commentController.index)
router.delete('/:id', authorize, confirmUserAccess, commentController.delete)
router.put('/:id', authorize, confirmUserAccess, commentController.update)
router.post('/', authorize, commentController.create)
router.get('/:id', commentController.show)
module.exports = router

// authorize index and show 
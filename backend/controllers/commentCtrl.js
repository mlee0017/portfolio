const Comments = require('../models/commentModel')

module.exports.index = async (req, res) => {
    try {
        const comments = await Comments.find().sort({ createdAt: 1 })
        res.status(200).json(comments)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.delete = async (req, res) => {
    try {
        const comment = await Comments.findByIdAndDelete(req.params.id)
        await Comments.deleteMany({ _id: { 
            $in: comment.comments 
        }})
        res.status(200).json({ message: 'deleted successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.update = async (req, res) => {
    try {
        const updatedComment = await Comments.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedComment)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.create = async (req, res) => {
    try {
        const comment = await Comments.create(req.body)
        res.status(200).json(comment)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.show = async (req, res) => {
    try {
        const comment = await Comments.findById(req.params.id).populate('comments')
        res.status(200).json(comment)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}
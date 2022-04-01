const express = require('express')

const Task = require('../models/task')
const router = new express.Router()
router.post('/tasks', async(req, res) => {

    const tasks = new Task(req.body)
    try {
        await tasks.save()
        res.status(201).send(tasks)
    } catch (e) {
        res.status(400).send(e)
    }

})

router.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).send(tasks)

    } catch (e) {
        res.status(500).send(e)
    }

})
router.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const tasks = await Task.findById(_id)
        if (!tasks) {
            return res.status(500).send()
        }
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})
router.patch('/tasks/:id', async(req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(500).send({ error: "Invalid Updates" })
    }
    try {
        const tasks = await Task.findById(req.params.id)
        updates.forEach((update) => {
            tasks[update] = req.body[update]

        })
        await tasks.save()
            // const tasks = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })
        if (!tasks) {
            return res.status(500).send()
        }
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send(e)

    }
})

router.delete('/tasks/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const tasks = await Task.findByIdAndDelete(_id)
        if (!tasks) {
            return res.status(500).send()
        }
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})
module.exports = router
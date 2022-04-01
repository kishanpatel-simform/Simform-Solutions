const express = require('express')

const User = require('../models/user')
const router = new express.Router()

router.post('/users', async(req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users', async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send(e)
    }

})

router.get('/users/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const users = await User.findById(_id)
        if (!users) {
            return res.status(500).send()
        }
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send(e)

    }
})
router.patch('/users/:id', async(req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(500).send({ error: "Invalid Updates" })
    }
    try {
        const users = await User.findById(req.params.id)
        updates.forEach((update) => {
            users[update] = req.body[update]

        })
        await users.save()
            //const users = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })
        if (!users) {
            return res.status(500).send()
        }
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})
router.delete('/users/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const users = await User.findByIdAndDelete(_id)
        if (!users) {
            return res.status(400).send()
        }
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})



module.exports = router
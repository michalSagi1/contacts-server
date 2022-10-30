const express = require("express");
const router = express.Router();

const userLogic = require('../userLogic')

router.post('/createuser', async (req, res) => {
    try {
        res.send(await userLogic.createUser(req.body))
    } catch (error) {
        res.send({ message: error.message || "something wrong :(" })
    }

})
router.get('/users', async (req, res) => {
    try {
        res.send(await userLogic.getUsers())
    } catch (error) {
        res.send({ message: error.message || "something wrong :(" })
    }

})
router.put('/users/:id', async (req, res) => {
    try {
        await userLogic.updateUser({ id: req.params.id, name: req.body.name, phone: req.body.phone })
        res.send('updated')
    } catch (error) {
        res.send({ message: error.message || "something wrong :(" })
    }

})
router.delete('/users/:id', async (req, res) => {
    try {
        await userLogic.deleteUser({ id: req.params.id })
        res.send('removed')
    } catch (error) {
        res.send({ message: error.message || "something wrong :(" })
    }

})
module.exports = router;
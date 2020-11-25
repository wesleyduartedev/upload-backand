const { Router } = require('express');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')
const router = express.Router();

const User = require('../models/User');
const { json } = require('body-parser');


function gereateToken(params = {}) {

    return jwt.sign(params, authConfig.secret, {

        expiresIn: 86400,


    });

}

router.post('/', async (req, res) => {
    let name = req.body.name;
    let password = req.body.password;
    let email = req.body.email;
    let isoperator = req.body.isoperator;
    let user = new User({
        name,
        password,
        email,
        isoperator



    })
    try {
        if (await User.findOne({ email }))

            return res.status(400).send({ error: 'User already exists' });

        const user = await User.create(req.body);
        user.password = undefined;

        return res.send({
            user,
            token: gereateToken({ id: user.id }),
        });

    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });

        res.json(await user.save())
    }




});

router.post('/authenticate', async (req, res) => {


    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)

        return res.status(400).send({ error: 'User not found' });

    if (!await bcrypt.compare(password, user.password))

        return res.status(400).send({ error: 'Invalid password' });

    user.password = undefined;



    res.send({
        user,
        token: gereateToken({ id: user.id }),

    });
});


router.get('/', (req, res) => {
    User.find().then(users => res.json(users));
});




router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.updateOne({ _id: id }, {
        name,
        email,
        password,


    })
    res.json(user);
})

//delete

router.delete('/:id', async (req, res) => {

    let id = req.params.id;
    let user = await User.deleteOne({ _id: id });

    res.json(user);
});










module.exports = router;



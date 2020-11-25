const { Router } = require('express');
const express = require('express');
const router = express.Router();

const Ticket = require('../models/Ticket');


router.post('/', async (req, res) => {
    let field = req.body.field;
    let title = req.body.title;
    let environment = req.body.environment;
    let bug= req.body.bug;
    let file = req.body.file
    let priority = req.body.priority
    let ticket = new Ticket({
        field,
        title,
        environment,
        bug,
        file,
        priority
        
    })

    res.json(await ticket.save())
});


router.get('/', (req, res) => {
    Ticket.find().then(ticket => res.json(ticket));
});

router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let field = req.params.field;
    let title = req.body.title;
    let environment = req.body.environment;
    let bug = req.body.bug;
    let file = req.body.file;
    let priority = req.body.priority;
    let ticket = await Ticket.updateOne({ _id: id }, {
        field,
        title,
        environment,
        bug,
        file,
        priority

    })
    res.json(ticket);
})

//delete

router.delete('/:id', async (req, res) => {

    let id = req.params.id;
    let ticket = await Ticket.deleteOne({ _id: id });

    res.json(ticket);
});





module.exports = router;


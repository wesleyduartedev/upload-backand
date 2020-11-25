const express = require ('express');
const Ticket = require('../models/Ticket');
const router = express.Router();
const TicketCrontoller = require('../models/Ticket');
const UserController = require('../models/User');

router.get('/', async (req,res)=>{
     let tickets = await TicketCrontoller.find();
     let users = await UserController.find();
     res.send({
      tickets,
      users
     })
     
  });

 

module.exports = router;



const mongoose = require ('mongoose');
const TicketSchema = new mongoose.Schema({
   
    field: {type: String,required: true },
    title: {type: String ,required: true },  
    environment : {type: String ,required: true  },  
    bug: {type: String, required: true },  
    file: {type: String,required: true,  default:false }, 
    priority: {type: String, required: true,  default:false },
     
    createdAt: {type: Date, default: Date.now}
});
const Ticket= mongoose.model('Ticket', TicketSchema);
module.exports= Ticket;
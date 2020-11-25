
const express = require("express");
const bodyParser = require('body-parser');
const allowCors = require('./middlewares/cors');
const morgan = require('morgan');
const db = require('./db/database');
const app = express();
const port = 4000;


const UserController = require('./controllers/UserController');
const TicketController = require('./controllers/TicketController');
const DashboardController = require('./controllers/DashboardController');
const ProkjectController = require('./controllers/ProjectController');
const UploadimageController = require('./controllers/UploadimageController');
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(allowCors);
app.use('/users',UserController);
app.use('/ticket',TicketController);
app.use('/dashboard',DashboardController);
app.use('/projects', ProkjectController);
app.use('/image',UploadimageController);
db.on('error',()=>{
    console.log('Erro na conexão')
})
db.once('open', () =>{
    console.log('Conexão estabelecida')
})
app.get('/',(req,res)=>{
    res.send("Deu bom");
})
app.listen(port,function(){
    console.log(`O servidor está rodando na porta ${port}`);
});


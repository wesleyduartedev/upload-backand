const mongoose = require('mongoose');


const db = mongoose.connect('mongodb+srv://wesleyduartedev:191095veralucia@cluster0.kapsf.mongodb.net/snitchtracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
});

module.exports = mongoose.connection ;
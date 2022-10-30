const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Ahmad:Clapingo@cluster0.0trssbf.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./student.model');
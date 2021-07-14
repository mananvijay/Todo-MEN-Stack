const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list');

const db = mongoose.connection;

db.on('err', console.error.bind("Database is not connected"));

db.once('open', function(){
    console.log("Database Connected");
});

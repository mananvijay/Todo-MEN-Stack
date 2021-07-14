const express = require('express');
const port = 8000;
const db = require('./config/mongoose');
const List = require('./models/list');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/', function(req, res){
    List.find({}, function(err, toList){
        if(err){
            console.log("No List Found");
        }
        return res.render('todo', {
            tasks: toList 
        });
    });
});

app.post('/addtodo', function(req, res){
    List.create({
        des: req.body.des,
        category: req.body.category,
        date: req.body.date
    }, function(err, added){
        if(err){
            console.log("Task not added");
        }
        console.log("yay", added);
        return res.redirect('back');
    });
    // console.log(req.body);
    // return res.render('todo');
});

app.get('/delete', function(req, res){
    let obj = req.query.obj;
    List.findByIdAndDelete(obj, function(err){
        if(err){
            console.log("Cannot delete task");
            return;
        }
        return res.redirect('back');
    });
});

app.listen(port, function(err){
    if(err){
        console.log(`Error ${err}`);
    }
    console.log(`successfully express is running on port ${port}`);
});
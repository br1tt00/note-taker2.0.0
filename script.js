//Declare the install frameworks

const express = required('express');
const bodyparser = require('body-parser');

let note =[{ id: 1, body: 'we have a text'}, {id: 2, body: 'this is a second text'}];

//call the express and body-parser
let app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

//we installed the ejs and create a file inside of views

app.set('view engine', 'ejs');

app.listen(5000, function()
    {console.log("notetaker server is running at port 5000...")}
);

//set up the route for the app.

app.get('/', function (req, res){
    res.render('notes', {

    });
});

//then app.post opt.
app.post("/addNotes", function (req, res) {
    //assigning Note id to the notes using math.random
    const userNote = {};
    userNote.id = Math.random() * 100;
    userNote.body = req.body.newNote
    note.push(userNote);
    //then we redirect it to the root route
    res.redirect('/');
  });

  //delete request
  app.post('/deleteNote/:id', function (req, res) {
    console.log(req.params.id);
    const deleteNotes = note.filter(item => item.id != req.params.id);
    note = deleteNotes;
    return res.redirect('/');
  });
  
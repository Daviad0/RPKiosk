const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require("express-session");
const mongo = require('mongoose');

//var passwordHashStuff = passwordHandler.getHashOfPW("ElfOnTheShelf");
//console.log(passwordHashStuff);
//const user = new User({ name: 'David Reeves', username: 'Daviado', joined: new Date(), isSuperuser: true, isRestricted: false, hash: {salt:passwordHashStuff.salt, hashedPW: passwordHashStuff.hashedpassword} });

//mongoHandler.addItem(user);

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];



// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.set('views', 'views');
app.use(expressLayouts)
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('THIS IS MY FIGHT SONG, TAKE BACK MY LIFE SONG'));
app.use(express.static('public'));

app.use(function (req, res, next) {
  
  next()
})
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.render('index');
});

// listen for requests :)
const listener = app.listen(8000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

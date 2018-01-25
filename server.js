const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
let app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});


app.use((req, res, next) => {
    console.log(`${new Date().toString()} : ${req.method} ${req.path}`);
    fs.appendFile('server-log.txt', `${new Date().toString()} : ${req.method} ${req.path}` + '\n', (err) => {
        if(err){
            consle.log(err);
        }
    });
    next();
});

app.use((req, res, next) => {
    res.render('maintenance.hbs');
});

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle : 'this is a home page',
        user : 'Radhika',
        welcomeMessage : 'Welcome to our home page!',
        currentYear:new Date().getFullYear()
    })

});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'injected title of about page',
        currentYear: new Date().getFullYear()
    });

});

app.get('/bad', (req, res) => {
    res.send("<h1>bad request</h1>");

});




app.listen(3000);
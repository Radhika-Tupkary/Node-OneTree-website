const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
let app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
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

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle : 'This is a home page',
        user : 'Radhika',
        welcomeMessage : 'Welcome to our home page!',
    })

});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'Title of about page',
    });

});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Title of projects page',
    });

});

app.get('/bad', (req, res) => {
    res.send("<h1>bad request</h1>");

});




app.listen(port, () => {
    console.log(`Server is up and running on port ${port}!`);
});
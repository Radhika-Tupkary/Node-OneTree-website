const express = require('express');
const exphbs  = require('express-handlebars');
const hbs = require('hbs');
let app = express();
const port = process.env.PORT || 8081;

hbs.registerPartials(__dirname + '/views/partials');

//Declaring Express to use Handlerbars template engine with main.handlebars as
//the default layout

app.engine('hbs', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'hbs');

//Defining middleware to serve static files
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('home.hbs')
});

app.get('/features', (req, res) => {
    res.render('features.hbs')
});

app.get('/numbers', (req, res) => {
    res.render('numbers.hbs')
});

app.get('/products', (req, res) => {
    res.render('products.hbs')
});

app.get('/timeline', (req, res) => {
    res.render('timeline.hbs')
});

app.get('/contact', (req, res) => {
    res.render('contact.hbs');

});

app.get('/testimonials', (req, res) => {
    res.render('testimonials.hbs');
});

app.get('/bad', (req, res) => {
    res.send("<h1>bad request</h1>");
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}!`);
});

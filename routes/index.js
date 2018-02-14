const app = require('express').Router();

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/features', (req, res) => {
    res.render('features')
});

app.get('/numbers', (req, res) => {
    res.render('numbers')
});

app.get('/products', (req, res) => {
    res.render('products')
});

app.get('/timeline', (req, res) => {
    res.render('timeline')
});

app.get('/contact', (req, res) => {
    res.render('contact');

});

app.get('/testimonials', (req, res) => {
    res.render('testimonials');
});

app.get('/bad', (req, res) => {
    res.send("<h1>bad request</h1>");
});

module.exports = app;

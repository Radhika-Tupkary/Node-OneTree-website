const express = require('express');
const exphbs  = require('express-handlebars');
let routes = require('./routes/index');
let app = express();
const port = process.env.PORT || 8081;

//Declaring Express to use Handlerbars template engine with main.handlebars as
//the default layout

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Defining middleware to serve static files
app.use('/static', express.static('public'));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}!`);
});

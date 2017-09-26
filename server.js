var express = require('express'),
    path = require('path'),
    app = express(),
    defaultPort = 4444,
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    nunjucks = require('nunjucks'),
    isProduction = process.env.NODE_ENV == 'production';

// Set up middleware parsers
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'static')));

// set up nunjucks for templating. You can use whatever
app.set('templates', path.join(__dirname, '/static/templates'));
var env = nunjucks.configure(app.get('templates'), {
    autoescape: false,
    express:    app
});
app.set('view engine', 'nunjucks');

// Set up Routes for the application
require('./routes/core-routes.js')(app);

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        "route": "Doop doop nothing here"
    });
});

var port = process.env.PORT || 4444;
app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

// SETTINGS

app.set('views', path.join(__dirname ,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// MIDDELWARE

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// GLOBAL VARIABLES

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    next();
})

// ROUTES

app.use(require('./routes/index.router'));
app.use(require('./routes/notes.router'));


// STATIC FILE

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
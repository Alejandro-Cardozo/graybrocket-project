const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');


// Start
const app = express();

// Settings
app.set('port', process.env.PORT || 5500);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //it is not necessary to require ejs bc is integrated with node.

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(multer({dest: path.join(__dirname, 'public/img/uploads')}).single('image'));

// Global vars

// Routes

// Static files

// Launch server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
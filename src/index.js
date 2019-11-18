const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const uuid = require('uuid/v4'); // v4 is the version that allows to create random IDs


// Start
const app = express();

// Settings
app.set('port', process.env.PORT || 5500);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //it is not necessary to require ejs bc is integrated with node.

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, '/public/img/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});
app.use(multer({storage: storage}).single('image'));

// Global vars

// Routes
app.use(require('./routes/index'));

// Static files

// Launch server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
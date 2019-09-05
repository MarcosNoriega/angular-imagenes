const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/upload/temp'),
    filename: (res, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

//databasse
require('../db');

// setting
app.set('port', process.env.PORT | 3000);
app.use(multer({storage}).single('image'));

// middleware
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/imagenes', require('../routes'));



module.exports = app;
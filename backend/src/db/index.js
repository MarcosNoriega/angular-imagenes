const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/galeria', (err, ok) => {
    if (err) {
        console.log(err)
    }

    if (ok) {
        console.log('db connected')
    }
});


const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-tasks';
mongoose.connect(URI || process.env.URI)
    .then(db => console.log('Database is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
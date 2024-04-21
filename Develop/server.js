// Import required libraries
const path = require('path');
const express = require('express');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Set all the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET route for notes.html
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET wildcard (if no match found) then should return the index.html file.
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Server listening for request
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
const express = require('express');
const app = express();
const stripe = require('stripe');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
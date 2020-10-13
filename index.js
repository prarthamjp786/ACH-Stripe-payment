const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51Hb90tLQHcwjWBjSeIFLML1YbQcJbT7rPyzwmwuZyDYnN6S1K31jGVeW9T2b8DeBrmGRlsHVuSRsSSdR2revTXyX00G98x1gL8');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
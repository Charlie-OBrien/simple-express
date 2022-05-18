const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send("Hello World, again!")
});

app.listen(port, () => {
    console.log(`This is an example app using port ${port}`);
});
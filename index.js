const bodyParser = require('body-parser');
const express = require('express');

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 3000

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
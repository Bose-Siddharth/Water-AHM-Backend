const express = require('express')
const app = express();
const country = require('./Device-Data.json');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

app.get('/', (req, res) => {
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(country.sort(() => Math.random() - Math.random()).slice(0, 10)));
});

app.listen(8080, console.log("Server up at 8080"));
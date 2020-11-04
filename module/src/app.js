const path = require('path');
const express = require('express')
const app = express();

const publicdirectorypath = path.join(__dirname, '../public');

app.use(express.static(publicdirectorypath));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index', {
        title: "Home",
        name: "THERESA"
    });
}) 

app.listen(3000, () =>  {
    console.log("The server is running on port 3000");
})
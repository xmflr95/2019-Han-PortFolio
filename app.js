const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 3000
};

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// public path
app.use(express.static('public'));

app.get('/', (req, res) => {
  
});

app.post('/', (req, res) => {

});

app.post('/cKo', (req, res) => {
  res.redirect('/index_kr.html');
});

app.post('/cEn', (req, res) => {
  res.redirect('/index.html');
})

app.listen(PORT, () => console.log(`Sever Started on port ${PORT}!`));
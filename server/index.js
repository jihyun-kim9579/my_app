const express = require('express');
var cors = require('cors');
const app = express();
app.use(express.static('public'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', function (req, res) {
  res.sendFile (__dirname + "/public/home.html");
});
app.get('/main', function (req, res) {
  res.sendFile (__dirname + "/public/main.html");
});
 // req: request[요청]
 // res: response[응답]
app.post('/contact', function (req, res) {
      console.log(req.body);
    res.sendFile (__dirname + "/public/contact.html");
});

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
});
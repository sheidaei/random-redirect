var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

/*--------------------Routing Over----------------------------*/

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});

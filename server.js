var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', function(req, res) {
  if((Math.floor(Math.random() * 2) + 1)>1)
  {
    res.sendFile(__dirname + "/public/index1.html");
  }

    res.sendFile(__dirname + "/public/index2.html");
});

/*--------------------Routing Over----------------------------*/

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});

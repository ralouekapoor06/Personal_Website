var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static("public")); 
app.get('/', function (req, res) {
  res.render('index');
});
app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`)
});
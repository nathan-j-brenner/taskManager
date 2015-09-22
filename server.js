'use strict';

var express = require('express');
var app = express();

// app.get('/', function(req, res){
// 	res.write('people.html');
// });
app.use(express.static('public'));

app.listen(3000, function(){
	console.log("The express server is running on port 3000");
});
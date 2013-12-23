/**
 * New node file
 */
var express = require('express');
var catalog = require('./routes/catalog');

var app = express();

app.configure(function() {
	app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
	app.use(express.bodyParser());
});

app.get('/catalog', catalog.findAll);
app.get('/catalog/:id', catalog.findById);

app.listen(3000);
console.log('Listening on port 3000...');
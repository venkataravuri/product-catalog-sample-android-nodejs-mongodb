/**
 * New node file
 */
var mongo = require('mongodb');

var BSON = mongo.BSONPure;

var server = new mongo.Server('localhost', 27017, {
	auto_reconnect : true
});

db = new mongo.Db('catalog', server);

db.open(function(err, db) {
	if (!err) {
		console.log("Connected to 'catalog' database");
		db.collection('products', {
			strict : true
		}, function(err, collection) {
			if (err) {
				console.log("The 'catalog' collection doesn't exist.");
			}
		});
	}
});

exports.findById = function(req, res) {
	var id = req.params.id;
	console.log('Retrieving catalog: ' + id);
	db.collection('products', function(err, collection) {
		collection.findOne({
			'_id' : new BSON.ObjectID(id)
		}, function(err, item) {
			res.send(item);
		});
	});
};

exports.findAll = function(req, res) {
	db.collection('products', function(err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items);
		});
	});
};

exports.findByCategory = function(req, res) {
	var category = req.params.category;
	console.log("Search for products of category:" + category);
	db.collection('products', function(err, collection) {
		collection.find({ 'category': category }).toArray(function(err, items) {
			res.send(items);
		});
	});
};
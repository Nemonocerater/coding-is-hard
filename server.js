var express = require ('express');
var browserify = require ('browserify-middleware');
var jade = require ('jade');
var lessMiddleware = require ('less-middleware');
var logger = require ('express-logger');



// Process Command Line Arguments
var port = 80;
if (process.argv.length > 2) {
	port = parseInt (process.argv[2]);
}


// Set up the Server
var app = express ();

app.set ('views', __dirname + '/views');
app.set ('view engine', 'jade');


// Logging each request
app.use (logger ({
	path: './log'
}));


// Handle scripts and css
app.use ('/scripts', browserify ('./scripts/'));
app.use (lessMiddleware (__dirname + '/public'));
app.use (express.static (__dirname + '/public'));


// Render pages and api calls
app.get ('/', function (req, res) {
	res.render ('home', {
		title: "Brainsplosion Games"
	});
});

app.get ('/games', function (req, res) {
	res.render ('games', {
		title: 'Recommended Games',
		games: games
	});
});

app.get ('/contact', function (req, res) {
	res.render ('contact', {
		title: 'Contact Us'
	});
});

app.get ('/image-display/:image', function (req, res) {
	var image = req.params.image;
	res.render ('image-display', {
		title: image
	});
});


// Run the Server
app.listen (port);
console.log ("Server is now listening on port " + port);

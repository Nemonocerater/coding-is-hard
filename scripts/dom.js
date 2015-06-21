var js_lib = require ('./js_lib.js');

function addClass (element, className) {
	var classes = element.getAttribute ('class');
	classes += " " + className;
	element.setAttribute ("class", classes);
}

function removeClass (element, className) {
	var classes = element.getAttribute ('class').split (' ');
	js_lib.removeElementFromArray (classes, className);
	element.setAttribute ("class", classes);
}

module.exports = exports = {
	addClass: addClass,
	removeClass: removeClass
}

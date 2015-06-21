var jQuery = require ('jquery');
var $ = jQuery;

var animation_duration = 1000;
var image_height_ratio_assumption = 0.57;

module.exports = exports = function ImageFader (id) {
	var image_fader = $('#' + id);
	var images = image_fader.find('img');
	var index = 0;

	resize.call (image_fader, image_fader.width() * image_height_ratio_assumption);

	setInterval (function ImageFader_timeout () {
		$(images[index]).fadeOut(animation_duration);
		index = (index + 1) % images.length;
		var newImage = $(images[index]).fadeIn(0.9 * animation_duration);
		resize.call (image_fader, newImage.height());
	}, animation_duration * 6);
};

function resize (height) {
	this.animate ({
		height: height
	}, animation_duration);
}

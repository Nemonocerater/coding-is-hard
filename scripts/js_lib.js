
function removeElementFromArray (array, element) {
	var index = array.indexOf (element);
	if (index > -1) {
		array.splice(index, 1);
	}
	return array;
}

module.exports = exports = {
	removeElementFromArray: removeElementFromArray
}

module.exports = {
	"None": 0,
	"Slow": 1,
	"Fast": 2
};

module.exports.getName = function(result) {
	for (var i in module.exports) {
		if (module.exports.hasOwnProperty(i) && module.exports[i] == result) {
			return i;
		}
	}

	return false;
};

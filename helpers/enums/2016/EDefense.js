module.exports = {
	"Portcullis": 0,
	"Cheval_de_Frise": 1,
	"Ramparts": 2,
	"Moat": 3,
	"Drawbridge": 4,
	"Sally Port": 5.
	"Rock Wall": 6,
	"Rough Terrain": 7,
	"Low Bar": 8
};

module.exports.getName = function(result) {
	for (var i in module.exports) {
		if (module.exports.hasOwnProperty(i) && module.exports[i] == result) {
			return i;
		}
	}

	return false;
};

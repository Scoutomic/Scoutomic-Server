module.exports = {
	"Qualification": 0,
	"Quarterfinal": 1,
	"QF_Tiebreaker": 2,
	"Semifinal": 3,
	"SF_Tiebreaker": 4,
	"Final": 5
};

module.exports.getName = function(result) {
	for (var i in module.exports) {
		if (module.exports.hasOwnProperty(i) && module.exports[i] == result) {
			return i;
		}
	}

	return false;
};

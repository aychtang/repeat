
module.exports = function(n, element) {
	if (n === 0)
		return [];

	var result = [];
	for (var i = 0; i < n; i++)
		result.push(element);
	return result;
};

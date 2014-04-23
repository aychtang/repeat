
var isFunction = function(e) {
	return Object.prototype.toString.call(e) === '[object Function]';
};

module.exports = function(n, element) {
	if (n === 0) return [];
	var result = [];
	for (var i = 0; i < n; i++) {
		result.push(isFunction(element) ? element(i) : element);
	}
	return result;
};

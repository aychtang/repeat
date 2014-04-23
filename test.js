var test = require('tape');
var repeat = require('./repeat');

test('returned array length should match passed n parameter', function(t) {
	t.equal(repeat(10, 0).length, 10);
	t.end();
});

test('returned array elements, should match passed element parameter', function(t) {
	t.equal(repeat(1, -10)[0], -10);
	t.end();
});

test('returned array elements should match result of passed function, when passed i', function(t) {
	t.equal(repeat(10, function(i) {return i;})[9], 9);
	t.end();
});

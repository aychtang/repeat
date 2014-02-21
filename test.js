var test = require('tape');
var repeat = require('./repeat');

test('returned array length should match passed n parameter', function(t) {
	t.plan(1);
	t.equal(repeat(10, 0).length, 10);
});

test('returned array elements, should match passed element parameter', function(t) {
	t.plan(1);
	t.equal(repeat(1, -10)[0], -10);
});

'<srv'
var a = require('assert')
'srv>'
/*<cli
var a = require('clientassert')
a.onError(function (e) {

	document.getElementById('error').innerHTML = JSON.stringify(e) + JSON.stringify(e.stack);
})
cli>*/




var hash = require('./index')




// escapeKey

a.strictEqual(
	hash.escapeKey('abc'),
	'abc'
)

a.strictEqual(
	hash.escapeKey('__proto__'),
	'__proto__%'
)

a.strictEqual(
	hash.escapeKey('__proto__abc'),
	'__proto__abc%'
)


// unescapeKey

a.strictEqual(
	hash.unescapeKey('abc'),
	'abc'
)

a.strictEqual(
	hash.unescapeKey('__proto__%'),
	'__proto__'
)

a.strictEqual(
	hash.unescapeKey('__proto__abcc'),
	'__proto__abc'
)


// has

var o = { a: 1 }

a.strictEqual(
	hash.has(o, 'abc'),
	false
)

a.strictEqual(
	hash.has(o, 'hasOwnProperty'),
	false
)

a.strictEqual(
	hash.has(o, 'a'),
	true
)


// set

hash.set(o, 'abc', true),

a.strictEqual(
	'abc' in o,
	true
)

hash.set(o, '__proto___', true),

a.strictEqual(
	hash.has(o, '__proto___'),
	true
)


// get

a.strictEqual(
	hash.get(o, '__proto___'),
	true
)

a.strictEqual(
	hash.get(o, '__proto___%'),
	undefined
)


// del

hash.del(o, '__proto___%'),

a.strictEqual(
	hash.has(o, '__proto___'),
	true
)

hash.del(o, '__proto___'),

a.strictEqual(
	hash.has(o, '__proto___'),
	false
)




'<srv'
console.log('Passed')
'srv>'
/*<cli
document.body.style.backgroundColor = 'green'
document.body.innerHTML = 'Passed'
cli>*/

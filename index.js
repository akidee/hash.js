var hasOwnProperty = Object.prototype.hasOwnProperty




var escapeKey = exports.escapeKey = function (key) {

	if (key.indexOf('__') !== 0)
		return key


	return key + '%'
}

var unescapeKey = exports.unescapeKey = function (key) {

	if (key.indexOf('__') !== 0)
		return key
	

	return key.substr(0, key.length - 1)
}

exports.has = function (object, key) {

	return hasOwnProperty.call(object, escapeKey(key))
}

exports.set = function (object, key, value) {

	object[escapeKey(key)] = value
}

exports.get = function (object, key) {

	key = escapeKey(key)
	return hasOwnProperty.call(object, key)
		? object[key]
		: undefined
}

exports.del = function (object, key) {

	delete object[escapeKey(key)]
}

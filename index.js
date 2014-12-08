#!/usr/bin/env node

var util = require('util')
var argv = require('minimist')(process.argv.slice(2))

var input = ''

process.stdin.on('readable', read)
process.stdin.on('end', function () {	
	generateClass(JSON.parse(input))
})

function read() {
	var line

	while(line = process.stdin.read()) {
		input += line
	}

	process.stdin.on('readable', read)
}

function generateClass(data) {
	
	if (!util.isArray(data)) {
		throw new Error('invalid data type: ' + typeof(data))
	}

	var className = argv.class || 'Foo'
	var result = 'function ' + className + '() {\n}\n'	
	
	for (var i = data.length - 1; i >= 0; i--) {
		result += '\n' + className + '.prototype.' + data[i] + ' = function () {\n}\n'
	}
	
	console.log(result)
}

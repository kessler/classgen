var child = require('child_process')
var path = require('path')
var assert = require('assert')

describe('classgen', function () {
	it('turns an array into a prototype class', function (done) {
		this.timeout(6000)
		var p = child.exec('node ' + path.resolve(__dirname, 'index.js'), function(err, stdout, stderr) {
			if (err) return done(err) 			
 			assert.strictEqual(expected, stdout)
 			done()
		})

		p.stdin.write('[ "foo", "bar" ]')
		p.stdin.end()
	})
})

var expected = 'function Foo() {\n}\n\nFoo.prototype.bar = function () {\n}\n\nFoo.prototype.foo = function () {\n}\n\n'
# classgen
generate prototype classes from objects or arrays

## install
```
$ npm install -g classgen
```

## usage
```
$ echo '[ "bar" ]' | classgen
```
prints:
```
function Foo() {
}

Foo.prototype.bar = function () {
}
```
replace class name:
```
$ echo '[ "bar", "foo" ]' | classgen --class=Bleep
```
prints:
```
function Bleep() {
}

Bleep.prototype.bleep = function () {
}

Bleep.prototype.bar = function () {
}
```
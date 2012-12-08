# @)isType._

Some isType like isArray, isBoolean, isDate, isFunction, isNumber, isObject, isRegExp, isUndefined and isString.

## Usage

### isArray

```javascript
$.isArray([]); // => true
$.isArray('Hello World!'); // => false
```

### isBoolean

```javascript
$.isBoolean(false); // => true
$.isBoolean('Hello World!'); // => false
```

### isDate

```javascript
$.isDate(new Date()); // => true
$.isDate('Hello World!'); // => false
```

### isFunction

```javascript
$.isFunction(function () {}); // => true
$.isFunction('Hello World!'); // => false
```

### isNumber

```javascript
$.isNumber(0); // => true
$.isNumber('Hello World!'); // => false
```

### isObject

```javascript
$.isObject({}); // => true
$.isObject('Hello World!'); // => false
```

### isRegExp

```javascript
$.isRegExp(/0/); // => true
$.isRegExp('Hello World!'); // => false
```

### isUndefined

```javascript
$.isUndefined(undefined); // => true
$.isUndefined('Hello World!'); // => false
```

### isString

```javascript
$.isString(''); // => true
$.isString([]); // => false
```

## lt-ie9

```javascript
var arrayPrototype = Array.prototype;

arrayPrototype.forEach || (arrayPrototype.forEach = function(b, c) {
  var a = 0,
    i = this.length;
  for(a; a < i; a += 1) b.call(c, this[a], a, this)
});
```

## Inspiration

- [Underscore](http://underscorejs.org/)
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/toString#Using_toString_to_detect_object_type)
- [Closure Compiler](http://closure-compiler.appspot.com/home)
- [JSHint](http://www.jshint.com/)

## Author

* GitHub: [Víctor García](https://github.com/gc-victor)
* Twitter: [@gcv](http://twitter.com/gcv)

## License

Public domain: [http://unlicense.org/](http://unlicense.org/)
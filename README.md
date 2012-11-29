# @)isType._

Some isType like isArray, isBoolean, isDate, isFunction, isNumber, isObject, isRegExp, isUndefined and isString.

## How it works

```javascript
    $.isArray([]); => true
    $.isArray('Hello World!'); => false

    $.isBoolean(false); => true
    $.isBoolean('Hello World!'); => false

    $.isDate(new Date()); => true
    $.isDate('Hello World!'); => false

    $.isFunction(function () {}); => true
    $.isFunction('Hello World!'); => false

    $.isNumber(0); => true
    $.isNumber('Hello World!'); => false

    $.isObject({}); => true
    $.isObject('Hello World!'); => false

    $.isRegExp(/0/); => true
    $.isRegExp('Hello World!'); => false

    $.isUndefined(undefined); => true
    $.isUndefined('Hello World!'); => false

    $.isString(''); => true
    $.isString([]); => false
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
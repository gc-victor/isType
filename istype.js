/*
 * JavaScript Librery isType
 * ---------------------------------------------------------------
 * Copyright (c) 2012 Víctor García (https://github.com/gc-victor)
 * Released under Unlicense (http://unlicense.org/)
 * ---------------------------------------------------------------
 */
(function (window) {
  'use strict';

  // allows get objects class
  var arrayPrototype = Array.prototype,
    nativeForEach = arrayPrototype.forEach,
    toStr = Object.prototype.toString,
    a = [], re;

  // forEach if lt-ie9
  if (!nativeForEach) {
    arrayPrototype.forEach = function (fn, sc) {
      var a = 0, d = this.length;
      for (a; a < d; a += 1) {
        fn.call(sc, this[a], a, this);
      }
    };
  }

  // creating some isType methods. Example: $.isArray([]);
  'Array Boolean Date Function Number Object RegExp Undefined String'.split(' ').forEach(function (arr) {
    a['is' + arr] = function (o) {
      re = new RegExp(o);
      return o.test(toStr.call(o));
    };
  });

  // adding objects to $.
  window.$ = a;
}(window));
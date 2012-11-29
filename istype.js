/*
 * JavaScript Librery isType
 * ---------------------------------------------------------------
 * Copyright (c) 2012 Víctor García (https://github.com/gc-victor)
 * Released under Unlicense (http://unlicense.org/)
 * ---------------------------------------------------------------
//  */
// var window = window;

(function (window) {
  'use strict';

  // allows get objects class
  var toStr = Object.prototype.toString,
    a = [];

  // forEach if lt-ie9
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, sc) {
      var a = 0, d = this.length;
      for (a; a < d; a += 1) {
        fn.call(sc, this[a], a, this);
      }
    };
  }

  // creating some isType methods. Example: $.isArray([]);
  'Array Boolean Date Function Number Object RegExp Undefined String'.split(' ').forEach(function (arr) {
    a['is' + arr] = function (o) {
      return toStr.call(o) === '[object ' + arr + ']';
    };
  });

  // adding objects to $.
  window.$ = a;
}(window));
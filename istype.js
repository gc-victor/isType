/*
 * JavaScript Librery isType
 * ---------------------------------------------------------------
 * Copyright (c) 2012 Víctor García (https://github.com/gc-victor)
 * Released under Unlicense (http://unlicense.org/)
 * ---------------------------------------------------------------
 */
(function () {
  'use strict';

  // allows get objects class
  var ob = Object.prototype.toString,
    ar = [];

  // creating some isType methods. Example: $.isArray([]);
  "Array Boolean Date Function Number Object RegExp Undefined String".split(" ").forEach(function (a) {
    ar["is" + a] = function (b) {
      var re = new RegExp(a);
      return re.test(ob.call(b));
    };
  });

  // adding objects to $.
  window.$ = ar;
}());
/*
 * JavaScript Librery isType
 * Copyright (c) 2012 V\u00edctor Garc\u00eda
 * Released under Unlicense
 */
!function (r) {
  /*
   * Creates isType methods
   * methods: isArray, isBoolean, isDate, isFunction, isNumber, isObject, isRegExp, isUndefined, isString
   * returns: boolean
   * example: $.isArray([]) // true
   */
  'Array Boolean Date Function Number Object RegExp Undefined String'.split(' ').forEach(function (a) {
    r['is' + a] = function (b) {
      // b !== b fixes bug $.isNumber(NaN) // true
      return b !== b ? false : new RegExp(a).test(Object.prototype.toString.call(b));
    };
  });

  window.$ = r;
}([]);

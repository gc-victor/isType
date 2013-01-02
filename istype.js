/*
 * JavaScript Librery isType
 * Copyright (c) 2012 V\u00edctor Garc\u00eda
 * Released under Unlicense
 */
!function (r) {
  /*
   * Creates isType methods
   * methods: isArray, isBoolean, isDate, isFunction, isNaN, isNumber, isObject, isRegExp, isUndefined, isString
   * returns: boolean
   * example: $.isArray([]) // true
   */
  'Array Boolean Date Function NaN Number Object RegExp String Undefined'.split(' ').forEach(function (a) {
    r['is' + a] = function (b) {
      return b !== b ? a === 'NaN' ? !0 : !1 : RegExp(a).test(Object.prototype.toString.call(b));
    };
  });

  window.$ = r;
}([]);

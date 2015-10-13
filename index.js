'use strict';

var Baby = require('babyparse');
var fio = require('imacros-fio');

module.exports = function(csvFileName, opts) {
  opts = opts || {};
  opts.header = opts.header || true;
  opts.skipEmptyLines = opts.skipEmptyLines || true;

  return Baby.parse(fio.read(csvFileName), opts).data;
};

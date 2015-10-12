'use strict';

var Baby = require('babyparse');
var fio = require('imacros-fio');

module.exports = function(csvFileName) {
  return Baby.parse(fio.read(csvFileName), {
    header: true,
    skipEmptyLines: true
  }).data;
};

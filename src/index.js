'use strict';

var Baby = require('babyparse');

function readFromFile(fileName) {
  var file = imns.Pref.getFilePref('defdatapath');
  file.append(fileName);
  try {
    return imns.FIO.readTextFile(file).replace(/\uFEFF/g, '');
  } catch (e) {
    window.console.log('The file ' + fileName + ' does not exist in the iMacros\' Datasources folder');
    return null;
  }
}

module.exports = function(csvFileName) {
  return Baby.parse(readFromFile(csvFileName), { header: true }).data;
};

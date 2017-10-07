'use strict';

const path = require('path');

function rename(filePath, callback) {
  const pathObj = path.parse(filePath);
  pathObj.base = null;
  if (callback) {
    callback(pathObj);
  }
  return path.format(pathObj);
}

module.exports = rename;

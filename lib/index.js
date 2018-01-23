'use strict';

module.exports = function(value) {
  return value
    .replace(/[^A-Za-z0-9-]/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
};

'use strict';

// import _ from 'lodash';
const _ = require('lodash');

function component () {
  var element = document.createElement('div');

  // Lodash, now imported by this script.
  element.innerHTML = _.join(['Hello', 'webpack... lodash imported.'], ' ');

  return element;
}

document.body.appendChild(component());

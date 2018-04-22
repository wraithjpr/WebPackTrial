'use strict';

// import _ from 'lodash';
const _ = require('lodash');

// import style sheet
require('./style.css');

function component () {
  var element = document.createElement('div');

  // Lodash, now imported by this script.
  element.innerHTML = _.join(['Hello', 'webpack... lodash imported.'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());

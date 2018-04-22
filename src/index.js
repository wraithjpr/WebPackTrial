'use strict';

// import _ from 'lodash';
const _ = require('lodash');

// import style sheet
require('./style.css');

// import icon
const Icon = require('./icons8-happy-50.png');

function component () {
  var element = document.createElement('div');

  // Lodash, now imported by this script.
  element.innerHTML = _.join(['Hello,', 'webpack.'], ' ');
  element.classList.add('hello');

  // add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

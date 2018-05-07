'use strict';

// import _ from 'lodash';
const _ = require('lodash');

// import printMe function
const printMe = require('./print.js');

// import style sheet
require('./style.css');

// import icon
const Icon = require('./icons8-happy-50.png');

function component () {
  const element = document.createElement('div');

  // Lodash, now imported by this script.
  element.innerHTML = _.join(['Hello,', 'webpack.'], ' ');
  element.classList.add('hello');

  // add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

function componentPrinter () {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
document.body.appendChild(componentPrinter());

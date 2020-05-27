'use strict';

const Examples = require('./examples');


module.exports = [
  {path: '/examples', method: 'GET', config: Examples.get},
  {path: '/examples', method: 'POST', config: Examples.post}
];


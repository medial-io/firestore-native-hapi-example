'use strict';

const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

const SwaggerOptions = require('./swagger');

module.exports = [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: SwaggerOptions
  }
];

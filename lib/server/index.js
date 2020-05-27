'use strict';

const Hapi = require('@hapi/hapi');

const Routes = require('../routes');
const Plugins = require('./plugins');

const Database = require('../db');

const internals = {};


exports.start = async function() {
  const server = await internals.server();

  server.events.on('log', (event) => console.log(JSON.stringify(event)));

  await server.start();

  console.log('Server running on %s', server.info.uri);
  console.log('Documentation at:', `${server.info.uri }/documentation`);

  return server;
};

exports.initialize = async function() {
  const server = await internals.server();
  await server.initialize();

  return server;
};


internals.server = async function() {
  const server = Hapi.server({
    port: process.env.PORT || 9080,
    routes: {
      validate: {
        failAction: (request, h, err) => {
          throw err;
        }
      },
      cors: {
        origin: 'ignore',
        additionalHeaders: [
          'accept-language'
        ]
      }
    }
  });

  await server.register(Plugins);

  server.route(Routes);

  Database.init();
  
  return server;
};

process.on('unhandledRejection', (err) => {
  console.log(err);
});

'use strict';

const internals = {};

exports.init = function() {
  const app = internals.getFirebase();
  const db = app.firestore();

  internals.db = db;

  return internals.db;
};

exports.getDatabase = function() {
  return internals.db;
};

internals.getFirebase = function() {
  return process.env.FIRESTORE_LOCAL ? require('./local').init() : require('./gcp').init();
};
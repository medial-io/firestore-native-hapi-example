'use strict';

const Firebase = require('firebase-admin');


exports.init = function () {
  return Firebase.initializeApp({
    credential: Firebase.credential.applicationDefault()
  });
};
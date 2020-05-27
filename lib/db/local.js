'use strict';

const Firebase = require('@firebase/testing');


exports.init = function() {
  return Firebase.initializeAdminApp({projectId: 'my-first-project'});
};

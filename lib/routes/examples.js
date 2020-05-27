'use strict';

'use strict';

const Joi = require('@hapi/joi');
const { v4: uuidv4 } = require('uuid');

const Database = require('../db');

exports.get = {
  description: 'Get all the examples',
  tags: ['api'],
  handler: async function(request, h) {
    try {
      const db = Database.getDatabase();
      const snapshot = await db.collection('examples').get();

      const results = [];

      snapshot.forEach((doc) => {
        const item = {id: doc.id, ...doc.data()}
        results.push(item)
      });

      return results;
    } catch (error) {
      console.log(error); // here so that you can see the error
      throw error;
    }
  }
};

exports.post = {
  description: 'Insert something into the database',
  tags: ['api'],
  validate: {
    payload: Joi.object()
  },
  handler: async function(request) {
    const payload = request.payload;

    const db = Database.getDatabase();
    const id = uuidv4();

    const docRef = db.collection('examples').doc(id);
    await docRef.set(payload);

    return {id, ...payload};
  }
};
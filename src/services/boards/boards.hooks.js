const { authenticate } = require('@feathersjs/authentication').hooks;
const hooks = require('feathers-authentication-hooks');
// const auth = require('@feathersjs/authentication')

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [
      // hooks.restrictToOwner({ 
      //   ownerField: 'ownerId'
      // })
    ],
    get: [
      hooks.restrictToOwner({ 
        ownerField: 'ownerId'
      })
    ],
    create: [
      hooks.associateCurrentUser({ 
        as: 'ownerId'
      }),
      // auth.hooks.authenticate('jwt')
    ],
    update: [],
    patch: [
      // hooks.restrictToOwner({ 
      //   ownerField: 'ownerId'
      // })
    ],
    remove: [
      // hooks.restrictToOwner({ 
      //   ownerField: 'ownerId'
      // })
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

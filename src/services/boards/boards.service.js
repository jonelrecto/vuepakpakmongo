// Initializes the `boards` service on path `/boards`
const createService = require('feathers-mongoose');
const createModel = require('../../models/boards.model');
const hooks = require('./boards.hooks');
// const hooks2 = require('feathers-authentication-hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
    // whitelist: ['$populate']
  };

  // Initialize our service with any options it requires
  app.use('/boards', createService(options));

  
  // Get our initialized service so that we can register hooks
  var service = app.service('boards');


  service.hooks(hooks);
};

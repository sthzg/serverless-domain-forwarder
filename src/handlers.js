const config = require('../config')();
const { buildResponse } = require('./utils');

module.exports.forward = (event, context, callback) => {
  callback(null, buildResponse(config));
};

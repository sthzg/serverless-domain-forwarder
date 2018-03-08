const MOVED_PERMANENTLY = 301;

function getLocation(config) {
  const { location } = config;

  if (!location) {
    throw new Error('No location defined in config.js');
  }

  return location;
}

function buildResponse(config) {
  const Location = getLocation(config);

  return {
    statusCode: MOVED_PERMANENTLY,
    headers: { Location },
  };
}

module.exports = {
  buildResponse,
  getLocation,
};

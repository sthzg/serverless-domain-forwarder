const utils = require('../src/utils');

const {
  buildResponse,
  getLocation,
} = utils;

describe('utils', () => {
  context('getLocation', () => {
    it('should return the location from config', function () {
      const location = getLocation({ location: 'any' });
      expect(location).to.equal('any');
    });

    it('should throw an error if location is not configured', () => {
      const getLocationFn = () => getLocation({});
      expect(getLocationFn).to.throw('No location defined in config.js');
    });
  });

  context('buildResponse', () => {
    it('should return the expected response', function () {
      const response = buildResponse({ location: '/any' });

      expect(response).to.deep.equal({
        statusCode: 301,
        headers: {
          Location: '/any',
        },
      });
    });
  });
});

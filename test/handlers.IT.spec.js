const sinon = require('sinon');
const config = require('../config');
const { forward } = require('../src/handlers');

describe('handlers', () => {
  beforeEach(function () {
    this.sandbox = sinon.createSandbox();
    this.callbackStub = this.sandbox.stub();
  });

  afterEach(function () {
    this.sandbox.restore();
  });

  context('config', () => {
    it('should be defined', () => {
      expect(config).to.be.a('function');
    });

    it('should find all required settings in config.js', () => {
      const { namePrefix, location, domains } = config();

      expect(namePrefix, 'missing namePrefix in config.js').to.be.a('string');
      expect(location, 'missing location in config.js').to.be.a('string');
      expect(domains, 'missing domains in config.js').to.be.an('array');
      expect(domains, 'empty domains in config.js').to.not.be.empty;
    });
  });

  context('handler', () => {
    it('should not throw when invoked', function () {
      const forwardFn = () => forward(null, null, this.callbackStub);
      expect(forwardFn).to.not.throw();
    });

    it('should have location defined in config.js', function () {
      const { location: Location } = config();
      forward(undefined, undefined, this.callbackStub);

      expect(this.callbackStub).to.have.been.calledOnce;
      expect(this.callbackStub).to.have.been.calledWithExactly(null, {
        statusCode: 301,
        headers: { Location },
      });
    });
  });
});

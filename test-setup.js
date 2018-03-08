const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const { expect } = chai;

chai.use(sinonChai);

// global.sinon = sinon;
global.expect = expect;

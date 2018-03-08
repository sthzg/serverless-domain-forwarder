module.exports = () => ({
  testFramework: 'mocha',
  files: [
    'test-setup.js',
    'config.js',
    'src/**/*.js',
  ],
  tests: [
    'test/**/*.spec.js',
  ],
  env: {
    type: 'node',
  },
  setup: () => {
    require('./test-setup');
  },
});

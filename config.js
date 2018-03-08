module.exports = () => ({
  /**
   * This prefix will be prepended to
   * names and IDs on the AWS resources.
   */
  namePrefix: 'my-forwarder',

  /**
   * List domains that should be forwarded,
   * e.g. foobar.com, sub.foobar.com
   *
   * The lists in this array will be configured
   * as CNAMEs in the CloudFront distribution.
   *
   * Note: DNS servers for this domain need to
   * be setup manually to route to the CloudFront
   * distribution.
   */
  domains: [''],

  /**
   * The domain to forward requests to.
   */
  location: 'https://www.example.com',
});

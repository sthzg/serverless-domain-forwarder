# serverless-domain-forwarder

This is a simple [☞ Serverless][0] template that creates a stack that
forwards configured (sub)domains to a new location.

## AWS Stack

- Lambda function to respond with a 301 response
- Api Gateway with two GET routes `/` and `/{any+}`
- CloudFront distribution to route requests to api gateway

## Usage

With the installed and configured serverless cli, the following
command downloads the template to the local machine:

```
serverless create --template-url https://github.com/sthzg/serverless-domain-forwarder --path my-domain-forwarder
cd my-domain-forwarder
npm install # or yarn
```

Open `config.js` and configure the settings as specified. You can
check an example response locally by running:

```
serverless invoke local -f forward
```

Modify and extend the `serverless.yml` as desired. To deploy the
service to AWS simply run:

```
serverless deploy -v
```

Note: this can take a long time if the CloudFront distribution is
setup for the first time (or its settings have changed).

## Certificates

To configure the CloudFront distribution to use a certificate created
in AWS Certificate Manager, go to `serverless.yml` and change the
`ViewerCertificate` configuration. [☞ AWS Reference Docs][1]

```
# Change from ...
ViewerCertificate:
  CloudFrontDefaultCertificate: "true"

# ... to
ViewerCertificate:
  AcmCertificateArn: <arn:your-cert-arn>
  SslSupportMethod: sni-only
```

## Why Not Lambda@Edge on CloudFront

CloudFront allows to route requests through a lambda function. These
lambdas are currently required to be in the US region which may
conflict with European GDPR rules. Using ApiGateway ensures control
over the region for the time being.

[0]: https://serverless.com/
[1]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distributionconfig-viewercertificate.html

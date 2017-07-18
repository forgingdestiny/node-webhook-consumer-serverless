<!--
title: Node Webhook Consumer with Serverless
description: Example code to demonstrate how to setup a simple HTTP POST endpoint to consume webhook data.
layout: Doc
-->
# Node Webhook Consumer with Serverless

Example code to demonstrate how to setup a simple HTTP POST endpoint to consume webhook data.

Based on: https://github.com/serverless/examples/tree/master/aws-node-simple-http-endpoint from [serverless](https://serverless.com/).

**Read more about this on the "Inside the Embassy" Blog**: 
https://inside.getambassador.com/serverless-creating-a-webhook-consumer-in-5-minutes-4136adab06b0

## Use Cases

- Consuming webhook data from a third-party API or service

## Invoke the function locally

```bash
serverless invoke local --function webhookConsumer
```

Which should result in:

```bash
Serverless: Your function ran successfully.

{
    "statusCode": 200
}
```

## Deploy

In order to deploy the you endpoint simply run

```bash
serverless deploy
```

The expected result should be similar to:

```bash
Serverless: Packaging service...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading service .zip file to S3 (1.9 KB)...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..............
Serverless: Stack update finished...
Service Information
service: test-webhook-endpoint
stage: dev
region: us-east-1
api keys:
  None
endpoints:
  POST - https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/webhook
functions:
  webhookConsumer: test-webhook-endpoint-dev-webhookConsumer
```

## Usage

You can now invoke the Lambda directly and even see the resulting log via

```bash
serverless invoke --function webhookConsumer --log
```

or as send an HTTP request directly to the endpoint using a tool like curl

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/ping
```

## Scaling

By default, AWS Lambda limits the total concurrent executions across all functions within a given region to 100. The default limit is a safety limit that protects you from costs due to potential runaway or recursive functions during initial development and testing. To increase this limit above the default, follow the steps in [To request a limit increase for concurrent executions](http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html#increase-concurrent-executions-limit).

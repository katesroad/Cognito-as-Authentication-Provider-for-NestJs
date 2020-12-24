# Guide

## Cognito

- Cognito vs Auth0
> Cognito is cheaper for business usage with the same mau.

- [What is cognito](https://aws.amazon.com/cognito/)
- [Setup a user pool](https://console.aws.amazon.com/cognito)
- [How to validate a jwt token generated by cognito user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html)
  >1. For AWS cognigto, the audience should be the app client id(The one has no secret key)

## Amplify

- [What is amplify](https://aws.amazon.com/amplify/)

- [Use cognito as authentication solution](https://sandbox.amplifyapp.com/start#auth)
- [Amplify flow](https://docs.amplify.aws/cli/start/workflows#amplify-init)
- [Authentication](https://docs.amplify.aws/cli/auth/overview)

>1. Will create two app client for the pool created by cli. One app client has app secret, the other one doesn't.
>2. Amplify has a default UI, it also supports programmatically sign in/up

- [Integration with React](https://docs.amplify.aws/start/getting-started/setup/q/integration/react)


## Integrate Cognito with Nest.js 

- [Using AWS Cognito with NestJS](https://brightinventions.pl/blog/using-cognito-with-nest-js)
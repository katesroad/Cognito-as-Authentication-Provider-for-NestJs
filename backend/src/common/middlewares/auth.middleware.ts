import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private config: ConfigService) {}
  use(req: Request, res: Response, next: Function) {
    const {
      aws_cognito_identity_pool_id,
      aws_cognito_region,
    } = this.config.get('cognito');
    const issuer = `https://cognito-idp.${aws_cognito_region}.amazonaws.com/${aws_cognito_identity_pool_id}`;
    const jwksUri = `${issuer}/.well-known/jwks.json`;
    jwt({
      secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri,
      }),
      issuer,
      algorithms: ['RS256'],
    })(req, res, (err) => {
      if (err) {
        const status = err.status || 500;
        const message =
          err.message || 'Sorry we were unable to process your request.';
        return res.status(status).send({
          message,
        });
      }
      next();
    });
  }
}

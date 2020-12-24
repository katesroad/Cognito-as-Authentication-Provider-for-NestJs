import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    const {
      aws_cognito_identity_pool_id,
      aws_cognito_region,
      aws_user_pools_web_client_id,
    } = config.get('cognito');
    const issuer = `https://cognito-idp.${aws_cognito_region}.amazonaws.com${aws_cognito_identity_pool_id}`;
    const jwksUri = `${issuer}/.well-known/jwks.json`;
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: aws_user_pools_web_client_id,
      issuer,
      algorithms: ['RS256'],
    });
  }

  validate(payload: unknown): unknown {
    console.log(payload);
    return payload;
  }
}

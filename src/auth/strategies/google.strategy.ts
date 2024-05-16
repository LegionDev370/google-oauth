import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GoogleClientId,
      clientSecret: process.env.GoogleSecret,
      callbackURL: process.env.callbackURL,
      scope: ['profile', 'email'],
    });
  }
  async validate(
    access_token: string,
    refresh_token: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, photos, emails } = profile;
    const user = {
      first_name: name.givenName,
      last_name: name.familyName,
      picture: photos[0].value,
      email: emails[0].value,
      access_token,
    };
    done(null, user);
  }
}

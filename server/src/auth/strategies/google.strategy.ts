import { Inject, Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, Profile } from 'passport-google-oauth20'
import { ConfigService } from '@nestjs/config'
import { AuthService } from '../auth.service'


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(
        private config: ConfigService,
        private readonly authService: AuthService
        ) {
        super({
            clientID: config.get('CLIENT_ID'),
            clientSecret: config.get('SECRET_ID'),
            callbackURL: 'http://localhost:3001/api/auth/google/redirect',
            scope: ['profile', 'email']
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        const { id, name, emails, photos } = profile;

        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
        }

        return user
    }
}
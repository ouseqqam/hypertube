import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy, GoogleStrategy } from './strategies'
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [JwtModule.register({})],
  providers: [
    AuthService,
    JwtStrategy,
    GoogleStrategy,
  ],
  controllers: [AuthController]
})
export class AuthModule {}

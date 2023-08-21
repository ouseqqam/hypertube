import { Body, Controller, Get, Post, Redirect, Req, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { registerDto, loginDto  } from './dto'
import { GoogleGuard } from './guards'

@Controller('auth')
export class AuthController {
    constructor(private authservice: AuthService) {}

    @Post('register')
    register(@Body() dto: registerDto) {
       return this.authservice.register(dto)
    }

    @Post('login')
    login(@Body() dto: loginDto) {
        return this.authservice.login(dto)
    }

    @Get('google/login')
    @UseGuards(GoogleGuard)
    googleLogin() {
        return { msg: 'Google Authentication' }
    }

    @Get('google/redirect')
    @UseGuards(GoogleGuard)
    handleRedirect(@Req() req) {
        return this.authservice.handleRedirect(req.user)
    }
}
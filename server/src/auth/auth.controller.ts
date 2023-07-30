import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { registerDto, loginDto  } from './dto'
import { validate } from 'class-validator';

@Controller('auth')
export class AuthController {
    constructor(private authservice: AuthService) {}

    @Post('/register')
    register(@Body() dto: registerDto) {
       return this.authservice.register(dto)
    }

    @Post('/login')
    login(@Body() dto: loginDto) {
        return this.authservice.login(dto)
    }
}

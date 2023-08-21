import { ForbiddenException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { loginDto, registerDto } from './dto'
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) {}
    async register(dto: registerDto) {
        try {
            const password = await argon.hash(dto.password)
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    username: dto.username,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    password
                }
            })
            delete user.password
            return user
        } catch (err) {
            if (err instanceof PrismaClientKnownRequestError) {
                if (err.code === 'P2002') {
                    throw new ForbiddenException(err.meta.target[0] + " exist")
                }
            }
            throw err
        }
    }

    async login(dto: loginDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                username: dto.username,
            }
        })

        if (!user)
            throw new ForbiddenException('Credentials incorrect')

        const pass = await argon.verify(user.password, dto.password)

        if (!pass)
            throw new ForbiddenException('Credentials incorrect')

        const token  =  await this.signToken(user.username, user.id)

        return token
    }

    async signToken(username: string, id: number) {
        const payload = {
            sub: id,
            username
        }

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15min',
            secret: this.config.get('JWT_SECRET')
        })

        return { token }
    }
    
    async handleRedirect(profile) {
        try {
            const { email, firstName, lastName } = profile

            let user = await this.prisma.user.findFirst({
                where: {
                    username: email,
                }
            })

            if (!user) {
                user = await this.prisma.user.create({
                   data: {
                       email: email,
                       username: `${firstName[0].toLowerCase()}${lastName.toLowerCase()}`,
                       firstName: firstName,
                       lastName: lastName,
                       provider: 'google'
                   }
                })
            }

            const token  =  await this.signToken(user.username, user.id)

            return token

        } catch (err) {
            if (err instanceof PrismaClientKnownRequestError) {
                if (err.code === 'P2002') {
                    throw new ForbiddenException(err.meta.target[0] + " exist")
                }
            }
            throw err
        }
    }
}
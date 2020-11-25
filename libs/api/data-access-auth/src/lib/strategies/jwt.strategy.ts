import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { ApiDataAccessAuthService } from '../api-data-access-auth.service'
import { JwtDto } from '../dto/jwt.dto'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly auth: ApiDataAccessAuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'NXPM_STACK_SECRET4115096',
    })
  }

  async validate(payload: JwtDto) {
    const user = await this.auth.validateUser(payload.userId)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}

import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user) {
    console.log('aaaaaaaaaaaa')
    if (err || !user) {
        console.log('bbbbbbbbbbbb')
      throw new UnauthorizedException();
    }
    console.log('eeeeeeeeeee')
    return user;
  }
}

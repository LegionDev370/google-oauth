import { HttpException, Injectable } from '@nestjs/common';
@Injectable()
export class AuthService {
  constructor() {}
  async googleLogin(user: any) {
    try {
      if (!user) {
        return {
          msg: 'user not found',
        };
      }
      return {
        user,
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignupInput } from './dto/signup.input';
import { LoginInput } from './dto/login.input';
import { AuthReponse } from './types/auth-response.type';
import { Auth } from './decorators/auth/auth.decorator';
import { ValidRoles } from './enums/valid-roles.enum';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(()=> AuthReponse,{name: 'signup'})
  @Auth(ValidRoles.admin)
  signup(@Args('signupInput') signupInput: SignupInput) {
    return this.authService.signup(signupInput);
  }

  @Mutation(()=> AuthReponse,{name: 'login'})
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }

 
}

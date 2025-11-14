import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { SignupInput } from 'src/auth/dto/signup.input';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(signupInput: SignupInput): Promise<User>;
    findOneById(id: string): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    private handleExceptions;
}

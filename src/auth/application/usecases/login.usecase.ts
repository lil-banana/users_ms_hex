import { Inject, Injectable } from '@nestjs/common';
import { ILoginUseCase } from '../../domain/interfaces/login.interface';
import { User } from '../../../users/domain/models/user.model';
import { USER_PERSISTENCE_PORT, UserPersistencePort } from '../../../users/domain/repositories/user.repository';
import { PasswordEncryptionService } from '../../../users/application/services/passwordEncryption.service';
import { TokenService } from '../services/token.service';
import { PasswordDoNotMatchException } from '../exceptions/passwordDoNotMatch.exception';

@Injectable()
export class LoginUseCase implements ILoginUseCase {
    private readonly passwordEncryptionService: PasswordEncryptionService = new PasswordEncryptionService();
    constructor(
        @Inject(USER_PERSISTENCE_PORT) private readonly userRepository: UserPersistencePort,
        private readonly tokenService: TokenService
    ) { }

    async login(partialUser: Partial<User>): Promise<string> {
        try {
            const user: User = await this.userRepository.getUserByEmail(partialUser.email);
            if (await this.passwordEncryptionService.checkPassword(partialUser.password, user.password)) {
                return this.tokenService.signToken(user.id, user.role.name, user.boss?.id);
            }
            throw new PasswordDoNotMatchException();
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}
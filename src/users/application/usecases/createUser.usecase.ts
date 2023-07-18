import { Inject, Injectable } from '@nestjs/common';
import { ICreateUserUseCase } from '../../domain/interfaces/createUser.interface';
import { User } from '../../domain/models/user.model';
import { USER_PERSISTENCE_PORT, UserPersistencePort } from '../../domain/repositories/user.repository';
import { PasswordEncryptionService } from '../services/passwordEncryption.service';

@Injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
    private readonly passwordEncryptionService: PasswordEncryptionService = new PasswordEncryptionService();
    constructor(
        @Inject(USER_PERSISTENCE_PORT) private readonly userRepository: UserPersistencePort
    ) { }

    async saveUser(user: User): Promise<User> {
        try {
            user.password = await this.passwordEncryptionService.encryptPassword(user.password);
            return this.userRepository.saveUser(user);
        } catch (e) {
            throw e;
        }
    }
}
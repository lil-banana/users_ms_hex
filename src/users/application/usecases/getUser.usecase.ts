import { Inject, Injectable } from '@nestjs/common';
import { IGetUserUseCase } from '../../domain/interfaces/getUser.interface';
import { User } from '../../domain/models/user.model';
import { USER_PERSISTENCE_PORT, UserPersistencePort } from '../../domain/repositories/user.repository';

@Injectable()
export class GetUserUseCase implements IGetUserUseCase {
    constructor(
        @Inject(USER_PERSISTENCE_PORT) private readonly userRepository: UserPersistencePort
    ) { }

    async getUser(userId: string): Promise<User> {
        return this.userRepository.getUser(userId);
    }
}
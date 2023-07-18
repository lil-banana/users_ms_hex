import { Injectable } from '@nestjs/common';
import { UserPersistencePort } from '../../../../domain/repositories/user.repository';
import { UserRepository } from '../repositories/user.repository';
import { UserEntityMapper } from '../mappers/userEntity.mapper';
import { User } from '../../../../domain/models/user.model';
import { UserEntity } from '../entities/user.entity';
import { UserAlreadyExistsException } from '../../../exceptions/userAlreadyExistsException.exception';
import { UserNotFoundException } from '../../../exceptions/userNotFoundException.exception';

@Injectable()
export class UserAdapter implements UserPersistencePort {
    
    private readonly userEntityMapper: UserEntityMapper = new UserEntityMapper();

    constructor(
        private readonly userRepository: UserRepository
    ) { }

    async saveUser(user: User): Promise<User> {
        if (await this.userRepository.findOneByDocumentNumber(user.documentNumber)) {
            throw new UserAlreadyExistsException();
        }
        const userEntity: UserEntity = this.userEntityMapper.toUserEntity(user);
        return this.userEntityMapper.toUser(await this.userRepository.save(userEntity));
    }

    async getUser(userId: string): Promise<User> {
        const userEntity: UserEntity = await this.userRepository.findOneById(userId);
        if (!userEntity) {
            throw new UserNotFoundException();
        }
        return this.userEntityMapper.toUser(userEntity);
    }
}
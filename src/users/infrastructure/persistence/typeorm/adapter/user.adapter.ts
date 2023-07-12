import { Inject, Injectable } from '@nestjs/common';
import { UserPersistencePort } from 'src/users/domain/repositories/user.repository';
import { UserRepository } from '../repositories/user.repository';
import { UserEntityMapper } from '../mappers/userEntity.mapper';
import { User } from 'src/users/domain/models/user.model';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserAdapter implements UserPersistencePort {
    
    private readonly userEntityMapper: UserEntityMapper = new UserEntityMapper();

    constructor(
        private readonly userRepository: UserRepository
    ) { }

    async saveUser(user: User): Promise<User> {
        if (await this.userRepository.findOneById(user.getId())) {
            //throw new UserAlreadyExistsException();
        }
        const userEntity: UserEntity = this.userEntityMapper.toUserEntity(user);
        return this.userEntityMapper.toUser(await this.userRepository.save(userEntity));
    }

    async getAllUsers(): Promise<User[]> {
        const userEntityList: UserEntity[] = await this.userRepository.findAll();
        if (userEntityList.length === 0) {
            //throw new NoDataFoundException();
        }
        return this.userEntityMapper.toUserList(userEntityList);
    }

    async getUser(userId: string): Promise<User> {
        const userEntity: UserEntity = await this.userRepository.findOneById(userId);
        if (!userEntity) {
            //throw new UserNotFoundException();
        }
        return this.userEntityMapper.toUser(userEntity);
    }
}
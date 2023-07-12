import { Inject, Injectable } from '@nestjs/common';
import { UserServicePort } from '../interfaces/user.interface';
import { User } from '../models/user.model';
import { UserPersistencePort, USER_PERSISTENCE_PORT } from '../repositories/user.repository';
import { UserAdapter } from '../../../users/infrastructure/persistence/typeorm/adapter/user.adapter';

export class UserService implements UserServicePort {

    constructor(@Inject(USER_PERSISTENCE_PORT) private readonly userPersistencePort: UserPersistencePort) { }

    saveUser(user: User): Promise<User> {
        return this.userPersistencePort.saveUser(user);
    }

    getAllUsers(): Promise<User[]> {
        return this.userPersistencePort.getAllUsers();
    }

    getUser(userId: string): Promise<User> {
        return this.userPersistencePort.getUser(userId);
    }
}
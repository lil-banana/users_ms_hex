import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) { }

    save(user: UserEntity): Promise<UserEntity> {
        return this.userRepository.save(user);
    }

    findOneById(id: string): Promise<UserEntity | null> {
        return this.userRepository.findOneBy({ id });
    }

    findOneByEmail(email: string): Promise<UserEntity | null> {
        return this.userRepository.findOneBy({ email });
    }
}
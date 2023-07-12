import { Module, Type } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infrastructure/persistence/typeorm/entities/user.entity';
import { UserController } from './infrastructure/controllers/user.controller';
import { UserUseCase } from './application/usecases/user.usecase';
import { UserService } from './domain/services/user.service';
import { UserAdapter } from './infrastructure/persistence/typeorm/adapter/user.adapter';
import { UserRepository } from './infrastructure/persistence/typeorm/repositories/user.repository';
import { UserRequestMapper } from './application/mappers/userRequest.mapper';
import { UserResponseMapper } from './application/mappers/userResponse.mapper';
import { UserEntityMapper } from './infrastructure/persistence/typeorm/mappers/userEntity.mapper';
import { USER_PERSISTENCE_PORT } from './domain/repositories/user.repository';
import { RolesModule } from '../roles/roles.module';

@Module({
    imports: [RolesModule, TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService, UserRepository, UserEntityMapper, UserRequestMapper, UserResponseMapper, UserAdapter, UserUseCase,
        {
            provide: USER_PERSISTENCE_PORT,
            useClass: UserAdapter,
        }
    ],
})
export class UsersModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infrastructure/persistence/typeorm/entities/user.entity';
import { RoleEntity } from './infrastructure/persistence/typeorm/entities/role.entity';
import { UserController } from './infrastructure/controllers/user.controller';
import { CreateUserUseCase } from './application/usecases/createUser.usecase';
import { GetUserUseCase } from './application/usecases/getUser.usecase';
import { UserAdapter } from './infrastructure/persistence/typeorm/adapters/user.adapter';
import { UserRepository } from './infrastructure/persistence/typeorm/repositories/user.repository';
import { UserEntityMapper } from './infrastructure/persistence/typeorm/mappers/userEntity.mapper';
import { USER_PERSISTENCE_PORT } from './domain/repositories/user.repository';
import { CREATE_USER_USE_CASE } from './domain/interfaces/createUser.interface';
import { GET_USER_USE_CASE } from './domain/interfaces/getUser.interface';
import { TokenService } from '../auth/application/services/token.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity, RoleEntity])
    ],
    controllers: [UserController],
    providers: [
        UserRepository,
        UserEntityMapper,
        UserAdapter,
        CreateUserUseCase,
        GetUserUseCase,
        {
            provide: USER_PERSISTENCE_PORT,
            useClass: UserAdapter,
        },
        {
            provide: CREATE_USER_USE_CASE,
            useClass: CreateUserUseCase,
        },
        {
            provide: GET_USER_USE_CASE,
            useClass: GetUserUseCase,
        },
        TokenService
    ],
    exports: [USER_PERSISTENCE_PORT]
})
export class UsersModule { }

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/infrastructure/persistence/typeorm/entities/user.entity';
import { RoleEntity } from './users/infrastructure/persistence/typeorm/entities/role.entity';

@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: [UserEntity, RoleEntity],
            synchronize: true,
        }),
    ]
})
export class AppModule { }

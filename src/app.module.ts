import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/infrastructure/persistence/typeorm/entities/user.entity';
import { RoleEntity } from './roles/infrastructure/persistence/typeorm/entities/role.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        RolesModule,
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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }

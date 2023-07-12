import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './infrastructure/persistence/typeorm/entities/role.entity';
import { RoleService } from './domain/services/role.service';
import { ROLE_PERSISTENCE_PORT } from './domain/repositories/role.repository';
import { RoleAdapter } from './infrastructure/persistence/typeorm/adapter/role.adapter';
import { RoleRepository } from './infrastructure/persistence/typeorm/repositories/role.repository';
import { RoleEntityMapper } from './infrastructure/persistence/typeorm/mappers/roleEntity.mapper';
import { RoleDtoMapper } from './application/mappers/roleDto.mapper';

@Module({
    imports: [TypeOrmModule.forFeature([RoleEntity])],
    providers: [
        RoleService,
        RoleAdapter,
        RoleRepository,
        RoleEntityMapper,
        RoleDtoMapper,
        {
            provide: ROLE_PERSISTENCE_PORT,
            useClass: RoleAdapter,
        },
    ],
    exports: [
        RoleService, 
        RoleDtoMapper
    ]
})
export class RolesModule { }

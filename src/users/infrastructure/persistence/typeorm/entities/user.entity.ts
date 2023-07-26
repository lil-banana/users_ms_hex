import { RoleEntity } from './role.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('User')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    lastName: string;

    @Column({ unique: true, nullable: false })
    documentNumber: string;

    @Column({ nullable: false })
    cellphoneNumber: string;

    @Column({ nullable: false })
    birthDay: Date;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @ManyToOne(/* istanbul ignore next */ ()  => RoleEntity, /* istanbul ignore next */ (role) => role, {
        eager: true,
        nullable: false,
    })
    @JoinColumn({ name: 'roleId' })
    role: RoleEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
import { RoleEntity } from './role.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

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

    @Column({ nullable: true })
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

    @OneToMany(/* istanbul ignore next */ () => UserEntity, /* istanbul ignore next */ user => user.boss)
    subordinates: UserEntity[];

    @ManyToOne(/* istanbul ignore next */ () => UserEntity, /* istanbul ignore next */ boss => boss.subordinates, {
        nullable: true,
    })
    @JoinColumn({ name: 'bossId' })
    boss: UserEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('User')
export class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    documentNumber: string;

    @Column()
    cellphoneNumber: string;

    @Column()
    birthDay: Date;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    roleId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
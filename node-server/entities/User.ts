import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User extends BaseEntity {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user_name', nullable: false })
    username: string

    @Column({ nullable: false })
    password: string;

}
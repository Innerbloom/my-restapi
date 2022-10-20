import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {enumEvent} from "../controllers/user.controllers";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

}

@Entity()
export class Logs extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({type: 'datetime'})
    date = new Date();


    @Column()
    login: string;

    @Column({
        type: "enum",
        enum: ["Login", "Registration"],
        default: "Login"
    })
    type: enumEvent;
}
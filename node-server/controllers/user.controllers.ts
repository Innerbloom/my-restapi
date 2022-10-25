import {Request, Response} from "express";
import {User} from '../entities/User';
import {Logs} from "../entities/Logs";
import {validationResult} from "express-validator";
import {AppDataSource} from "../db";
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const {secret} = require ('./config');


const generateAccessToken = (id: any) => {
    const payload =  {id};
    return jwt.sign(payload, secret, {expiresIn: '24h'});
}

export type enumEvent = "Login" | "Registration";


export const createUser = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(402).json({message: "Ошибка при регистрации"})
        }
        const {username, password} = req.body;
        const candidate = await User.findOneBy({username})
        const hashPassword = bcrypt.hashSync(password, 7);
        if (candidate) {
            return res.status(403).json({message: "Пользователь существует"})
        }

        const user = new User();
        user.username = username;
        user.password = hashPassword;
        await user.save()


        await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(Logs)
            .values({login: user.username, type: "Registration"})
            .execute();


        return res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body
        const user = await User.findOneBy({username});

        if (!user) {
            return res.status(400).json({message: `Пользователь ${username} не найден`});
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(401).json({message: "Пароль не верный"});
        } else {

            await AppDataSource
                .createQueryBuilder()
                .insert()
                .into(Logs)
                .values({login: user.username, type: "Login"})
                .execute();

            const token = generateAccessToken(user.id)
            return res.json({token, message: `Добро пожаловать ${username}`})
        }

    }catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: "Ошибка входа"});
        }
    }
}

//Смена пароля и удаление юзера
/*export const updateUser = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        const user = await User.findOneBy({id: parseInt(req.params.id)})
        if (!user) return res.status(404).json({message: 'User does not exists'});

        await User.update({id: parseInt(id)}, req.body);

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await User.delete({ id: parseInt(id) });

        if (result.affected === 0)
            return res.status(404).json({ message: "User not found" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};*/

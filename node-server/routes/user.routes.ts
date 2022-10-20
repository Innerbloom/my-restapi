import {Router} from "express";
import {createUser, login} from "../controllers/user.controllers";
import {check} from "express-validator";

const router = Router();

router.post('/reg', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль не может быть меньше 6 символов").isLength({min:6, max: 30})
], createUser);

router.post('/login', login);

//Смена пароля
//router.put('/users/:id', updateUser);
//Удаление юзера
//router.delete("/users/:id", deleteUser);
export default router;
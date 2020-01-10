import userController from '../controller/user';
import authenticationController from '../controller/authentication';
import { loginParametersValidation, isValidToken, requestValidation, hashPassword } from '../middleware';

const login = {
    path: '/api/login',
    middleware: [ loginParametersValidation ],
    handler: authenticationController.login
};

const getUserList = {
    path: '/api/user',
    middleware: [ isValidToken ],
    handler: userController.list
};

const getUser = {
    path: '/api/user/:username',
    middleware: [ isValidToken ],
    handler: userController.get
};
const postUser = {
    path: '/api/user',
    middleware: [ isValidToken, requestValidation, hashPassword ],
    handler: userController.create
};
const putUser = {
    path: '/api/user/:username',
    middleware: [ isValidToken, requestValidation, hashPassword ],
    handler: userController.edit
};
const deleteUser = {
    path: '/api/user/:username',
    middleware: [ isValidToken ],
    handler: userController.deleteUser
};

export default {
    login, 
    getUserList, 
    getUser, 
    postUser, 
    putUser, 
    deleteUser 
};

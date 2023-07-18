import { User } from '../models/user.model';

export const CREATE_USER_USE_CASE = 'CREATE_USER_USE_CASE';

export interface ICreateUserUseCase {
    saveUser(user: User): Promise<User>;
}
import { User } from '../models/user.model';

export const GET_USER_USE_CASE = 'GET_USER_USE_CASE';

export interface IGetUserUseCase {
    getUser(userId: string): Promise<User>;
}
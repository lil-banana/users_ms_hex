import { User } from '../../../users/domain/models/user.model';

export const LOGIN_USE_CASE = 'LOGIN_USE_CASE';

export interface ILoginUseCase {
    login(user: Partial<User>): Promise<string>;
}
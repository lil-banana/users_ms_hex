import { User } from '../models/user.model';

export const USER_PERSISTENCE_PORT = 'USER_PERSISTENCE_PORT';

export interface UserPersistencePort {
    saveUser(user: User): Promise<User>;
    getUser(userId: string): Promise<User>;
}
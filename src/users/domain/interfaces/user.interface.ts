import { User } from '../models/user.model';

export interface UserServicePort {
    saveUser(user: User): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUser(userId: string): Promise<User>;
}
import { UserRequest } from "../dto/userRequest.dto";
import { UserResponse } from "../dto/userResponse.dto";

export interface IUserUseCase {
    saveUser(userRequest: UserRequest): Promise<UserResponse>;
    getUsers(): Promise<UserResponse[]>;
    getUser(userId: string): Promise<UserResponse>;
}
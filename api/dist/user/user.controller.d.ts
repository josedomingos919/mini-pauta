import { AddUserDTO } from './dto/addUserDto';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto/updateUserDto';
import { LoginDTO } from './dto/loginDto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    login(data: LoginDTO): Promise<any>;
    add(data: AddUserDTO): Promise<any>;
    update(data: UpdateUserDTO): Promise<any>;
    getOne(id: number): Promise<any>;
    getAll(): Promise<any>;
    remove(id: number): Promise<any>;
}

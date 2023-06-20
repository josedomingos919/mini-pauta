import { AddUserDTO } from './dto/addUserDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDTO } from './dto/updateUserDto';
import { LoginDTO } from './dto/loginDto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddUserDTO): Promise<any>;
    getAll(): Promise<any>;
    update(data: UpdateUserDTO): Promise<any>;
    getOne(id: number): Promise<any>;
    remove(id: number): Promise<any>;
    login(data: LoginDTO): Promise<any>;
}

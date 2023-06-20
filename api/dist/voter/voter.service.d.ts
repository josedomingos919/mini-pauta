import { AddVoterDto } from './dto/addVoterDto';
import { UpdateVoterDto } from './dto/updateVoterDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class VoterService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddVoterDto): Promise<any>;
    update(data: UpdateVoterDto): Promise<any>;
    getByEleicao(id: number): Promise<any>;
    remove(id: number): Promise<any>;
    getOne(id: number): Promise<any>;
    getAll(): Promise<any>;
}

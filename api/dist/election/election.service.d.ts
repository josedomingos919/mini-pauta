import { AddElectionDto } from './dto/addElectionDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ElectionService {
    private prisma;
    constructor(prisma: PrismaService);
    finish(id: number): Promise<any>;
    add(data: AddElectionDto): Promise<any>;
    getAll(): Promise<any>;
    remove(id: number): Promise<any>;
}

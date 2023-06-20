import { AddCandidateDto } from './dto/addCandidateDto';
import { UpdateCandidateDto } from './dto/updateCandidateDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CandidateService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddCandidateDto): Promise<any>;
    getByEleicao(id: number): Promise<any>;
    update(data: UpdateCandidateDto): Promise<any>;
    remove(id: number): Promise<any>;
    getOne(id: number): Promise<any>;
    getAll(): Promise<any>;
}

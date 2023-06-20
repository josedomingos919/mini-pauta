import { CandidateService } from './candidate.service';
import { AddCandidateDto } from './dto/addCandidateDto';
import { UpdateCandidateDto } from './dto/updateCandidateDto';
export declare class CandidateController {
    private voterService;
    constructor(voterService: CandidateService);
    add(data: AddCandidateDto): Promise<any>;
    update(data: UpdateCandidateDto): Promise<any>;
    remove(id: number): Promise<any>;
    getOne(id: number): Promise<any>;
    getAll(): Promise<any>;
    getByEleicao(id: number): Promise<any>;
}

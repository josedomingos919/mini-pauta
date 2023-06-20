import { VoterService } from './voter.service';
import { AddVoterDto } from './dto/addVoterDto';
import { UpdateVoterDto } from './dto/updateVoterDto';
export declare class VoterController {
    private voterService;
    constructor(voterService: VoterService);
    add(data: AddVoterDto): Promise<any>;
    update(data: UpdateVoterDto): Promise<any>;
    remove(id: number): Promise<any>;
    getOne(id: number): Promise<any>;
    getAll(): Promise<any>;
    getByEleicao(id: number): Promise<any>;
}

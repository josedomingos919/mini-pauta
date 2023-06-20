import { ElectionService } from './election.service';
import { AddElectionDto } from './dto/addElectionDto';
export declare class ElectionController {
    private electionService;
    constructor(electionService: ElectionService);
    add(data: AddElectionDto): Promise<any>;
    finish(id: number): Promise<any>;
    remove(id: number): Promise<any>;
    getAll(): Promise<any>;
}

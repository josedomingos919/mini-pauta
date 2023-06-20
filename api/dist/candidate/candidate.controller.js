"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateController = void 0;
const common_1 = require("@nestjs/common");
const candidate_service_1 = require("./candidate.service");
const addCandidateDto_1 = require("./dto/addCandidateDto");
const updateCandidateDto_1 = require("./dto/updateCandidateDto");
let CandidateController = class CandidateController {
    constructor(voterService) {
        this.voterService = voterService;
    }
    add(data) {
        return this.voterService.add(data);
    }
    update(data) {
        return this.voterService.update(data);
    }
    remove(id) {
        return this.voterService.remove(id);
    }
    getOne(id) {
        return this.voterService.getOne(id);
    }
    getAll() {
        return this.voterService.getAll();
    }
    getByEleicao(id) {
        return this.voterService.getByEleicao(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addCandidateDto_1.AddCandidateDto]),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "add", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateCandidateDto_1.UpdateCandidateDto]),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('eleicao/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CandidateController.prototype, "getByEleicao", null);
CandidateController = __decorate([
    (0, common_1.Controller)('candidate'),
    __metadata("design:paramtypes", [candidate_service_1.CandidateService])
], CandidateController);
exports.CandidateController = CandidateController;
//# sourceMappingURL=candidate.controller.js.map
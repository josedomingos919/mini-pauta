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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CandidateService = class CandidateService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(data) {
        const voter = await this.prisma.candidato.create({
            data,
        });
        await this.prisma.eleitor.create({
            data,
        });
        return voter;
    }
    async getByEleicao(id) {
        const response = await this.prisma.candidato.findMany({
            where: {
                eleicaoCandidato: {
                    some: {
                        eleicaoId: id
                    }
                }
            },
        });
        return response;
    }
    async update(data) {
        data.id = Number(data === null || data === void 0 ? void 0 : data.id);
        const voter = await this.prisma.candidato.update({
            where: {
                id: data.id,
            },
            data,
        });
        return voter;
    }
    async remove(id) {
        const response = await this.prisma.candidato.delete({
            where: { id },
        });
        return response;
    }
    async getOne(id) {
        const voter = await this.prisma.candidato.findUnique({
            where: {
                id,
            },
        });
        return voter;
    }
    async getAll() {
        const voters = await this.prisma.candidato.findMany();
        return voters;
    }
};
CandidateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CandidateService);
exports.CandidateService = CandidateService;
//# sourceMappingURL=candidate.service.js.map
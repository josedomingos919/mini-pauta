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
exports.ElectionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ElectionService = class ElectionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async finish(id) {
        const response = await this.prisma.eleicao.update({
            where: { id },
            data: {
                finshed: 1
            }
        });
        return response;
    }
    async add(data) {
        const eleicao = await this.prisma.eleicao.create({
            data: {
                tipo: data.tipo,
                finshed: data.finshed,
                candidatos: {
                    create: data.candidatos.map((e) => {
                        return {
                            candidatoId: Number(e.candidatoId),
                        };
                    }),
                },
                eleitores: {
                    create: data.eleitor.map((e) => {
                        return {
                            eleitorId: Number(e.eleitorId),
                        };
                    }),
                },
            },
        });
        return eleicao;
    }
    async getAll() {
        const eleicoes = await this.prisma.eleicao.findMany({});
        return eleicoes;
    }
    async remove(id) {
        const eleicao = await this.prisma.eleicao.delete({
            where: {
                id,
            },
        });
        return eleicao;
    }
};
ElectionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ElectionService);
exports.ElectionService = ElectionService;
//# sourceMappingURL=election.service.js.map
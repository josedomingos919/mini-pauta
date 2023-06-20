"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateModule = void 0;
const common_1 = require("@nestjs/common");
const candidate_service_1 = require("./candidate.service");
const candidate_controller_1 = require("./candidate.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let CandidateModule = class CandidateModule {
};
CandidateModule = __decorate([
    (0, common_1.Module)({
        controllers: [candidate_controller_1.CandidateController],
        providers: [candidate_service_1.CandidateService, prisma_service_1.PrismaService],
    })
], CandidateModule);
exports.CandidateModule = CandidateModule;
//# sourceMappingURL=candidate.module.js.map
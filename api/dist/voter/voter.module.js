"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoterModule = void 0;
const common_1 = require("@nestjs/common");
const voter_service_1 = require("./voter.service");
const voter_controller_1 = require("./voter.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let VoterModule = class VoterModule {
};
VoterModule = __decorate([
    (0, common_1.Module)({
        controllers: [voter_controller_1.VoterController],
        providers: [voter_service_1.VoterService, prisma_service_1.PrismaService],
    })
], VoterModule);
exports.VoterModule = VoterModule;
//# sourceMappingURL=voter.module.js.map
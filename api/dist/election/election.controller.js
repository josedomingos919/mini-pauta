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
exports.ElectionController = void 0;
const common_1 = require("@nestjs/common");
const election_service_1 = require("./election.service");
const addElectionDto_1 = require("./dto/addElectionDto");
let ElectionController = class ElectionController {
    constructor(electionService) {
        this.electionService = electionService;
    }
    add(data) {
        return this.electionService.add(data);
    }
    finish(id) {
        return this.electionService.finish(id);
    }
    remove(id) {
        return this.electionService.remove(id);
    }
    getAll() {
        return this.electionService.getAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addElectionDto_1.AddElectionDto]),
    __metadata("design:returntype", void 0)
], ElectionController.prototype, "add", null);
__decorate([
    (0, common_1.Post)('finish/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ElectionController.prototype, "finish", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ElectionController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ElectionController.prototype, "getAll", null);
ElectionController = __decorate([
    (0, common_1.Controller)('election'),
    __metadata("design:paramtypes", [election_service_1.ElectionService])
], ElectionController);
exports.ElectionController = ElectionController;
//# sourceMappingURL=election.controller.js.map
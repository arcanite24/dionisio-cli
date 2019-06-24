"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cosa_entity_1 = require("./cosa.entity");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var CosaService = /** @class */ (function () {
    function CosaService(repo) {
        this.repo = repo;
    }
    CosaService.prototype.findAll = function () {
        return this.repo.find();
    };
    CosaService.prototype.findOne = function (id) {
        return this.repo.findOne(id);
    };
    CosaService.prototype.find = function (query) {
        return this.repo.find(query);
    };
    CosaService.prototype.create = function (body) {
        var cosa = new cosa_entity_1.Cosa();
        cosa.text = body.text;
        return this.repo.save(cosa);
    };
    CosaService.prototype.delete = function (id) {
        return this.repo.delete(id);
    };
    CosaService.prototype.update = function (id, body) {
        return this.repo.update(id, body);
    };
    CosaService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(cosa_entity_1.Cosa))
    ], CosaService);
    return CosaService;
}());
exports.CosaService = CosaService;

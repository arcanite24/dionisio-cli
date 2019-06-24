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
var verdura_entity_1 = require("./verdura.entity");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var VerduraService = /** @class */ (function () {
    function VerduraService(repo) {
        this.repo = repo;
    }
    VerduraService.prototype.findAll = function () {
        return this.repo.find();
    };
    VerduraService.prototype.findOne = function (id) {
        return this.repo.findOne(id);
    };
    VerduraService.prototype.find = function (query) {
        return this.repo.find(query);
    };
    VerduraService.prototype.create = function (body) {
        var verdura = new verdura_entity_1.Verdura();
        verdura.text = body.text;
        return this.repo.save(verdura);
    };
    VerduraService.prototype.delete = function (id) {
        return this.repo.delete(id);
    };
    VerduraService.prototype.update = function (id, body) {
        return this.repo.update(id, body);
    };
    VerduraService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(verdura_entity_1.Verdura))
    ], VerduraService);
    return VerduraService;
}());
exports.VerduraService = VerduraService;

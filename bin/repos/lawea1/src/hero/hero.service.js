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
var hero_entity_1 = require("./hero.entity");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var HeroService = /** @class */ (function () {
    function HeroService(repo) {
        this.repo = repo;
    }
    HeroService.prototype.findAll = function () {
        return this.repo.find();
    };
    HeroService.prototype.findOne = function (id) {
        return this.repo.findOne(id);
    };
    HeroService.prototype.find = function (query) {
        return this.repo.find(query);
    };
    HeroService.prototype.create = function (body) {
        var hero = new hero_entity_1.Hero();
        // hero.text = body.text;
        hero.nombre = body.nombre;
        return this.repo.save(hero);
    };
    HeroService.prototype.delete = function (id) {
        return this.repo.delete(id);
    };
    HeroService.prototype.update = function (id, body) {
        return this.repo.update(id, body);
    };
    HeroService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(hero_entity_1.Hero))
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;

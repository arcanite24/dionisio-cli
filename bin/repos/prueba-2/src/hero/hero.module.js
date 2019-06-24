"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("@nestjs/typeorm");
var common_1 = require("@nestjs/common");
var hero_service_1 = require("./hero.service");
var hero_controller_1 = require("./hero.controller");
var hero_entity_1 = require("./hero.entity");
var HeroModule = /** @class */ (function () {
    function HeroModule() {
    }
    HeroModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([hero_entity_1.Hero])],
            providers: [hero_service_1.HeroService],
            controllers: [hero_controller_1.HeroController],
        })
    ], HeroModule);
    return HeroModule;
}());
exports.HeroModule = HeroModule;

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
var verdura_service_1 = require("./verdura.service");
var verdura_gateway_1 = require("./verdura.gateway");
var verdura_controller_1 = require("./verdura.controller");
var verdura_entity_1 = require("./verdura.entity");
var VerduraModule = /** @class */ (function () {
    function VerduraModule() {
    }
    VerduraModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([verdura_entity_1.Verdura])],
            providers: [
                verdura_service_1.VerduraService,
                verdura_gateway_1.VerduraGateway,
            ],
            controllers: [verdura_controller_1.VerduraController],
        })
    ], VerduraModule);
    return VerduraModule;
}());
exports.VerduraModule = VerduraModule;

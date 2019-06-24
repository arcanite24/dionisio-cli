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
var otraCosa_service_1 = require("./otraCosa.service");
var otraCosa_controller_1 = require("./otraCosa.controller");
var otraCosa_entity_1 = require("./otraCosa.entity");
var OtraCosaModule = /** @class */ (function () {
    function OtraCosaModule() {
    }
    OtraCosaModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([otraCosa_entity_1.OtraCosa])],
            providers: [otraCosa_service_1.OtraCosaService],
            controllers: [otraCosa_controller_1.OtraCosaController],
        })
    ], OtraCosaModule);
    return OtraCosaModule;
}());
exports.OtraCosaModule = OtraCosaModule;

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
var common_1 = require("@nestjs/common");
var OtraCosaController = /** @class */ (function () {
    function OtraCosaController(otraCosas) {
        this.otraCosas = otraCosas;
    }
    OtraCosaController.prototype.findAll = function () {
        return this.otraCosas.findAll();
    };
    OtraCosaController.prototype.findOne = function (id) {
        return this.otraCosas.findOne(id);
    };
    OtraCosaController.prototype.find = function (query) {
        return this.otraCosas.find(query);
    };
    OtraCosaController.prototype.create = function (body) {
        return this.otraCosas.create(body);
    };
    OtraCosaController.prototype.delete = function (id) {
        return this.otraCosas.delete(id);
    };
    OtraCosaController.prototype.update = function (id, body) {
        return this.otraCosas.update(id, body);
    };
    __decorate([
        common_1.Get()
    ], OtraCosaController.prototype, "findAll", null);
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], OtraCosaController.prototype, "findOne", null);
    __decorate([
        common_1.Post('query'),
        __param(0, common_1.Body())
    ], OtraCosaController.prototype, "find", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], OtraCosaController.prototype, "create", null);
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], OtraCosaController.prototype, "delete", null);
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], OtraCosaController.prototype, "update", null);
    OtraCosaController = __decorate([
        common_1.Controller('otraCosa')
    ], OtraCosaController);
    return OtraCosaController;
}());
exports.OtraCosaController = OtraCosaController;

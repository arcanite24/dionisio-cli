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
var CosaController = /** @class */ (function () {
    function CosaController(cosas) {
        this.cosas = cosas;
    }
    CosaController.prototype.findAll = function () {
        return this.cosas.findAll();
    };
    CosaController.prototype.findOne = function (id) {
        return this.cosas.findOne(id);
    };
    CosaController.prototype.find = function (query) {
        return this.cosas.find(query);
    };
    CosaController.prototype.create = function (body) {
        return this.cosas.create(body);
    };
    CosaController.prototype.delete = function (id) {
        return this.cosas.delete(id);
    };
    CosaController.prototype.update = function (id, body) {
        return this.cosas.update(id, body);
    };
    __decorate([
        common_1.Get()
    ], CosaController.prototype, "findAll", null);
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], CosaController.prototype, "findOne", null);
    __decorate([
        common_1.Post('query'),
        __param(0, common_1.Body())
    ], CosaController.prototype, "find", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], CosaController.prototype, "create", null);
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], CosaController.prototype, "delete", null);
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], CosaController.prototype, "update", null);
    CosaController = __decorate([
        common_1.Controller('cosa')
    ], CosaController);
    return CosaController;
}());
exports.CosaController = CosaController;

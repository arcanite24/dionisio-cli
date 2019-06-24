"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Todo = /** @class */ (function () {
    function Todo() {
        this.likes = 0;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Todo.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column()
    ], Todo.prototype, "text", void 0);
    __decorate([
        typeorm_1.Column()
    ], Todo.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column()
    ], Todo.prototype, "likes", void 0);
    Todo = __decorate([
        typeorm_1.Entity()
    ], Todo);
    return Todo;
}());
exports.Todo = Todo;

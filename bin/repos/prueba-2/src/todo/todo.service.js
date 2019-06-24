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
var todo_entity_1 = require("./todo.entity");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var TodoService = /** @class */ (function () {
    function TodoService(repo) {
        this.repo = repo;
    }
    TodoService.prototype.findAll = function () {
        return this.repo.find();
    };
    TodoService.prototype.findOne = function (id) {
        return this.repo.findOne(id);
    };
    TodoService.prototype.find = function (query) {
        return this.repo.find(query);
    };
    TodoService.prototype.create = function (body) {
        var todo = new todo_entity_1.Todo();
        todo.text = body.text;
        todo.type = body.type;
        return this.repo.save(todo);
    };
    TodoService.prototype.delete = function (id) {
        return this.repo.delete(id);
    };
    TodoService.prototype.update = function (id, body) {
        return this.repo.update(id, body);
    };
    TodoService.prototype.modifiyValue = function (id, field, delta) {
        return Math.sign(delta) > 0 ? this.repo.increment({ id: id }, field, delta) : this.repo.decrement({ id: id }, field, -delta);
    };
    TodoService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(todo_entity_1.Todo))
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var typeorm_1 = require("@nestjs/typeorm");
// dionisio.modules
var verdura_module_1 = require("./verdura/verdura.module");
var hero_module_1 = require("./hero/hero.module");
var otraCosa_module_1 = require("./otraCosa/otraCosa.module");
var cosa_module_1 = require("./cosa/cosa.module");
var todo_module_1 = require("./todo/todo.module");
// dionisio.entities
var verdura_entity_1 = require("./verdura/verdura.entity");
var hero_entity_1 = require("./hero/hero.entity");
var otraCosa_entity_1 = require("./otraCosa/otraCosa.entity");
var cosa_entity_1 = require("./cosa/cosa.entity");
var todo_entity_1 = require("./todo/todo.entity");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: '1234',
                    database: 'dionisio',
                    entities: [
                        // dionisio.orm
                        verdura_entity_1.Verdura,
                        hero_entity_1.Hero,
                        otraCosa_entity_1.OtraCosa,
                        cosa_entity_1.Cosa,
                        todo_entity_1.Todo,
                    ],
                    synchronize: true,
                }),
                // dionisio.imports
                verdura_module_1.VerduraModule,
                hero_module_1.HeroModule,
                otraCosa_module_1.OtraCosaModule,
                cosa_module_1.CosaModule,
                todo_module_1.TodoModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

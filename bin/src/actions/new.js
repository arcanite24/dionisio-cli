"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var fs_1 = __importDefault(require("fs"));
var ora_1 = __importDefault(require("ora"));
var util_1 = require("util");
var config_1 = require("../config");
var logger_1 = __importDefault(require("../logger"));
var execPromise = util_1.promisify(child_process_1.exec);
// TODO: Replace library or write types
var clone = require("git-clone");
var Confirm = require("enquirer").Confirm;
function newProject(name) {
    var _this = this;
    if (!name) {
        return logger_1.default.error('Project path is required...');
    }
    var projectPath = process.cwd() + "/" + name;
    logger_1.default.debug("Trying to clone project to: " + projectPath);
    // Check if directory already exists
    // TODO: Find a better way to join the paths
    // TODO: Format and sanitize the project name
    if (fs_1.default.existsSync(projectPath)) {
        return logger_1.default.error('Directory already exists');
    }
    try {
        var spinner_1 = ora_1.default('Cloning project');
        spinner_1.color = 'cyan';
        spinner_1.start();
        clone(config_1.TEMPLATE_GIT, projectPath, null, function (err) { return __awaiter(_this, void 0, void 0, function () {
            var installModules, installSpinner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        spinner_1.stop();
                        if (!err) return [3 /*break*/, 1];
                        logger_1.default.error(err.message);
                        return [3 /*break*/, 5];
                    case 1:
                        logger_1.default.success('Project succesfully cloned');
                        return [4 /*yield*/, new Confirm({
                                message: 'Do you want to install npm modules?',
                                name: 'install',
                            }).run()];
                    case 2:
                        installModules = _a.sent();
                        if (!installModules) return [3 /*break*/, 5];
                        installSpinner = ora_1.default("Running npm install");
                        installSpinner.color = "cyan";
                        installSpinner.start();
                        return [4 /*yield*/, execPromise("cd " + projectPath)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, execPromise('npm install')];
                    case 4:
                        _a.sent();
                        installSpinner.stop();
                        logger_1.default.success('node_modules installed');
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    }
    catch (error) {
        logger_1.default.error("Something unexpected happened... :(");
    }
}
exports.newProject = newProject;

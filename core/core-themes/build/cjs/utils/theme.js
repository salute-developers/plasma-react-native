"use strict";
// INFO: Файл частично скопирован из репозитория plasma/website/plasma-theme-builder
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.readTheme = void 0;
var jszip_1 = __importDefault(require("jszip"));
var deserializeZip = function (content) { return __awaiter(void 0, void 0, void 0, function () {
    var buf;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                buf = Buffer.from(content, 'base64');
                return [4 /*yield*/, jszip_1.default.loadAsync(buf)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var getAllRelativePath = function (zip) { return __awaiter(void 0, void 0, void 0, function () {
    var allFiles;
    return __generator(this, function (_a) {
        allFiles = [];
        zip.forEach(function (relativePath) {
            allFiles.push(relativePath);
        });
        return [2 /*return*/, allFiles];
    });
}); };
var getThemeContent = function (zip, allFiles) { return __awaiter(void 0, void 0, void 0, function () {
    var meta, variations, _i, allFiles_1, relativePath, data, res, _a, platform, variant;
    var _b;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                meta = {};
                variations = {};
                _i = 0, allFiles_1 = allFiles;
                _d.label = 1;
            case 1:
                if (!(_i < allFiles_1.length)) return [3 /*break*/, 4];
                relativePath = allFiles_1[_i];
                return [4 /*yield*/, ((_c = zip.file(relativePath)) === null || _c === void 0 ? void 0 : _c.async('string'))];
            case 2:
                data = _d.sent();
                if (!data) {
                    return [3 /*break*/, 3];
                }
                res = JSON.parse(data);
                _a = relativePath.match(/\/(.*)_(.*)\.json/im) || [], platform = _a[1], variant = _a[2];
                if (!platform || !variant) {
                    meta = res;
                    return [3 /*break*/, 3];
                }
                if (platform !== 'reactNative') {
                    return [3 /*break*/, 3];
                }
                variations = __assign(__assign({}, variations), (_b = {}, _b[variant] = __assign(__assign({}, variations[variant]), res), _b));
                _d.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/, { meta: meta, variations: variations }];
        }
    });
}); };
var getFileSource = function (owner, repo, path, branchName) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://api.github.com/repos/" + owner + "/" + repo + "/contents/" + path + "?ref=" + branchName, {
                    headers: {
                        accept: 'application/vnd.github.v3.full',
                    },
                    method: 'GET',
                })];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, result.json()];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var readTheme = function (themeName, themeVersion) { return __awaiter(void 0, void 0, void 0, function () {
    var response, zip, allFiles;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getFileSource('salute-developers', 'theme-converter', "themes/" + themeName + "/" + themeVersion + ".zip", 'main')];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, deserializeZip(response.content)];
            case 2:
                zip = _a.sent();
                return [4 /*yield*/, getAllRelativePath(zip)];
            case 3:
                allFiles = _a.sent();
                return [4 /*yield*/, getThemeContent(zip, allFiles)];
            case 4: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.readTheme = readTheme;
//# sourceMappingURL=theme.js.map
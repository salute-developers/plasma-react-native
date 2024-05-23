"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShapeTokens = void 0;
var utils_1 = require("../utils");
var getShape = function (shape, tokens, kind) {
    return tokens
        .filter(function (token) { return token.tags[0] === kind; })
        .map(function (token) {
        var _a = token.name.split('.'), rest = _a.slice(1);
        var value = shape[token.name];
        var tokenName = utils_1.kebabToCamel(rest.join('-'));
        return "/** " + token.description + " */\n        " + tokenName + ": " + JSON.stringify(value.cornerRadius) + ",";
    })
        .join('\n        ');
};
var getContent = function (roundShape) { return "export const shape = {\n    round: {\n        " + roundShape + "\n    },\n};\n"; };
var createShapeTokens = function (themeDir, shape, tokens) {
    if (!(tokens === null || tokens === void 0 ? void 0 : tokens.length)) {
        return;
    }
    var roundShape = getShape(shape, tokens, 'round');
    var content = getContent(roundShape);
    utils_1.writeTokens(content, themeDir, 'shape.ts');
};
exports.createShapeTokens = createShapeTokens;
//# sourceMappingURL=createShapeTokens.js.map
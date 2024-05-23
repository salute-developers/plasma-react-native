"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGradientTokens = void 0;
var utils_1 = require("../utils");
var getGradient = function (gradient, tokens, mode) {
    return tokens
        .filter(function (token) { return token.tags[0] === mode; })
        .map(function (token) {
        var _a = token.name.split('.'), category = _a[1], subcategory = _a[2], name = _a[3];
        var value = gradient[token.name];
        var tokenName = utils_1.kebabToCamel([subcategory === 'default' ? '' : subcategory, category, name].join('-'));
        return "/** " + token.description + " */\n        " + tokenName + ": " + JSON.stringify(value) + ",";
    })
        .join('\n        ');
};
var getContent = function (darkGradient, lightGradient) { return "export const gradient = {\n    dark: {\n        " + darkGradient + "\n    },\n    light: {\n        " + lightGradient + "\n    },\n};\n"; };
var createGradientTokens = function (themeDir, gradient, tokens) {
    if (!(tokens === null || tokens === void 0 ? void 0 : tokens.length)) {
        return;
    }
    var darkGradient = getGradient(gradient, tokens, 'dark');
    var lightGradient = getGradient(gradient, tokens, 'light');
    var content = getContent(darkGradient, lightGradient);
    utils_1.writeTokens(content, themeDir, 'gradient.ts');
};
exports.createGradientTokens = createGradientTokens;
//# sourceMappingURL=createGradientTokens.js.map
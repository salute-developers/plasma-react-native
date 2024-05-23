"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFontFamilyTokens = void 0;
var utils_1 = require("../utils");
var getFontFamily = function (fontFamily, tokens, kind) {
    return tokens
        .filter(function (token) { return token.tags[0] === kind; })
        .map(function (token) {
        var rest = token.name.split('.');
        var value = fontFamily[token.name];
        var tokenName = utils_1.kebabToCamel(rest.join('-'));
        return "/** " + token.description + " */\n        " + tokenName + ": " + JSON.stringify(value) + ",";
    })
        .join('\n        ');
};
var getContent = function (displayFontFamily, headerFontFamily, textFontFamily, bodyFontFamily) { return "export const fontFamily = {\n    " + displayFontFamily + "\n    " + headerFontFamily + "\n    " + textFontFamily + "\n    " + bodyFontFamily + "\n};\n"; };
var createFontFamilyTokens = function (themeDir, fontFamily, tokens) {
    if (!(tokens === null || tokens === void 0 ? void 0 : tokens.length)) {
        return;
    }
    var displayFontFamily = getFontFamily(fontFamily, tokens, 'display');
    var headerFontFamily = getFontFamily(fontFamily, tokens, 'header');
    var textFontFamily = getFontFamily(fontFamily, tokens, 'text');
    var bodyFontFamily = getFontFamily(fontFamily, tokens, 'body');
    var content = getContent(displayFontFamily, headerFontFamily, textFontFamily, bodyFontFamily);
    utils_1.writeTokens(content, themeDir, 'fontFamily.ts');
};
exports.createFontFamilyTokens = createFontFamilyTokens;
//# sourceMappingURL=createFontFamilyTokens.js.map
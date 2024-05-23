"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypographyTokens = void 0;
var utils_1 = require("../utils");
var getTypography = function (typography, fontFamily, tokens, size) {
    return tokens
        .filter(function (token) { return token.tags[0] === size; })
        .map(function (token) {
        var _a = token.name.split('.'), rest = _a.slice(1);
        var value = typography[token.name];
        var _b = value.fontFamilyRef.split('.'), fontFamilyKind = _b[1];
        delete value.fontFamilyRef;
        var newValue = __assign({ fontFamily: fontFamily[fontFamilyKind].name }, value);
        var tokenName = utils_1.kebabToCamel(rest.join('-'));
        return "/** " + token.description + " */\n        " + tokenName + ": " + JSON.stringify(newValue) + ",";
    })
        .join('\n        ');
};
var getContent = function (screenSTypography, screenMTypography, screenLTypography) { return "export const typography = {\n    screenS: {\n        " + screenSTypography + "\n    },\n    screenM: {\n        " + screenMTypography + "\n    },\n    screenL: {\n        " + screenLTypography + "\n    },\n};\n"; };
var createTypographyTokens = function (themeDir, typography, fontFamily, tokens) {
    if (!(tokens === null || tokens === void 0 ? void 0 : tokens.length)) {
        return;
    }
    var screenSTypography = getTypography(typography, fontFamily, tokens, 'screen-s');
    var screenMTypography = getTypography(typography, fontFamily, tokens, 'screen-m');
    var screenLTypography = getTypography(typography, fontFamily, tokens, 'screen-l');
    var content = getContent(screenSTypography, screenMTypography, screenLTypography);
    utils_1.writeTokens(content, themeDir, 'typography.ts');
};
exports.createTypographyTokens = createTypographyTokens;
//# sourceMappingURL=createTypographyTokens.js.map
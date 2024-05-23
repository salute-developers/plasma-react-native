import { kebabToCamel, writeTokens } from '../utils';
var getShadow = function (shadow, tokens, direction) {
    return tokens
        .filter(function (token) { return token.tags[0] === direction; })
        .map(function (token) {
        var _a = token.name.split('.'), rest = _a.slice(1);
        var value = shadow[token.name];
        var tokenName = kebabToCamel(rest.join('-'));
        return "/** " + token.description + " */\n        " + tokenName + ": " + JSON.stringify(value) + ",";
    })
        .join('\n        ');
};
var getContent = function (downShadow, upShadow) { return "export const shadow = {\n    down: {\n        " + downShadow + "\n    },\n    up: {\n        " + upShadow + "\n    },\n};\n"; };
export var createShadowTokens = function (themeDir, shadow, tokens) {
    if (!(tokens === null || tokens === void 0 ? void 0 : tokens.length)) {
        return;
    }
    var downShadow = getShadow(shadow, tokens, 'down');
    var upShadow = getShadow(shadow, tokens, 'up');
    var content = getContent(downShadow, upShadow);
    writeTokens(content, themeDir, 'shadow.ts');
};
//# sourceMappingURL=createShadowTokens.js.map
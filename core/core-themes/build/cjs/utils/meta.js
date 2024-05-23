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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMetaGrouped = void 0;
var getMetaGrouped = function (meta) {
    var metaWithEnabledTokens = __assign(__assign({}, meta), { tokens: meta.tokens.filter(function (token) { return token.enabled; }) });
    var metaGrouped = metaWithEnabledTokens.tokens.reduce(function (acc, token) {
        var _a;
        return __assign(__assign({}, acc), (_a = {}, _a[token.type] = __spreadArray(__spreadArray([], (acc[token.type] || [])), [token]), _a));
    }, {});
    return metaGrouped;
};
exports.getMetaGrouped = getMetaGrouped;
//# sourceMappingURL=meta.js.map
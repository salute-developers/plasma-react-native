import { Theme } from '@salutejs-native/core-components';

import { PlasmaB2CTheme } from '../ThemeProvider';

export const getConfig = ({ data, screenSize }: Theme<PlasmaB2CTheme>) => ({
    defaults: {
        size: 'bodyM',
    },
    variations: {
        size: {
            bodyL: {
                lineHeight: data.typography[screenSize].bodyLNormal.lineHeight,
                visibleLineHeight: data.typography[screenSize].bodyLNormal.fontSize,
            },
            bodyM: {
                lineHeight: data.typography[screenSize].bodyMNormal.lineHeight,
                visibleLineHeight: data.typography[screenSize].bodyMNormal.fontSize,
            },
            bodyS: {
                lineHeight: data.typography[screenSize].bodySNormal.lineHeight,
                visibleLineHeight: data.typography[screenSize].bodySNormal.fontSize,
            },
            bodyXS: {
                lineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
                visibleLineHeight: data.typography[screenSize].bodyXsNormal.fontSize,
            },
            bodyXXS: {
                lineHeight: data.typography[screenSize].bodyXxsNormal.lineHeight,
                visibleLineHeight: data.typography[screenSize].bodyXxsNormal.fontSize,
            },
            displayL: {
                lineHeight: data.typography[screenSize].displayLNormal.lineHeight,
                visibleLineHeight: data.typography[screenSize].displayLNormal.fontSize,
            },
            displayM: {
                lineHeight: data.typography[screenSize].displayMNormal.lineHeight,
                visibleLineHeight: data.typography[screenSize].displayMNormal.fontSize,
            },
            displayS: {
                lineHeight: data.typography[screenSize].displaySNormal.lineHeight,
                visibleLineHeight: data.typography[screenSize].displaySNormal.fontSize,
            },
            h1: {
                lineHeight: data.typography[screenSize].headerH1Normal.lineHeight,
                visibleLineHeight: data.typography[screenSize].headerH1Normal.fontSize,
            },
            h2: {
                lineHeight: data.typography[screenSize].headerH2Normal.lineHeight,
                visibleLineHeight: data.typography[screenSize].headerH2Normal.fontSize,
            },
            h3: {
                lineHeight: data.typography[screenSize].headerH3Normal.lineHeight,
                visibleLineHeight: data.typography[screenSize].headerH3Normal.fontSize,
            },
            h4: {
                lineHeight: data.typography[screenSize].headerH4Normal.lineHeight,
                visibleLineHeight: data.typography[screenSize].headerH4Normal.fontSize,
            },
            h5: {
                lineHeight: data.typography[screenSize].headerH5Normal.lineHeight,
                visibleLineHeight: data.typography[screenSize].headerH5Normal.fontSize,
            },
            textL: {
                lineHeight: data.typography[screenSize].textLNormal.lineHeight,
                visibleLineHeight: data.typography[screenSize].textLNormal.fontSize,
            },
            textM: {
                lineHeight: data.typography[screenSize].textMNormal.lineHeight,
                visibleLineHeight: data.typography[screenSize].textMNormal.fontSize,
            },
            textS: {
                lineHeight: data.typography[screenSize].textSNormal.lineHeight,
                visibleLineHeight: data.typography[screenSize].textSNormal.fontSize,
            },
            textXS: {
                lineHeight: data.typography[screenSize].textXsNormal.lineHeight,
                visibleLineHeight: data.typography[screenSize].textXsNormal.fontSize,
            },
        },
    },
});

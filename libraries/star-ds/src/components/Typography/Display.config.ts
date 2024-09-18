import { Theme } from '@salutejs/core-components';

import { StylesSaluteTheme } from '../ThemeProvider';

export const getConfigDisplayL = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
            },
        },
        size: {
            l: {
                fontFamilyRef: data.typography[screenSize].displayLNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].displayLNormal.fontWeight,
                fontWeightBold: data.typography[screenSize].displayLBold.fontWeight,
                fontStyle: data.typography[screenSize].displayLNormal.fontStyle,
                fontSize: data.typography[screenSize].displayLNormal.fontSize,
                letterSpacing: data.typography[screenSize].displayLNormal.letterSpacing,
                lineHeight: data.typography[screenSize].displayLNormal.lineHeight,
            },
        },
    },
});

export const getConfigDisplayM = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
            },
        },
        size: {
            m: {
                fontFamilyRef: data.typography[screenSize].displayMNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].displayMNormal.fontWeight,
                fontWeightBold: data.typography[screenSize].displayMBold.fontWeight,
                fontStyle: data.typography[screenSize].displayMNormal.fontStyle,
                fontSize: data.typography[screenSize].displayMNormal.fontSize,
                letterSpacing: data.typography[screenSize].displayMNormal.letterSpacing,
                lineHeight: data.typography[screenSize].displayMNormal.lineHeight,
            },
        },
    },
});

export const getConfigDisplayS = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
            },
        },
        size: {
            s: {
                fontFamilyRef: data.typography[screenSize].displaySNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].displaySNormal.fontWeight,
                fontWeightBold: data.typography[screenSize].displaySBold.fontWeight,
                fontStyle: data.typography[screenSize].displaySNormal.fontStyle,
                fontSize: data.typography[screenSize].displaySNormal.fontSize,
                letterSpacing: data.typography[screenSize].displaySNormal.letterSpacing,
                lineHeight: data.typography[screenSize].displaySNormal.lineHeight,
            },
        },
    },
});

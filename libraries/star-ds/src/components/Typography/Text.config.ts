import { Theme } from '@salutejs/core-components';

import { StylesSaluteTheme } from '../ThemeProvider';

export const getConfigTextL = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
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
                fontFamilyRef: data.typography[screenSize].textLNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].textLNormal.fontWeight,
                fontWeightBold: data.typography[screenSize].textLBold.fontWeight,
                fontStyle: data.typography[screenSize].textLNormal.fontStyle,
                fontSize: data.typography[screenSize].textLNormal.fontSize,
                letterSpacing: data.typography[screenSize].textLNormal.letterSpacing,
                lineHeight: data.typography[screenSize].textLNormal.lineHeight,
            },
        },
    },
});

export const getConfigTextM = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
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
                fontFamilyRef: data.typography[screenSize].textMNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].textMNormal.fontWeight,
                fontWeightBold: data.typography[screenSize].textMBold.fontWeight,
                fontStyle: data.typography[screenSize].textMNormal.fontStyle,
                fontSize: data.typography[screenSize].textMNormal.fontSize,
                letterSpacing: data.typography[screenSize].textMNormal.letterSpacing,
                lineHeight: data.typography[screenSize].textMNormal.lineHeight,
            },
        },
    },
});

export const getConfigTextS = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
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
                fontFamilyRef: data.typography[screenSize].textSNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].textSNormal.fontWeight,
                fontWeightBold: data.typography[screenSize].textSBold.fontWeight,
                fontStyle: data.typography[screenSize].textSNormal.fontStyle,
                fontSize: data.typography[screenSize].textSNormal.fontSize,
                letterSpacing: data.typography[screenSize].textSNormal.letterSpacing,
                lineHeight: data.typography[screenSize].textSNormal.lineHeight,
            },
        },
    },
});

export const getConfigTextXS = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
    defaults: {
        view: 'default',
        size: 'xs',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
            },
        },
        size: {
            xs: {
                fontFamilyRef: data.typography[screenSize].textXsNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].textXsNormal.fontWeight,
                fontWeightBold: data.typography[screenSize].textXsBold.fontWeight,
                fontStyle: data.typography[screenSize].textXsNormal.fontStyle,
                fontSize: data.typography[screenSize].textXsNormal.fontSize,
                letterSpacing: data.typography[screenSize].textXsNormal.letterSpacing,
                lineHeight: data.typography[screenSize].textXsNormal.lineHeight,
            },
        },
    },
});

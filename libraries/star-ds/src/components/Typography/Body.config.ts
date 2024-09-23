import { Theme } from '@salutejs/core-components';

import { StylesSaluteTheme } from '../ThemeProvider';

export const getConfigBodyL = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
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
                fontFamilyRef: data.typography[screenSize].bodyLNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodyLNormal.fontWeight,
                fontWeightBold: data.typography[screenSize].bodyLBold.fontWeight,
                fontStyle: data.typography[screenSize].bodyLNormal.fontStyle,
                fontSize: data.typography[screenSize].bodyLNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodyLNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodyLNormal.lineHeight,
            },
        },
        focused: {
            true: {
                color: data.color[mode].onLightTextPrimary,
            },
        },
    },
});

export const getConfigBodyM = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
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
                fontFamilyRef: data.typography[screenSize].bodyMNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodyMNormal.fontWeight,
                fontWeightBold: data.typography[screenSize].bodyMBold.fontWeight,
                fontStyle: data.typography[screenSize].bodyMNormal.fontStyle,
                fontSize: data.typography[screenSize].bodyMNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodyMNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodyMNormal.lineHeight,
            },
        },
        focused: {
            true: {
                color: data.color[mode].onLightTextPrimary,
            },
        },
    },
});

export const getConfigBodyS = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
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
                fontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodySNormal.fontWeight,
                fontWeightBold: data.typography[screenSize].bodySBold.fontWeight,
                fontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                fontSize: data.typography[screenSize].bodySNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodySNormal.lineHeight,
            },
        },
        focused: {
            true: {
                color: data.color[mode].onLightTextPrimary,
            },
        },
    },
});

export const getConfigBodyXS = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
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
                fontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                fontWeightBold: data.typography[screenSize].bodyXsBold.fontWeight,
                fontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                fontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
        },
        focused: {
            true: {
                color: data.color[mode].onLightTextPrimary,
            },
        },
    },
});

export const getConfigBodyXXS = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
    defaults: {
        view: 'default',
        size: 'xxs',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
            },
        },
        size: {
            xxs: {
                fontFamilyRef: data.typography[screenSize].bodyXxsNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodyXxsNormal.fontWeight,
                fontWeightBold: data.typography[screenSize].bodyXxsBold.fontWeight,
                fontStyle: data.typography[screenSize].bodyXxsNormal.fontStyle,
                fontSize: data.typography[screenSize].bodyXxsNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodyXxsNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodyXxsNormal.lineHeight,
            },
        },
        focused: {
            true: {
                color: data.color[mode].onLightTextPrimary,
            },
        },
    },
});

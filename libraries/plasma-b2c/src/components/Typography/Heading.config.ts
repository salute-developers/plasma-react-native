import { Theme } from '@salutejs-native/core-components';

import { PlasmaB2CTheme } from '../ThemeProvider';

export const getConfigH1 = ({ data, mode, screenSize }: Theme<PlasmaB2CTheme>) => ({
    defaults: {
        view: 'default',
        size: 'h1',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
            },
        },
        size: {
            h1: {
                fontFamilyRef: data.typography[screenSize].headerH1Normal.fontFamilyRef,
                fontWeight: data.typography[screenSize].headerH1Normal.fontWeight,
                fontWeightBold: data.typography[screenSize].headerH1Bold.fontWeight,
                fontStyle: data.typography[screenSize].headerH1Normal.fontStyle,
                fontSize: data.typography[screenSize].headerH1Normal.fontSize,
                letterSpacing: data.typography[screenSize].headerH1Normal.letterSpacing,
                lineHeight: data.typography[screenSize].headerH1Normal.lineHeight,
            },
        },
    },
});

export const getConfigH2 = ({ data, mode, screenSize }: Theme<PlasmaB2CTheme>) => ({
    defaults: {
        view: 'default',
        size: 'h2',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
            },
        },
        size: {
            h2: {
                fontFamilyRef: data.typography[screenSize].headerH2Normal.fontFamilyRef,
                fontWeight: data.typography[screenSize].headerH2Normal.fontWeight,
                fontWeightBold: data.typography[screenSize].headerH2Bold.fontWeight,
                fontStyle: data.typography[screenSize].headerH2Normal.fontStyle,
                fontSize: data.typography[screenSize].headerH2Normal.fontSize,
                letterSpacing: data.typography[screenSize].headerH2Normal.letterSpacing,
                lineHeight: data.typography[screenSize].headerH2Normal.lineHeight,
            },
        },
    },
});

export const getConfigH3 = ({ data, mode, screenSize }: Theme<PlasmaB2CTheme>) => ({
    defaults: {
        view: 'default',
        size: 'h3',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
            },
        },
        size: {
            h3: {
                fontFamilyRef: data.typography[screenSize].headerH3Normal.fontFamilyRef,
                fontWeight: data.typography[screenSize].headerH3Normal.fontWeight,
                fontWeightBold: data.typography[screenSize].headerH3Bold.fontWeight,
                fontStyle: data.typography[screenSize].headerH3Normal.fontStyle,
                fontSize: data.typography[screenSize].headerH3Normal.fontSize,
                letterSpacing: data.typography[screenSize].headerH3Normal.letterSpacing,
                lineHeight: data.typography[screenSize].headerH3Normal.lineHeight,
            },
        },
    },
});

export const getConfigH4 = ({ data, mode, screenSize }: Theme<PlasmaB2CTheme>) => ({
    defaults: {
        view: 'default',
        size: 'h4',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
            },
        },
        size: {
            h4: {
                fontFamilyRef: data.typography[screenSize].headerH4Normal.fontFamilyRef,
                fontWeight: data.typography[screenSize].headerH4Normal.fontWeight,
                fontWeightBold: data.typography[screenSize].headerH4Bold.fontWeight,
                fontStyle: data.typography[screenSize].headerH4Normal.fontStyle,
                fontSize: data.typography[screenSize].headerH4Normal.fontSize,
                letterSpacing: data.typography[screenSize].headerH4Normal.letterSpacing,
                lineHeight: data.typography[screenSize].headerH4Normal.lineHeight,
            },
        },
    },
});

export const getConfigH5 = ({ data, mode, screenSize }: Theme<PlasmaB2CTheme>) => ({
    defaults: {
        view: 'default',
        size: 'h5',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
            },
        },
        size: {
            h5: {
                fontFamilyRef: data.typography[screenSize].headerH5Normal.fontFamilyRef,
                fontWeight: data.typography[screenSize].headerH5Normal.fontWeight,
                fontWeightBold: data.typography[screenSize].headerH5Bold.fontWeight,
                fontStyle: data.typography[screenSize].headerH5Normal.fontStyle,
                fontSize: data.typography[screenSize].headerH5Normal.fontSize,
                letterSpacing: data.typography[screenSize].headerH5Normal.letterSpacing,
                lineHeight: data.typography[screenSize].headerH5Normal.lineHeight,
            },
        },
    },
});

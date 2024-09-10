import { Theme } from '@salutejs/core-components';

import { PlasmaB2CTheme } from '../ThemeProvider';

export const getConfig = ({ data, mode }: Theme<PlasmaB2CTheme>) => ({
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
            },
            secondary: {
                color: data.color[mode].textSecondary,
            },
            tertiary: {
                color: data.color[mode].textTertiary,
            },
            paragraph: {
                color: data.color[mode].textParagraph,
            },
            accent: {
                color: data.color[mode].textAccent,
            },
            positive: {
                color: data.color[mode].textPositive,
            },
            warning: {
                color: data.color[mode].textWarning,
            },
            negative: {
                color: data.color[mode].textNegative,
            },
        },
        size: {
            l: {
                size: 36,
            },
            m: {
                size: 24,
            },
            s: {
                size: 16,
            },
        },
    },
});

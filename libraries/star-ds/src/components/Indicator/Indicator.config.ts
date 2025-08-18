import { Theme } from '@salutejs/core-components';

import { StylesSaluteTheme } from '../ThemeProvider';

export const getConfig = ({ data, mode }: Theme<StylesSaluteTheme>) => ({
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
            },
            accent: {
                color: data.color[mode].textAccentMain,
            },
            inactive: {
                color: data.color[mode].surfaceSolidTertiary,
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
                size: 12,
            },
            m: {
                size: 8,
            },
            s: {
                size: 6,
            },
        },
    },
});

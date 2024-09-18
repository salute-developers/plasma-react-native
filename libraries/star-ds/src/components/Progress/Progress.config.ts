import { Theme } from '@salutejs/core-components';

import { StylesSaluteTheme } from '../ThemeProvider';

// TODO: Забрать значение из data.gradient[mode].surfaceAccentGradient, когда появятся значения
const gradient = [
    {
        kind: 'linear',
        locations: [0, 1],
        colors: ['#3E79F0', '#27C6E5'],
        angle: 93.97,
    },
    {
        kind: 'linear',
        locations: [0, 1],
        colors: ['#5E94FF', '#43DBFA'],
        angle: 89.83,
    },
] as const;

export const getConfig = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        view: {
            default: {
                trackBackgroundColor: data.color[mode].surfaceTransparentSecondary,
                progressFilledBackgroundColor: data.color[mode].surfaceSolidDefault,
                valueColor: data.color[mode].textTertiary,
            },
            accent: {
                trackBackgroundColor: data.color[mode].surfaceTransparentSecondary,
                progressFilledBackgroundColor: data.color[mode].surfaceAccentMain,
                valueColor: data.color[mode].textTertiary,
            },
            'accent-gradient': {
                trackBackgroundColor: data.color[mode].surfaceTransparentSecondary,
                progressFilledBackgroundColor: gradient,
                valueColor: data.color[mode].textTertiary,
            },
            positive: {
                trackBackgroundColor: data.color[mode].surfaceTransparentSecondary,
                progressFilledBackgroundColor: data.color[mode].surfacePositive,
                valueColor: data.color[mode].textTertiary,
            },
            warning: {
                trackBackgroundColor: data.color[mode].surfaceTransparentSecondary,
                progressFilledBackgroundColor: data.color[mode].surfaceWarning,
                valueColor: data.color[mode].textTertiary,
            },
            negative: {
                trackBackgroundColor: data.color[mode].surfaceTransparentSecondary,
                progressFilledBackgroundColor: data.color[mode].surfaceNegative,
                valueColor: data.color[mode].textTertiary,
            },
        },
        size: {
            m: {
                trackHeight: 4,
                trackBorderRadius: data.shape.round.xxs - 2, // TODO: Узнать почему нет этих значений в теме
                progressFilledHeight: 6,
                progressFilledBorderRadius: data.shape.round.xxs, // INFO: В вебе 6
                valueMarginLeft: 8,
                fontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                fontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                fontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                fontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                letterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                lineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
        },
    },
});

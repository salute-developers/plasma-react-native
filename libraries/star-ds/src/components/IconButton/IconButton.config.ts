import { Theme } from '@salutejs/core-components';

import { StylesSaluteTheme } from '../ThemeProvider';

export const getConfig = ({ data, mode }: Theme<StylesSaluteTheme>) => ({
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: {
                color: data.color[mode].textPrimary,
                backgroundColor: data.color[mode].surfaceTransparentSecondary,
                colorActive: data.color[mode].textPrimary,
                backgroundColorActive: data.color[mode].surfaceTransparentSecondaryActive,
                spinnerColor: data.color[mode].textPrimary,
                contentIconColor: data.color[mode].textPrimary,
            },
            clear: {
                color: data.color[mode].textPrimary,
                backgroundColor: data.color[mode].surfaceClear,
                colorActive: data.color[mode].textPrimaryActive,
                backgroundColorActive: data.color[mode].surfaceClear,
                spinnerColor: data.color[mode].textPrimary,
                contentIconColor: data.color[mode].textPrimary,
            },
        },
        size: {
            l: {
                height: 56,
                width: 56,
                padding: 16,
                spinnerSize: 22,
                radius: data.shape.round.m + 2, // TODO: Узнать почему нет этих значений в теме
            },
            m: {
                height: 48,
                width: 48,
                padding: 12,
                spinnerSize: 22,
                radius: data.shape.round.m,
            },
            s: {
                height: 40,
                width: 40,
                padding: 8,
                spinnerSize: 22,
                radius: data.shape.round.s + 2, // TODO: Узнать почему нет этих значений в теме
            },
            xs: {
                height: 32,
                width: 32,
                padding: 4,
                spinnerSize: 16,
                radius: data.shape.round.s,
            },
        },
        disabled: {
            true: {
                disabledOpacity: 0.4,
            },
        },
        focused: {
            true: {
                color: data.color[mode].onLightTextPrimary,
                backgroundColor: data.color[mode].onDarkSurfaceSolidDefault,
                colorActive: data.color[mode].onLightTextPrimary,
                backgroundColorActive: data.color[mode].onLightSurfaceTransparentSecondaryActive,
                spinnerColor: data.color[mode].onLightTextPrimary,
                contentIconColor: data.color[mode].onLightTextPrimary,
                scale: 1.05,
            },
        },
    },
});

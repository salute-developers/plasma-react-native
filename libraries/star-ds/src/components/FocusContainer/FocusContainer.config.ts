import { Theme } from '@salutejs/core-components';

import { StylesSaluteTheme } from '../ThemeProvider';

export const getConfig = ({ data, mode }: Theme<StylesSaluteTheme>) => ({
    defaults: {},
    variations: {
        focused: {
            true: {
                focusedTextColor: data.color[mode].onLightTextPrimary,
                focusedBackgroundColor: data.color[mode].onDarkSurfaceSolidDefault,
                focusedScale: 1.05,
            },
        },
    },
});

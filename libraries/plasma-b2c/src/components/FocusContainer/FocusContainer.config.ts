import { Theme } from '@salutejs/core-components';

import { PlasmaB2CTheme } from '../ThemeProvider';

export const getConfig = ({ data, mode }: Theme<PlasmaB2CTheme>) => ({
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

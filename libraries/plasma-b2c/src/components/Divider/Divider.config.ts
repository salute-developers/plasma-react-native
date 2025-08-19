import { Theme } from '@salutejs/core-components';

import { PlasmaB2CTheme } from '../ThemeProvider';

export const getConfig = ({ data, mode }: Theme<PlasmaB2CTheme>) => ({
    defaults: {
        view: 'default',
        size: 'm',
        orientation: 'horizontal',
    },
    variations: {
        view: {
            default: {
                background: data.color[mode].surfaceTransparentTertiary,
            },
        },
        size: {
            m: {
                borderRadius: 1,
            },
        },
        orientation: {
            horizontal: {
                baseSideSize: 1,
            },
            vertical: {
                baseSideSize: 1,
            },
        },
    },
});

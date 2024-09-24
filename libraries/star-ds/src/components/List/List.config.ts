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
                itemBackgroundColorFocus: data.color[mode].onDarkSurfaceSolidDefault,
                itemBackgroundColorSelect: data.color[mode].surfaceTransparentSecondary,
                itemScale: 1.05,
            },
        },
        size: {
            l: {
                itemPaddingTop: 17,
                itemPaddingRight: 16,
                itemPaddingBottom: 17,
                itemPaddingLeft: 16,
                itemBorderRadius: 12,
            },
            m: {
                itemPaddingTop: 14,
                itemPaddingRight: 14,
                itemPaddingBottom: 14,
                itemPaddingLeft: 14,
                itemBorderRadius: 10,
            },
            s: {
                itemPaddingTop: 11,
                itemPaddingRight: 12,
                itemPaddingBottom: 11,
                itemPaddingLeft: 12,
                itemBorderRadius: 8,
            },
            xs: {
                itemPaddingTop: 8,
                itemPaddingRight: 8,
                itemPaddingBottom: 8,
                itemPaddingLeft: 8,
                itemBorderRadius: 6,
            },
        },
    },
});

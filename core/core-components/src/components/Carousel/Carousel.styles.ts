import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../ThemeProvider';

import { ItemsOverflow, Sizes } from './Carousel.types';

export interface Style {
    root?: ViewStyle;
}

export const getStyle = (theme?: Theme, sizes?: Sizes, itemsOverflow?: ItemsOverflow, externalStyle?: Style): Style => {
    if (!sizes || !theme) {
        return {
            root: {},
        };
    }

    return StyleSheet.create({
        root: {
            // TODO: Подумать, надо ли пересчитывать эти размеры, и учитывать их при offset
            // marginHorizontal: -sizes.paddingHorizontal,
            marginVertical: -sizes.paddingVertical,
            paddingVertical: sizes.paddingVertical,
            overflow: itemsOverflow,
            backgroundColor: 'transparent',
            ...externalStyle?.root,
        },
    });
};

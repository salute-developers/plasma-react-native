import { StyleSheet, ViewStyle } from 'react-native';

import { Sizes } from '../../Carousel.types';

export interface Style {
    root?: ViewStyle;
}

export const getStyle = (sizes?: Sizes, externalStyle?: Style): Style => {
    if (!sizes) {
        return {
            root: {},
        };
    }

    return StyleSheet.create({
        root: {
            marginHorizontal: sizes.paddingHorizontal,
            ...externalStyle?.root,
        },
    });
};

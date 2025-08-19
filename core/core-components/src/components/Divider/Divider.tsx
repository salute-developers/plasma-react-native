import { useMemo } from 'react';
import { View } from 'react-native';

import { PropsType } from '../../types';
import { withTheme } from '../ThemeProvider';

import { DividerConfig, DividerProps } from './Divider.types';
import { getStyle } from './Divider.styles';

export const dividerCore = <T extends DividerConfig>(config?: T) => (
    props: DividerProps & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
) => {
    const { view = '', size = '', orientation = 'horizontal', length = 100, ...rest } = props;

    const viewStyle = config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];
    const orientationStyle = config?.variations.orientation[orientation];

    const normalizedLength = length ? Math.max(Math.min(length, 100), 0) : 100;

    const style = useMemo(() => getStyle(viewStyle, sizeStyle, orientationStyle, normalizedLength, orientation), [
        view,
        size,
        orientation,
        length,
    ]);

    return <View ref={externalRef} style={style.root} {...rest} />;
};

export const dividerComponent = withTheme(dividerCore);

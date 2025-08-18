import { useMemo } from 'react';
import { View } from 'react-native';

import { PropsType } from '../../types';
import { withTheme } from '../ThemeProvider';

import { IndicatorConfig, IndicatorProps } from './Indicator.types';
import { getStyle } from './Indicator.styles';

export const indicatorCore = <T extends IndicatorConfig>(config?: T) => (
    props: IndicatorProps & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
) => {
    const { view = '', size = '', ...rest } = props;

    const viewStyle = config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];

    const style = useMemo(() => getStyle(viewStyle, sizeStyle), [view, size]);

    return <View ref={externalRef} style={style.root} {...rest} />;
};

export const indicatorComponent = withTheme(indicatorCore);

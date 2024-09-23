import { Text } from 'react-native';
import { useMemo } from 'react';

import { Theme, withTheme } from '../ThemeProvider';
import { PropsType } from '../../types';

import { TypographyConfig, TypographyProps } from './Typography.types';
import { getStyle } from './Typography.styles';

export const typographyCore = <T extends TypographyConfig>(config?: T, theme?: Theme) => (
    props: TypographyProps & PropsType<T['variations']>,
) => {
    const { view = '', size = '', children, bold = false, focused, style: externalStyle, ...rest } = props;

    const viewStyle = focused ? config?.variations.focused.true : config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];

    const style = useMemo(() => getStyle(theme, bold, viewStyle, sizeStyle, externalStyle), [
        view,
        size,
        bold,
        focused,
        theme?.mode,
    ]);

    return (
        <Text style={style.root} {...rest}>
            {children}
        </Text>
    );
};

export const typographyComponent = withTheme(typographyCore);

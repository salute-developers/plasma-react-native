import { Pressable, Text, View } from 'react-native';
import { useMemo } from 'react';

import { spinnerComponent } from '../Spinner';
import { Theme, withTheme } from '../ThemeProvider';
import { PropsType } from '../../types';

import { ButtonConfig, ButtonProps } from './Button.types';
import { getStyle } from './Button.styles';

const Spinner = spinnerComponent();

export const buttonCore = <T extends ButtonConfig>(config?: T, theme?: Theme) => (
    props: ButtonProps & PropsType<T['variations']>,
) => {
    const {
        view = '',
        size = '',
        pin = 'square-square',
        stretching = 'auto',
        children,
        text,
        contentLeft,
        contentRight,
        isLoading,
        loader,
        disabled,
        // focused, TODO: Придумать общую реализацию фокусной рамки,
        style: externalStyle,
        ...rest
    } = props;
    const txt = typeof children === 'string' ? children : text;

    const viewStyle = config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];
    const disabledOpacity = disabled ? config?.variations.disabled.true.disabledOpacity : 1;

    const style = useMemo(
        () => getStyle(theme, disabledOpacity, viewStyle, sizeStyle, stretching, pin, isLoading, externalStyle),
        [view, size, disabled, stretching, pin, theme?.mode],
    );

    return (
        <Pressable style={style.root} disabled={disabled} {...rest}>
            <View style={style.wrapper}>
                {contentLeft}
                {txt ? <Text style={style.text}>{txt}</Text> : children}
                {contentRight}
            </View>
            {isLoading && (
                <View style={style.loader}>
                    {loader || (
                        <Spinner
                            color={viewStyle?.color}
                            height={sizeStyle?.spinnerSize}
                            width={sizeStyle?.spinnerSize}
                        />
                    )}
                </View>
            )}
        </Pressable>
    );
};

export const buttonComponent = withTheme(buttonCore);

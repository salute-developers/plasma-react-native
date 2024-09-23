import { GestureResponderEvent, Pressable, Text, View } from 'react-native';
import { useMemo } from 'react';

import { Theme, withTheme } from '../ThemeProvider';
import { PropsType } from '../../types';

import { CheckboxConfig, CheckboxProps } from './Checkbox.types';
import { getStyle } from './Checkbox.styles';
import { Done, Indeterminate } from './IconsSvg';

export const checkboxCore = <T extends CheckboxConfig>(config?: T, theme?: Theme) => (
    props: CheckboxProps & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
) => {
    const {
        view = '',
        size = '',
        label,
        description,
        indeterminate,
        singleLine = false,
        disabled,
        checked = false,
        focused,
        style: externalStyle,
        onValueChange,
        onPress,
        ...rest
    } = props;

    const viewStyle = focused ? config?.variations.focused.true : config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];
    const disabledOpacity = disabled ? config?.variations.disabled.true.disabledOpacity : 1;

    const hasContent = label || description;
    const onlyDescription = Boolean(!label && description);
    const iconColor = checked || indeterminate ? viewStyle?.iconColor : 'transparent';
    const numberOfLines = singleLine ? 1 : undefined;

    const style = useMemo(
        () =>
            getStyle(
                theme,
                disabledOpacity,
                onlyDescription,
                checked || indeterminate,
                viewStyle,
                sizeStyle,
                externalStyle,
            ),
        [view, size, label, checked, indeterminate, description, disabled, focused, theme?.mode],
    );

    const onWrapperPress = (event: GestureResponderEvent) => {
        if (onValueChange) {
            onValueChange(checked);
        }

        if (onPress) {
            onPress(event);
        }
    };

    return (
        <Pressable style={style.root} disabled={disabled} ref={externalRef} onPress={onWrapperPress} {...rest}>
            <View style={style.wrapper}>
                <View style={style.trigger}>
                    {indeterminate ? (
                        <Indeterminate color={iconColor} size={sizeStyle?.triggerSize} />
                    ) : (
                        <Done color={iconColor} size={sizeStyle?.triggerSize} />
                    )}
                </View>
                {hasContent && (
                    <View style={style.content}>
                        {label && (
                            <Text numberOfLines={numberOfLines} style={style.label}>
                                {label}
                            </Text>
                        )}
                        {description && (
                            <Text numberOfLines={numberOfLines} style={style.description}>
                                {description}
                            </Text>
                        )}
                    </View>
                )}
            </View>
        </Pressable>
    );
};

export const checkboxComponent = withTheme(checkboxCore);

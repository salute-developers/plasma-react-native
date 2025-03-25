import { NativeSyntheticEvent, Pressable, TargetedEvent, View, Text } from 'react-native';
import { cloneElement, ReactElement, useMemo, useState } from 'react';

import { Theme, withTheme } from '../ThemeProvider';
import { FocusableWrapper } from '../FocusableWrapper';
import { getIntersectionStyles } from '../../utils';
import { PropsType } from '../../types';

import { CardConfig, CardProps } from './Card.types';
import { getStyle } from './Card.styles';
import { CardRadialGradientSvg } from './CardRadialGradientSvg';
import { useBorderAnimate } from './hooks';

export const cardCore = <T extends CardConfig>(config?: T, theme?: Theme) => (
    props: CardProps & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
) => {
    const {
        view = '',
        size = '',
        image,
        alignTextBox = 'left',
        timelineValue,
        title,
        subtitle,
        contentTopLeft,
        contentTopRight,
        contentBottomRight,
        contentBottomLeft,
        disabled,
        style: externalStyle,
        onBlur,
        onFocus,
        ...rest
    } = props;

    const [focused, setFocused] = useState(false);

    const customStyles = getIntersectionStyles(
        { ...props, focused },
        { ...config?.variations.view[view], ...config?.variations.size[size] },
        config,
    );
    const disabledOpacity = disabled ? config?.variations.disabled.true.disabledOpacity : 1;

    const style = useMemo(
        () => getStyle(theme, disabledOpacity, customStyles, alignTextBox, timelineValue, externalStyle),
        [view, size, disabled, focused, alignTextBox, timelineValue, theme?.mode],
    );

    const [gradientRef, gradientRadius] = useBorderAnimate(customStyles, focused);

    const onWrapperFocus = (event: NativeSyntheticEvent<TargetedEvent>) => {
        if (onFocus) {
            onFocus(event);
        }

        setFocused(true);
    };

    const onWrapperBlur = (event: NativeSyntheticEvent<TargetedEvent>) => {
        if (onBlur) {
            onBlur(event);
        }

        setFocused(false);
    };

    return (
        <Pressable
            disabled={disabled}
            ref={externalRef}
            onFocus={onWrapperFocus}
            onBlur={onWrapperBlur}
            style={style.root}
            {...rest}
        >
            <View style={style.wrapper}>
                {focused && (
                    <CardRadialGradientSvg
                        styles={customStyles}
                        gradientRadius={gradientRadius}
                        gradientRef={gradientRef}
                    />
                )}
                {image &&
                    // INFO: Если использовать scale для компонента View и использовать
                    // в качестве дочки компонент image,
                    // то неизвестно как будет округляться размер картинки,
                    // из-за чего "бордер" не получается сделать корректным
                    cloneElement(image as ReactElement, {
                        style: style.image,
                    })}
                <View style={style.content}>
                    {contentTopLeft && (
                        <View style={style.contentTopLeft}>
                            <FocusableWrapper iconColor={customStyles?.contentTopLeftColor}>
                                {contentTopLeft}
                            </FocusableWrapper>
                        </View>
                    )}
                    {contentTopRight && (
                        <View style={style.contentTopRight}>
                            <FocusableWrapper iconColor={customStyles?.contentTopRightColor}>
                                {contentTopRight}
                            </FocusableWrapper>
                        </View>
                    )}
                    {contentBottomRight && (
                        <View style={style.contentBottomRight}>
                            <FocusableWrapper iconColor={customStyles?.contentBottomRightColor}>
                                {contentBottomLeft}
                            </FocusableWrapper>
                        </View>
                    )}
                    {contentBottomLeft && (
                        <View style={style.contentBottomLeft}>
                            <FocusableWrapper iconColor={customStyles?.contentBottomLeftColor}>
                                {contentBottomRight}
                            </FocusableWrapper>
                        </View>
                    )}
                    {timelineValue !== undefined && (
                        <View style={style.timelineBar}>
                            <View style={style.timelineProgress} />
                        </View>
                    )}
                </View>
            </View>
            <View style={style.textBox}>
                {title && <Text style={style.title}>{title}</Text>}
                {subtitle && <Text style={style.subtitle}>{subtitle}</Text>}
            </View>
        </Pressable>
    );
};

export const cardComponent = withTheme(cardCore);

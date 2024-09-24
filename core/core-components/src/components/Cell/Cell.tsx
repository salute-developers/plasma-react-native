import { Text, View } from 'react-native';
import React, { useMemo } from 'react';

import { PropsType } from '../../types';
import { Theme, withTheme } from '../ThemeProvider';
import { FocusableWrapper } from '../FocusableWrapper';

import { CellConfig, CellProps } from './Cell.types';
import { getStyle } from './Cell.styles';
import { DisclosureRight } from './DisclosureRightSvg';

export const cellCore = <T extends CellConfig>(config?: T, theme?: Theme) => (
    props: CellProps & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
) => {
    const {
        view = '',
        size = '',
        contentLeft,
        contentRight,
        alignContentLeft = 'center',
        alignContentRight = 'center',
        stretching = 'filled',
        title,
        subtitle,
        label,
        focused,
        hasDisclosure,
        disclosureText,
        style: externalStyle,
    } = props;

    const viewStyle = focused ? config?.variations.focused.true : config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];

    const style = useMemo(
        () => getStyle(theme, viewStyle, sizeStyle, alignContentLeft, alignContentRight, stretching, externalStyle),
        [view, size, alignContentLeft, alignContentRight, stretching, focused, theme?.mode],
    );

    return (
        <View ref={externalRef} style={style.root}>
            {contentLeft && (
                <View style={style.contentLeft}>
                    <FocusableWrapper iconColor={viewStyle?.contentIconColor}>{contentLeft}</FocusableWrapper>
                </View>
            )}
            <View style={style.container}>
                <View style={style.content}>
                    {label && <Text style={style.label}>{label}</Text>}
                    {title && <Text style={style.title}>{title}</Text>}
                    {subtitle && <Text style={style.subtitle}>{subtitle}</Text>}
                </View>
                {contentRight && (
                    <View style={style.contentRight}>
                        <FocusableWrapper
                            iconColor={viewStyle?.contentIconColor}
                            focused={focused}
                            style={style.contentRightText}
                        >
                            {contentRight}
                        </FocusableWrapper>
                    </View>
                )}
                {hasDisclosure && (
                    <View style={style.contentRight}>
                        {disclosureText && <Text style={style.contentRightText}>{disclosureText}</Text>}
                        <DisclosureRight color={viewStyle?.contentRightTextColor} />
                    </View>
                )}
            </View>
        </View>
    );
};

export const cellComponent = withTheme(cellCore);

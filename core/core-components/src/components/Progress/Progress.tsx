import { Text, View } from 'react-native';
import { Defs, Rect, Svg } from 'react-native-svg';
import { useMemo } from 'react';

import { Theme, withTheme } from '../ThemeProvider';
import { PropsType } from '../../types';

import { ProgressConfig, ProgressProps } from './Progress.types';
import { getStyle } from './Progress.styles';
import { isGradient } from './utils';
import { LinearGradient } from './ui';

export const progressCore = <T extends ProgressConfig>(config?: T, theme?: Theme) => (
    props: ProgressProps & PropsType<T['variations']>,
) => {
    const { view = '', size = '', value = 0, displayValue = true, style: externalStyle, ...rest } = props;

    const min = 0;
    const max = 100;
    const normalizedValue = Math.max(Math.min(value, max), min);

    const viewStyle = config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];

    const style = useMemo(() => getStyle(theme, viewStyle, sizeStyle, externalStyle), [view, size, theme?.mode]);

    const progressSize = useMemo(
        () => ({
            rx: sizeStyle?.progressFilledBorderRadius,
            ry: sizeStyle?.progressFilledBorderRadius,
            width: `${normalizedValue}%`,
            height: sizeStyle?.progressFilledHeight,
        }),
        [value, size, theme?.mode],
    );

    return (
        <View style={style.root} {...rest}>
            <View style={style.bar}>
                <View style={style.track} />
                <Svg style={style.progress}>
                    <Defs>
                        {isGradient(viewStyle?.progressFilledBackgroundColor) &&
                            viewStyle.progressFilledBackgroundColor.map((item, index) => (
                                <LinearGradient id={`grad_${index}`} data={item} key={`grad_${index}`} />
                            ))}
                    </Defs>
                    {isGradient(viewStyle?.progressFilledBackgroundColor) ? (
                        viewStyle.progressFilledBackgroundColor.map((_, index) => (
                            <Rect {...progressSize} fill={`url(#grad_${index})`} key={`grad_${index}`} />
                        ))
                    ) : (
                        <Rect {...progressSize} fill={viewStyle?.progressFilledBackgroundColor} />
                    )}
                </Svg>
            </View>
            {displayValue && <Text style={style.value}>{normalizedValue}%</Text>}
        </View>
    );
};

export const progressComponent = withTheme(progressCore);

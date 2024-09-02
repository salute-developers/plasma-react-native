import { View } from 'react-native';
import { useMemo } from 'react';

import { Theme, withTheme } from '../../../components/ThemeProvider';
import { PropsType } from '../../../types';
import { Placeholder } from '../ui';

import { TextSkeletonConfig, TextSkeletonProps } from './TextSkeleton.types';

const variousWidth = [7.58, 5.27, 13.54, 6.63, 0.28, 14.8, 0.33, 11.26, 14.1, 10.59, 3.38, 13.5, 7.71, 3.34, 7.96];

export const textSkeletonCore = <T extends TextSkeletonConfig>(config?: T, theme?: Theme) => (
    props: TextSkeletonProps & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
) => {
    const { size = '', width, lines, ...rest } = props;

    const sizeStyle = config?.variations.size[size];
    const margin = ((sizeStyle?.lineHeight ?? 0) - (sizeStyle?.visibleLineHeight ?? 0)) / 2;

    const linesWidth = useMemo(() => {
        return Array(lines)
            .fill(0)
            .map((_, i) => {
                if (width) {
                    return width;
                }

                const dynamicWidth = variousWidth[i % variousWidth.length];

                if (i === lines - 1 && lines !== 1) {
                    return 45 - dynamicWidth;
                }

                if (lines === 1 || lines === 2) {
                    return 100;
                }

                return 100 - dynamicWidth;
            });
    }, [width, lines]);

    return (
        <View style={{ flex: 1 }}>
            {Array.from(Array<number>(lines), (_, i) => (
                <Placeholder
                    width={`${linesWidth[i]}%`}
                    height={sizeStyle?.visibleLineHeight}
                    margin={margin}
                    theme={theme}
                    ref={externalRef}
                    key={i}
                    {...rest}
                />
            ))}
        </View>
    );
};

export const textSkeletonComponent = withTheme(textSkeletonCore);

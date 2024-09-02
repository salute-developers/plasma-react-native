import { View } from 'react-native';

import { Theme, withTheme } from '../../../components/ThemeProvider';
import { PropsType } from '../../../types';
import { Placeholder } from '../ui';

import { LineSkeletonConfig, LineSkeletonProps } from './LineSkeleton.types';

export const lineSkeletonCore = <T extends LineSkeletonConfig>(config?: T, theme?: Theme) => (
    props: LineSkeletonProps & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
) => {
    const sizeStyle = config?.variations.size[props.size ?? ''];
    const margin = ((sizeStyle?.lineHeight ?? 0) - (sizeStyle?.visibleLineHeight ?? 0)) / 2;

    return (
        <Placeholder
            width="100%"
            height={sizeStyle?.visibleLineHeight}
            margin={margin}
            theme={theme}
            ref={externalRef}
            {...props}
        />
    );
};

export const lineSkeletonComponent = withTheme(lineSkeletonCore);

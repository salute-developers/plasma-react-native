import { View } from 'react-native';

import { Theme, withTheme } from '../../../components/ThemeProvider';
import { PropsType } from '../../../types';
import { Placeholder } from '../ui';

import { RectSkeletonProps } from './RectSkeleton.types';

export const rectSkeletonCore = <T extends {}>(_?: T, theme?: Theme) => (
    props: RectSkeletonProps & PropsType<{}>,
    externalRef: React.ForwardedRef<View>,
) => {
    return <Placeholder theme={theme} ref={externalRef} {...props} />;
};

export const rectSkeletonComponent = withTheme(rectSkeletonCore);

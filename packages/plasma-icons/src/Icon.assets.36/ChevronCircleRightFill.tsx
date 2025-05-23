import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleRightFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32C25.732 32 32 25.732 32 18ZM14.4935 24.7592C14.1029 25.1497 14.1029 25.7828 14.4935 26.1734C14.884 26.5639 15.5171 26.5639 15.9077 26.1734L23.3747 18.7063C23.7653 18.3158 23.7653 17.6826 23.3747 17.2921L15.9077 9.82503C15.5171 9.43451 14.884 9.43451 14.4935 9.82503C14.1029 10.2156 14.1029 10.8487 14.4935 11.2392L21.2534 17.9992L14.4935 24.7592Z"
            fill="currentColor"
        />
    </s.Svg>
);

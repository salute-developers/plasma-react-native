import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleUpFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4ZM24.7592 21.5065C25.1497 21.8971 25.7828 21.8971 26.1734 21.5065C26.5639 21.116 26.5639 20.4829 26.1734 20.0923L18.7063 12.6253C18.3158 12.2347 17.6826 12.2347 17.2921 12.6253L9.82503 20.0923C9.43451 20.4829 9.43451 21.116 9.82503 21.5065C10.2156 21.8971 10.8487 21.8971 11.2392 21.5065L17.9992 14.7466L24.7592 21.5065Z"
            fill="currentColor"
        />
    </s.Svg>
);

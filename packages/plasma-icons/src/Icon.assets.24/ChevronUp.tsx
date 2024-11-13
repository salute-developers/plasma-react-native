import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronUp: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.5303 16.0303C19.2374 16.3232 18.7626 16.3232 18.4697 16.0303L12 9.56066L5.53033 16.0303C5.23744 16.3232 4.76256 16.3232 4.46967 16.0303C4.17678 15.7374 4.17678 15.2626 4.46967 14.9697L11.4697 7.96967C11.7626 7.67678 12.2374 7.67678 12.5303 7.96967L19.5303 14.9697C19.8232 15.2626 19.8232 15.7374 19.5303 16.0303Z"
            fill="currentColor"
        />
    </s.Svg>
);

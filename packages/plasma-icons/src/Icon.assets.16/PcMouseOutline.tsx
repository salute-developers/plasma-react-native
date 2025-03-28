import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PcMouseOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M8.5 4C8.5 3.72386 8.27614 3.5 8 3.5C7.72386 3.5 7.5 3.72386 7.5 4V6.5498C7.5 6.82595 7.72386 7.0498 8 7.0498C8.27614 7.0498 8.5 6.82595 8.5 6.5498V4Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.09961 5.9C3.09961 3.1938 5.29341 1 7.99961 1C10.7058 1 12.8996 3.1938 12.8996 5.9V10.1C12.8996 12.8062 10.7058 15 7.99961 15C5.29341 15 3.09961 12.8062 3.09961 10.1V5.9ZM11.8996 5.9V10.1C11.8996 12.2539 10.1535 14 7.99961 14C5.8457 14 4.09961 12.2539 4.09961 10.1V5.9C4.09961 3.74609 5.8457 2 7.99961 2C10.1535 2 11.8996 3.74609 11.8996 5.9Z"
            fill="currentColor"
        />
    </s.Svg>
);

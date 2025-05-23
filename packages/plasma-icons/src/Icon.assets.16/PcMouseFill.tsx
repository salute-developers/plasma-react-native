import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PcMouseFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99961 1C5.29341 1 3.09961 3.1938 3.09961 5.9V10.1C3.09961 12.8062 5.29341 15 7.99961 15C10.7058 15 12.8996 12.8062 12.8996 10.1V5.9C12.8996 3.1938 10.7058 1 7.99961 1ZM8.5 3.7998C8.5 3.52366 8.27614 3.2998 8 3.2998C7.72386 3.2998 7.5 3.52366 7.5 3.7998V6.5498C7.5 6.82595 7.72386 7.0498 8 7.0498C8.27614 7.0498 8.5 6.82595 8.5 6.5498V3.7998Z"
            fill="currentColor"
        />
    </s.Svg>
);

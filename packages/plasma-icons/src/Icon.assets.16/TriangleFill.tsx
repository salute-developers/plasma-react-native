import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TriangleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.92176 1.5C8.11528 1.5 8.2941 1.60324 8.39086 1.77083L15.2709 13.6875C15.3677 13.8551 15.3677 14.0616 15.2709 14.2292C15.1742 14.3968 14.9954 14.5 14.8018 14.5H1.04167C0.848148 14.5 0.669329 14.3968 0.57257 14.2292C0.47581 14.0616 0.47581 13.8551 0.57257 13.6875L7.45266 1.77083C7.54942 1.60324 7.72824 1.5 7.92176 1.5Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TriangleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00003 1.5C8.17866 1.5 8.34372 1.5953 8.43304 1.75L15.1447 13.375C15.2341 13.5297 15.2341 13.7203 15.1447 13.875C15.0554 14.0297 14.8904 14.125 14.7117 14.125H1.28833C1.1097 14.125 0.944634 14.0297 0.855317 13.875C0.766001 13.7203 0.766001 13.5297 0.855317 13.375L7.56701 1.75C7.65633 1.5953 7.82139 1.5 8.00003 1.5ZM2.15436 13.125H13.8457L8.00003 3L2.15436 13.125Z"
            fill="currentColor"
        />
    </s.Svg>
);

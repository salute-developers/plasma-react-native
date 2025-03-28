import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MinusSquareFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.025 1.75C2.76855 1.75 1.75 2.76855 1.75 4.025V11.975C1.75 13.2314 2.76855 14.25 4.025 14.25H11.975C13.2314 14.25 14.25 13.2314 14.25 11.975V4.025C14.25 2.76855 13.2314 1.75 11.975 1.75H4.025ZM4.35352 7.49981C4.07737 7.49981 3.85352 7.72366 3.85352 7.99981C3.85352 8.27595 4.07737 8.49981 4.35352 8.49981H11.6452C11.9213 8.49981 12.1452 8.27595 12.1452 7.99981C12.1452 7.72366 11.9213 7.49981 11.6452 7.49981H4.35352Z"
            fill="currentColor"
        />
    </s.Svg>
);

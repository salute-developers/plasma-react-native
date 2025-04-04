import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PreviousFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 19.75C3.58579 19.75 3.25 19.4142 3.25 19V4.5C3.25 4.08579 3.58579 3.75 4 3.75C4.41421 3.75 4.75 4.08579 4.75 4.5V19C4.75 19.4142 4.41421 19.75 4 19.75Z"
            fill="currentColor"
        />
        <s.Path
            d="M8.35921 13.2818C7.3979 12.6976 7.3979 11.3024 8.35921 10.7182L18.221 4.72479C19.2206 4.11729 20.5 4.83689 20.5 6.00664L20.5 17.9934C20.5 19.1631 19.2206 19.8827 18.221 19.2752L8.35921 13.2818Z"
            fill="currentColor"
        />
    </s.Svg>
);

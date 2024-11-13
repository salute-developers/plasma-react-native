import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChoiceFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M13 4.75C13 3.7835 13.7835 3 14.75 3H19.25C20.2165 3 21 3.7835 21 4.75V9.25C21 10.2165 20.2165 11 19.25 11H14.75C13.7835 11 13 10.2165 13 9.25V4.75Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.75 13C3.7835 13 3 13.7835 3 14.75V19.25C3 20.2165 3.7835 21 4.75 21H9.25C10.2165 21 11 20.2165 11 19.25V14.75C11 13.7835 10.2165 13 9.25 13H4.75Z"
            fill="currentColor"
        />
        <s.Path
            d="M14.75 13C13.7835 13 13 13.7835 13 14.75V19.25C13 20.2165 13.7835 21 14.75 21H19.25C20.2165 21 21 20.2165 21 19.25V14.75C21 13.7835 20.2165 13 19.25 13H14.75Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.75 3C3.7835 3 3 3.7835 3 4.75V9.25C3 10.2165 3.7835 11 4.75 11H9.25C10.2165 11 11 10.2165 11 9.25V4.75C11 3.7835 10.2165 3 9.25 3H4.75ZM4.5 4.75C4.5 4.61193 4.61193 4.5 4.75 4.5H9.25C9.38807 4.5 9.5 4.61193 9.5 4.75V9.25C9.5 9.38807 9.38807 9.5 9.25 9.5H4.75C4.61193 9.5 4.5 9.38807 4.5 9.25V4.75Z"
            fill="currentColor"
        />
    </s.Svg>
);

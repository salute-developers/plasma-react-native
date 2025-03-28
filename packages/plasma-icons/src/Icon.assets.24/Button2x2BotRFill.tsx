import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Button2x2BotRFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M4.75 3C3.7835 3 3 3.7835 3 4.75V8.25C3 9.2165 3.7835 10 4.75 10H8.25C9.2165 10 10 9.2165 10 8.25V4.75C10 3.7835 9.2165 3 8.25 3H4.75Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.25 13C14.0074 13 13 14.0074 13 15.25V19.75C13 20.9926 14.0074 22 15.25 22H19.75C20.9926 22 22 20.9926 22 19.75V15.25C22 14.0074 20.9926 13 19.75 13H15.25ZM14.5 15.25C14.5 14.8358 14.8358 14.5 15.25 14.5H19.75C20.1642 14.5 20.5 14.8358 20.5 15.25V19.75C20.5 20.1642 20.1642 20.5 19.75 20.5H15.25C14.8358 20.5 14.5 20.1642 14.5 19.75V15.25Z"
            fill="currentColor"
        />
        <s.Path
            d="M14 4.75C14 3.7835 14.7835 3 15.75 3H19.25C20.2165 3 21 3.7835 21 4.75V8.25C21 9.2165 20.2165 10 19.25 10H15.75C14.7835 10 14 9.2165 14 8.25V4.75Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.75 14C3.7835 14 3 14.7835 3 15.75V19.25C3 20.2165 3.7835 21 4.75 21H8.25C9.2165 21 10 20.2165 10 19.25V15.75C10 14.7835 9.2165 14 8.25 14H4.75Z"
            fill="currentColor"
        />
    </s.Svg>
);

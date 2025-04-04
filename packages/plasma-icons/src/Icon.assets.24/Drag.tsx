import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Drag: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M5.71997 4.25C5.71997 3.00736 6.72733 2 7.96997 2C9.21261 2 10.22 3.00736 10.22 4.25C10.22 5.49264 9.21261 6.5 7.96997 6.5C6.72733 6.5 5.71997 5.49264 5.71997 4.25Z"
            fill="currentColor"
        />
        <s.Path
            d="M5.71997 12C5.71997 10.7574 6.72733 9.75 7.96997 9.75C9.21261 9.75 10.22 10.7574 10.22 12C10.22 13.2426 9.21261 14.25 7.96997 14.25C6.72733 14.25 5.71997 13.2426 5.71997 12Z"
            fill="currentColor"
        />
        <s.Path
            d="M7.96997 17.5C6.72733 17.5 5.71997 18.5074 5.71997 19.75C5.71997 20.9926 6.72733 22 7.96997 22C9.21261 22 10.22 20.9926 10.22 19.75C10.22 18.5074 9.21261 17.5 7.96997 17.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M13.72 4.25C13.72 3.00736 14.7273 2 15.97 2C17.2126 2 18.22 3.00736 18.22 4.25C18.22 5.49264 17.2126 6.5 15.97 6.5C14.7273 6.5 13.72 5.49264 13.72 4.25Z"
            fill="currentColor"
        />
        <s.Path
            d="M15.97 9.75C14.7273 9.75 13.72 10.7574 13.72 12C13.72 13.2426 14.7273 14.25 15.97 14.25C17.2126 14.25 18.22 13.2426 18.22 12C18.22 10.7574 17.2126 9.75 15.97 9.75Z"
            fill="currentColor"
        />
        <s.Path
            d="M13.72 19.75C13.72 18.5074 14.7273 17.5 15.97 17.5C17.2126 17.5 18.22 18.5074 18.22 19.75C18.22 20.9926 17.2126 22 15.97 22C14.7273 22 13.72 20.9926 13.72 19.75Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BlockFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M25.9209 24.5067L11.4933 10.0791C15.5198 6.7635 21.4835 6.98785 25.2478 10.7522C29.0121 14.5165 29.2365 20.4802 25.9209 24.5067Z"
            fill="currentColor"
        />
        <s.Path
            d="M10.0791 11.4933L24.5067 25.9209C20.4802 29.2365 14.5165 29.0121 10.7522 25.2478C6.98785 21.4835 6.7635 15.5198 10.0791 11.4933Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM26.6621 9.33794C21.8781 4.55402 14.1219 4.55402 9.33794 9.33794C4.55402 14.1219 4.55402 21.8781 9.33794 26.6621C14.1219 31.446 21.8781 31.446 26.6621 26.6621C31.446 21.8781 31.446 14.1219 26.6621 9.33794Z"
            fill="currentColor"
        />
    </s.Svg>
);

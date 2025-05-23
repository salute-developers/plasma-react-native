import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoneSquareFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.025 1.75C2.76855 1.75 1.75 2.76855 1.75 4.025V11.975C1.75 13.2314 2.76855 14.25 4.025 14.25H11.975C13.2314 14.25 14.25 13.2314 14.25 11.975V4.025C14.25 2.76855 13.2314 1.75 11.975 1.75H4.025ZM12.1745 6.09672C12.3698 5.90146 12.3698 5.58487 12.1745 5.38961C11.9793 5.19435 11.6627 5.19435 11.4674 5.38961L6.61263 10.2444L4.88285 8.51461C4.68759 8.31935 4.37101 8.31935 4.17574 8.51461C3.98048 8.70987 3.98048 9.02645 4.17574 9.22172L6.25908 11.305C6.45434 11.5003 6.77092 11.5003 6.96618 11.305L12.1745 6.09672Z"
            fill="currentColor"
        />
    </s.Svg>
);

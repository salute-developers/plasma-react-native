import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SberboxTopOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.59998 14C1.59998 12.6193 2.71926 11.5 4.09998 11.5H31.85C33.2307 11.5 34.35 12.6193 34.35 14V19.25C34.35 20.6307 33.2307 21.75 31.85 21.75H4.09998C2.71926 21.75 1.59998 20.6307 1.59998 19.25V14ZM4.09998 13.5C3.82383 13.5 3.59998 13.7239 3.59998 14V19.25C3.59998 19.5261 3.82383 19.75 4.09998 19.75H31.85C32.1261 19.75 32.35 19.5261 32.35 19.25V14C32.35 13.7239 32.1261 13.5 31.85 13.5H4.09998ZM19.85 16.625C19.85 17.6605 19.0105 18.5 17.975 18.5C16.9394 18.5 16.1 17.6605 16.1 16.625C16.1 15.5895 16.9394 14.75 17.975 14.75C19.0105 14.75 19.85 15.5895 19.85 16.625ZM8.97498 23.5C8.42269 23.5 7.97498 23.9477 7.97498 24.5C7.97498 25.0523 8.42269 25.5 8.97498 25.5H26.975C27.5273 25.5 27.975 25.0523 27.975 24.5C27.975 23.9477 27.5273 23.5 26.975 23.5H8.97498Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.22498 19.75V12.75H8.22498V19.75H6.22498Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.975 19.75V12.75H29.975V19.75H27.975Z"
            fill="currentColor"
        />
    </s.Svg>
);

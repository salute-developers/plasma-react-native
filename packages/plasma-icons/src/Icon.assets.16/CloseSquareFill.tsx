import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CloseSquareFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.025 1.75C2.76855 1.75 1.75 2.76855 1.75 4.025V11.975C1.75 13.2314 2.76855 14.25 4.025 14.25H11.975C13.2314 14.25 14.25 13.2314 14.25 11.975V4.025C14.25 2.76855 13.2314 1.75 11.975 1.75H4.025ZM11.3146 4.68576C11.518 4.88916 11.518 5.21893 11.3146 5.42233L8.73657 8.00032L11.3146 10.5783C11.518 10.7817 11.518 11.1115 11.3146 11.3149C11.1112 11.5183 10.7814 11.5183 10.578 11.3149L8 8.73689L5.42201 11.3149C5.21861 11.5183 4.88883 11.5183 4.68544 11.3149C4.48204 11.1115 4.48204 10.7817 4.68544 10.5783L7.26343 8.00032L4.68544 5.42233C4.48204 5.21893 4.48204 4.88916 4.68544 4.68576C4.88883 4.48236 5.21861 4.48236 5.42201 4.68576L8 7.26375L10.578 4.68576C10.7814 4.48236 11.1112 4.48236 11.3146 4.68576Z"
            fill="currentColor"
        />
    </s.Svg>
);

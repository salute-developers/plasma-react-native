import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DishwasherFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.375 3C6.68261 3 4.5 5.18261 4.5 7.875V12H31.5V7.875C31.5 5.18261 29.3174 3 26.625 3H9.375ZM12 9C12 9.82843 11.3284 10.5 10.5 10.5C9.67157 10.5 9 9.82843 9 9C9 8.17157 9.67157 7.5 10.5 7.5C11.3284 7.5 12 8.17157 12 9ZM19.125 7.875C18.5037 7.875 18 8.37868 18 9C18 9.62132 18.5037 10.125 19.125 10.125H25.875C26.4963 10.125 27 9.62132 27 9C27 8.37868 26.4963 7.875 25.875 7.875H19.125Z"
            fill="currentColor"
        />
        <s.Path
            d="M31.5 28.125V14.25H4.5V28.125C4.5 30.8174 6.68261 33 9.375 33H26.625C29.3174 33 31.5 30.8174 31.5 28.125Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LocationArrowOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.6468 7.0836C28.04 6.58205 29.3877 7.9297 28.8861 9.32292L20.7312 31.9754C20.1423 33.6113 17.7865 33.4804 17.3825 31.7893L14.8367 21.133L4.18041 18.5872C2.48934 18.1832 2.35841 15.8274 3.99429 15.2385L26.6468 7.0836ZM26.8244 9.14532L5.45988 16.8365L15.4508 19.2234C16.0923 19.3766 16.5931 19.8774 16.7463 20.5189L19.1332 30.5098L26.8244 9.14532Z"
            fill="currentColor"
        />
    </s.Svg>
);

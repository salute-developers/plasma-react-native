import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Done: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.7056 9.29137C32.0969 9.68105 32.0983 10.3142 31.7086 10.7056L15.7776 26.7056C15.5899 26.894 15.3349 27 15.069 27C14.803 27 14.548 26.894 14.3603 26.7056L8.29137 20.6103C7.90169 20.219 7.90306 19.5858 8.29442 19.1961C8.68579 18.8064 9.31895 18.8078 9.70863 19.1992L15.069 24.5827L30.2914 9.29442C30.681 8.90306 31.3142 8.90169 31.7056 9.29137Z"
            fill="currentColor"
        />
    </s.Svg>
);

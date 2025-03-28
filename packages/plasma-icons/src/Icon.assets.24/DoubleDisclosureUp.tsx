import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoubleDisclosureUp: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.0303 16.9697C16.7374 17.2625 16.2626 17.2625 15.9697 16.9697L12 13L8.03033 16.9697C7.73744 17.2625 7.26256 17.2625 6.96967 16.9697C6.67678 16.6768 6.67678 16.2019 6.96967 15.909L12 10.8787L17.0303 15.909C17.3232 16.2019 17.3232 16.6768 17.0303 16.9697Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.0303 11.591C16.7374 11.8839 16.2626 11.8839 15.9697 11.591L12 7.62132L8.03033 11.591C7.73744 11.8839 7.26256 11.8839 6.96967 11.591C6.67678 11.2981 6.67678 10.8232 6.96967 10.5303L12 5.5L17.0303 10.5303C17.3232 10.8232 17.3232 11.2981 17.0303 11.591Z"
            fill="currentColor"
        />
    </s.Svg>
);

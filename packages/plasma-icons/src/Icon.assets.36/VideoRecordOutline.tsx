import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoRecordOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 17.9994C5 10.82 10.82 5 17.9994 5C25.1788 5 30.9989 10.82 30.9989 17.9994C30.9989 25.1788 25.1788 30.9989 17.9994 30.9989C10.82 30.9989 5 25.1788 5 17.9994ZM17.9994 3C9.71548 3 3 9.71548 3 17.9994C3 26.2834 9.71548 32.9989 17.9994 32.9989C26.2834 32.9989 32.9989 26.2834 32.9989 17.9994C32.9989 9.71548 26.2834 3 17.9994 3ZM18 24.8097C21.7613 24.8097 24.8105 21.7605 24.8105 17.9991C24.8105 14.2378 21.7613 11.1886 18 11.1886C14.2386 11.1886 11.1895 14.2378 11.1895 17.9991C11.1895 21.7605 14.2386 24.8097 18 24.8097Z"
            fill="currentColor"
        />
    </s.Svg>
);

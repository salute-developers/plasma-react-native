import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureUpFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.81863 14.0546C6.94102 14.3207 7.20711 14.4912 7.50001 14.4912H16.5C16.7929 14.4912 17.059 14.3207 17.1814 14.0546C17.3038 13.7885 17.2601 13.4755 17.0695 13.2531L12.5695 8.00312C12.427 7.83688 12.219 7.74121 12 7.74121C11.7811 7.74121 11.5731 7.83688 11.4306 8.00312L6.93057 13.2531C6.73995 13.4755 6.69624 13.7885 6.81863 14.0546Z"
            fill="currentColor"
        />
    </s.Svg>
);

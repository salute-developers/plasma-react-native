import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureLeftFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.8134 17.1814C14.0795 17.059 14.25 16.7929 14.25 16.5V7.50001C14.25 7.20711 14.0795 6.94102 13.8134 6.81863C13.5473 6.69624 13.2343 6.73995 13.0119 6.93057L7.76191 11.4306C7.59567 11.5731 7.5 11.7811 7.5 12C7.5 12.219 7.59567 12.427 7.76191 12.5695L13.0119 17.0695C13.2343 17.2601 13.5473 17.3038 13.8134 17.1814Z"
            fill="currentColor"
        />
    </s.Svg>
);

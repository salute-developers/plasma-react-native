import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwitchSettingsFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 4.25C1 2.45507 2.45507 1 4.25 1H11.75C13.5449 1 15 2.45507 15 4.25C15 6.04493 13.5449 7.5 11.75 7.5H4.25C2.45507 7.5 1 6.04493 1 4.25ZM11.75 5.75C12.5784 5.75 13.25 5.07843 13.25 4.25C13.25 3.42157 12.5784 2.75 11.75 2.75C10.9216 2.75 10.25 3.42157 10.25 4.25C10.25 5.07843 10.9216 5.75 11.75 5.75Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 11.75C15 13.5449 13.5449 15 11.75 15H4.25C2.45507 15 1 13.5449 1 11.75C1 9.95507 2.45507 8.5 4.25 8.5H11.75C13.5449 8.5 15 9.95507 15 11.75ZM4.25 10.25C3.42157 10.25 2.75 10.9216 2.75 11.75C2.75 12.5784 3.42157 13.25 4.25 13.25C5.07843 13.25 5.75 12.5784 5.75 11.75C5.75 10.9216 5.07843 10.25 4.25 10.25Z"
            fill="currentColor"
        />
    </s.Svg>
);

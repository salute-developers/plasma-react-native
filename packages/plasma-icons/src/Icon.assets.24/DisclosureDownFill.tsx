import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureDownFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.1853 9.93661C17.0629 9.67051 16.7968 9.5 16.5039 9.5H7.50392C7.21102 9.5 6.94492 9.67051 6.82253 9.93661C6.70014 10.2027 6.74386 10.5157 6.93447 10.7381L11.4345 15.9881C11.577 16.1543 11.785 16.25 12.0039 16.25C12.2229 16.25 12.4309 16.1543 12.5734 15.9881L17.0734 10.7381C17.264 10.5157 17.3077 10.2027 17.1853 9.93661Z"
            fill="currentColor"
        />
    </s.Svg>
);

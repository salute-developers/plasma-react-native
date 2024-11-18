import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleLeftFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8ZM9.60355 4.85355C9.79882 4.65829 9.79882 4.34171 9.60355 4.14645C9.40829 3.95118 9.09171 3.95118 8.89645 4.14645L5.39645 7.64645C5.20119 7.84171 5.20119 8.15829 5.39645 8.35355L8.89645 11.8536C9.09171 12.0488 9.40829 12.0488 9.60355 11.8536C9.79882 11.6583 9.79882 11.3417 9.60355 11.1464L6.45711 8L9.60355 4.85355Z"
            fill="currentColor"
        />
    </s.Svg>
);

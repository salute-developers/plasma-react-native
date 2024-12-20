import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleUpFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM11.1464 9.60355C11.3417 9.79882 11.6583 9.79882 11.8536 9.60355C12.0488 9.40829 12.0488 9.09171 11.8536 8.89645L8.35355 5.39645C8.15829 5.20119 7.84171 5.20119 7.64645 5.39645L4.14645 8.89645C3.95119 9.09171 3.95119 9.40829 4.14645 9.60355C4.34171 9.79882 4.65829 9.79882 4.85355 9.60355L8 6.45711L11.1464 9.60355Z"
            fill="currentColor"
        />
    </s.Svg>
);

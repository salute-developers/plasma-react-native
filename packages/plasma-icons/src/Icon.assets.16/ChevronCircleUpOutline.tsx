import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleUpOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.1464 9.60355C11.3417 9.79882 11.6583 9.79882 11.8536 9.60355C12.0488 9.40829 12.0488 9.09171 11.8536 8.89645L8.35355 5.39645C8.15829 5.20119 7.84171 5.20119 7.64645 5.39645L4.14645 8.89645C3.95119 9.09171 3.95119 9.40829 4.14645 9.60355C4.34171 9.79882 4.65829 9.79882 4.85355 9.60355L8 6.45711L11.1464 9.60355Z"
            fill="currentColor"
        />
    </s.Svg>
);

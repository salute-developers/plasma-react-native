import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ClockCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8.525 4.85C8.525 4.56005 8.28995 4.325 8 4.325C7.71005 4.325 7.475 4.56005 7.475 4.85V8.35C7.475 8.52554 7.56273 8.68946 7.70878 8.78683L9.80878 10.1868C10.05 10.3477 10.376 10.2825 10.5368 10.0412C10.6977 9.79996 10.6325 9.47401 10.3912 9.31317L8.525 8.06903V4.85Z"
            fill="currentColor"
        />
    </s.Svg>
);

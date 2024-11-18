import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const NoteFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3467 3.34171L7.82797 1.5V5.18925L13.0004 7.29739V4.31407C13.0004 3.8872 12.742 3.50282 12.3467 3.34171ZM5.41379 14.5C6.74689 14.5 7.82759 13.3988 7.82759 12.0405C7.82759 10.6822 6.74689 9.58101 5.41379 9.58101C4.08069 9.58101 3 10.6822 3 12.0405C3 13.3988 4.08069 14.5 5.41379 14.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.54901 1.08506C7.68717 0.99217 7.86251 0.974145 8.01668 1.03698L12.5354 2.87866C13.1189 3.11649 13.5004 3.6839 13.5004 4.31402V7.2973C13.5004 7.46379 13.4175 7.61935 13.2794 7.71224C13.1412 7.80513 12.9658 7.82316 12.8117 7.76032L8.32797 5.93291V12.0405C8.32787 13.666 7.03176 14.9998 5.41379 14.9998C3.79576 14.9998 2.5 13.6659 2.5 12.0403C2.5 10.4148 3.79576 9.08088 5.41379 9.08088C6.14876 9.08088 6.81723 9.3561 7.32797 9.80886V1.5C7.32797 1.33351 7.41084 1.17795 7.54901 1.08506ZM8.32797 4.85304L12.5004 6.55358V4.31402C12.5004 4.09043 12.365 3.88909 12.158 3.8047L8.32797 2.24372V4.85304ZM5.41379 10.0809C4.36563 10.0809 3.5 10.9493 3.5 12.0403C3.5 13.1314 4.36563 13.9998 5.41379 13.9998C6.46196 13.9998 7.32759 13.1314 7.32759 12.0403C7.32759 10.9493 6.46196 10.0809 5.41379 10.0809Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleLeftOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8ZM9.60355 4.85355C9.79882 4.65829 9.79882 4.34171 9.60355 4.14645C9.40829 3.95118 9.09171 3.95118 8.89645 4.14645L5.39645 7.64645C5.20119 7.84171 5.20119 8.15829 5.39645 8.35355L8.89645 11.8536C9.09171 12.0488 9.40829 12.0488 9.60355 11.8536C9.79882 11.6583 9.79882 11.3417 9.60355 11.1464L6.45711 8L9.60355 4.85355Z"
            fill="currentColor"
        />
    </s.Svg>
);

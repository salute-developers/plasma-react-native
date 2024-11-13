import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureRightFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1866 6.81863C9.92051 6.94102 9.75 7.20711 9.75 7.50001V16.5C9.75 16.7929 9.92051 17.059 10.1866 17.1814C10.4527 17.3038 10.7657 17.2601 10.9881 17.0695L16.2381 12.5695C16.4043 12.427 16.5 12.219 16.5 12C16.5 11.7811 16.4043 11.5731 16.2381 11.4306L10.9881 6.93057C10.7657 6.73995 10.4527 6.69624 10.1866 6.81863Z"
            fill="currentColor"
        />
    </s.Svg>
);

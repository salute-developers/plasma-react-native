import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronUp: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.2071 23.9571C28.8166 24.3476 28.1834 24.3476 27.7929 23.9571L18 14.1642L8.20711 23.9571C7.81658 24.3476 7.18342 24.3476 6.79289 23.9571C6.40237 23.5666 6.40237 22.9334 6.79289 22.5429L17.2929 12.0429C17.6834 11.6524 18.3166 11.6524 18.7071 12.0429L29.2071 22.5429C29.5976 22.9334 29.5976 23.5666 29.2071 23.9571Z"
            fill="currentColor"
        />
    </s.Svg>
);

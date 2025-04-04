import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronLeft: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.9571 6.79289C24.3476 7.18342 24.3476 7.81658 23.9571 8.20711L14.1642 18L23.9571 27.7929C24.3476 28.1834 24.3476 28.8166 23.9571 29.2071C23.5666 29.5976 22.9334 29.5976 22.5429 29.2071L12.0429 18.7071C11.6524 18.3166 11.6524 17.6834 12.0429 17.2929L22.5429 6.79289C22.9334 6.40237 23.5666 6.40237 23.9571 6.79289Z"
            fill="currentColor"
        />
    </s.Svg>
);

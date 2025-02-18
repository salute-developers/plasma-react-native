import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronDown: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.79289 12.0429C7.18342 11.6524 7.81658 11.6524 8.20711 12.0429L18 21.8358L27.7929 12.0429C28.1834 11.6524 28.8166 11.6524 29.2071 12.0429C29.5976 12.4334 29.5976 13.0666 29.2071 13.4571L18.7071 23.9571C18.3166 24.3476 17.6834 24.3476 17.2929 23.9571L6.79289 13.4571C6.40237 13.0666 6.40237 12.4334 6.79289 12.0429Z"
            fill="currentColor"
        />
    </s.Svg>
);

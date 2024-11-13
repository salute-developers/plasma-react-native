import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronRight: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0429 29.2071C11.6524 28.8166 11.6524 28.1834 12.0429 27.7929L21.8358 18L12.0429 8.20711C11.6524 7.81658 11.6524 7.18342 12.0429 6.79289C12.4334 6.40237 13.0666 6.40237 13.4571 6.79289L23.9571 17.2929C24.3476 17.6834 24.3476 18.3166 23.9571 18.7071L13.4571 29.2071C13.0666 29.5976 12.4334 29.5976 12.0429 29.2071Z"
            fill="currentColor"
        />
    </s.Svg>
);

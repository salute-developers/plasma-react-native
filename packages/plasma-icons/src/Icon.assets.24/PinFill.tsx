import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PinFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.96971 2.00002C8.22391 2.00002 7.65504 2.68803 7.77287 3.44751L8.48856 8.06062C8.56193 8.53351 8.44417 9.01674 8.16275 9.39768L6.10024 12.1894C5.24921 13.3414 6.04576 15 7.45 15L10.9969 15V20.5L12.0001 22L13.0034 20.5V15L16.55 15C17.9542 15 18.7508 13.3414 17.8998 12.1894L15.8373 9.39766C15.5558 9.01672 15.4381 8.53348 15.5114 8.0606L16.2271 3.44749C16.345 2.68801 15.7761 2 15.0303 2L8.96971 2.00002Z"
            fill="currentColor"
        />
    </s.Svg>
);

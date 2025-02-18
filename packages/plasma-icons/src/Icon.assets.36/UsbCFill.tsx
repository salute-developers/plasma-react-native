import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const UsbCFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 12C5.68629 12 3 14.6863 3 18C3 21.3137 5.68629 24 9 24H27C30.3137 24 33 21.3137 33 18C33 14.6863 30.3137 12 27 12H9ZM10.125 17C9.57272 17 9.125 17.4477 9.125 18C9.125 18.5523 9.57272 19 10.125 19H25.875C26.4273 19 26.875 18.5523 26.875 18C26.875 17.4477 26.4273 17 25.875 17H10.125Z"
            fill="currentColor"
        />
    </s.Svg>
);

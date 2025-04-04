import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoubleDisclosureUp: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4545 25.5935C10.8938 26.0328 11.6062 26.0328 12.0455 25.5935L18 19.6389L23.9545 25.5935C24.3939 26.0328 25.1062 26.0328 25.5455 25.5935C25.9848 25.1541 25.9848 24.4418 25.5455 24.0025L18 16.457L10.4545 24.0025C10.0152 24.4418 10.0152 25.1541 10.4545 25.5935Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4545 17.5935C10.8938 18.0329 11.6062 18.0329 12.0455 17.5935L18 11.639L23.9545 17.5935C24.3938 18.0329 25.1062 18.0329 25.5455 17.5935C25.9848 17.1542 25.9848 16.4419 25.5455 16.0025L18 8.45703L10.4545 16.0025C10.0152 16.4419 10.0152 17.1542 10.4545 17.5935Z"
            fill="currentColor"
        />
    </s.Svg>
);

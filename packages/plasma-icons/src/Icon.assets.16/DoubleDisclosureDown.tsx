import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoubleDisclosureDown: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.49998 4.49996C4.69524 4.3047 5.01183 4.3047 5.20709 4.49996L8.00353 7.29641L10.8 4.49996C10.9952 4.3047 11.3118 4.3047 11.5071 4.49996C11.7023 4.69522 11.7023 5.01181 11.5071 5.20707L8.00353 8.71062L4.49998 5.20707C4.30472 5.01181 4.30472 4.69522 4.49998 4.49996Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.49996 7.99995C4.69522 7.80469 5.01181 7.80469 5.20707 7.99995L8.00352 10.7964L10.8 7.99995C10.9952 7.80469 11.3118 7.80469 11.5071 7.99995C11.7023 8.19521 11.7023 8.5118 11.5071 8.70706L8.00352 12.2106L4.49996 8.70706C4.3047 8.5118 4.3047 8.19521 4.49996 7.99995Z"
            fill="currentColor"
        />
    </s.Svg>
);

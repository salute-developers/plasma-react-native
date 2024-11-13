import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Text: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.2998 2.55H13.6998V3.95H8.6998V14.95H7.2998V3.95H2.2998V2.55Z"
            fill="currentColor"
        />
    </s.Svg>
);

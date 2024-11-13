import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureLeftOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.0295 6.97065C14.3224 7.26354 14.3224 7.73841 14.0295 8.03131L10.0598 12.001L14.0295 15.9706C14.3224 16.2635 14.3224 16.7384 14.0295 17.0313C13.7366 17.3242 13.2617 17.3242 12.9688 17.0313L7.93848 12.001L12.9688 6.97065C13.2617 6.67775 13.7366 6.67775 14.0295 6.97065Z"
            fill="currentColor"
        />
    </s.Svg>
);

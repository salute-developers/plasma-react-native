import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BulbSberFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M20 9.75C20 14.1683 16.4183 17.75 12 17.75C7.58172 17.75 4 14.1683 4 9.75C4 5.33172 7.58172 1.75 12 1.75C15 1.75 17.6144 3.40135 18.9836 5.84466L14.572 9.09619L11.0823 6.90862V9.54031L14.572 11.7279L19.7821 7.88773C19.9246 8.48528 20 9.10883 20 9.75Z"
            fill="currentColor"
        />
        <s.Path
            d="M8.5 19.5C8.5 19.1645 8.84824 18.971 9.16848 19.0708C10.0628 19.3497 11.0138 19.5 12 19.5C12.9861 19.5 13.9372 19.3497 14.8315 19.0708C15.1518 18.971 15.5 19.1645 15.5 19.5C15.5 21.433 13.933 23 12 23C10.067 23 8.5 21.433 8.5 19.5Z"
            fill="currentColor"
        />
    </s.Svg>
);

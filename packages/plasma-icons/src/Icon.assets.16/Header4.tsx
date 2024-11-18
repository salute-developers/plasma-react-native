import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header4: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 17 16" width={17} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.85693 8.47V11.5H8.85693V4.5H7.85693V7.28289H5.35693V4.5H4.35693V11.5H5.35693V8.47H7.85693ZM9.65771 8.84L12.5257 4.5H13.6677V8.67H14.4577V9.76H13.6677V11.5H12.6717V9.76H9.65771V8.84ZM10.7912 8.67H12.6717V5.89L10.7912 8.67Z"
            fill="currentColor"
        />
    </s.Svg>
);

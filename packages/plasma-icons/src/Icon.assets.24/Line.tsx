import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Line: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7803 3.21978C21.0732 3.51268 21.0732 3.98755 20.7803 4.28044L4.28033 20.7804C3.98744 21.0733 3.51256 21.0733 3.21967 20.7804C2.92678 20.4876 2.92678 20.0127 3.21967 19.7198L19.7197 3.21978C20.0126 2.92689 20.4874 2.92689 20.7803 3.21978Z"
            fill="currentColor"
        />
    </s.Svg>
);

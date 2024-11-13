import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Text: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path fillRule="evenodd" clipRule="evenodd" d="M6 6H30V9H19.5V33H16.5V9H6V6Z" fill="currentColor" />
    </s.Svg>
);

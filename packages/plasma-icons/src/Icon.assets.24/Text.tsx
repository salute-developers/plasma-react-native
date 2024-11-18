import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Text: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path fillRule="evenodd" clipRule="evenodd" d="M4 4H20V6H13V22H11V6H4V4Z" fill="currentColor" />
    </s.Svg>
);

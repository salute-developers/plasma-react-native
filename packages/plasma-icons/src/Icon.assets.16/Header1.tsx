import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header1: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 17 16" width={17} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.42871 8.47V11.5H8.42871V4.5H7.42871V7.32H4.92871V4.5H3.92871V11.5H4.92871V8.47H7.42871ZM9.42871 6.86634L10.8739 5.78372V10.5667H9.42871V11.5H12.9287V10.5667H11.8787V4.5H10.8739L9.42871 5.64851V6.86634Z"
            fill="currentColor"
        />
    </s.Svg>
);

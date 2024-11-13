import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RubleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 7.99821C2 4.68549 4.68549 2 7.99821 2C11.3109 2 13.9964 4.68549 13.9964 7.99821C13.9964 11.3109 11.3109 13.9964 7.99821 13.9964C4.68549 13.9964 2 11.3109 2 7.99821ZM7.99821 1C4.1332 1 1 4.1332 1 7.99821C1 11.8632 4.1332 14.9964 7.99821 14.9964C11.8632 14.9964 14.9964 11.8632 14.9964 7.99821C14.9964 4.1332 11.8632 1 7.99821 1ZM7.12017 4.51255C6.84403 4.51255 6.62017 4.7364 6.62017 5.01255V7.67384H6.06641C5.79026 7.67384 5.56641 7.89769 5.56641 8.17384C5.56641 8.44998 5.79026 8.67384 6.06641 8.67384H6.62017V9.43011H6.06641C5.79026 9.43011 5.56641 9.65396 5.56641 9.93011C5.56641 10.2063 5.79026 10.4301 6.06641 10.4301H6.62017V10.9839C6.62017 11.26 6.84403 11.4839 7.12017 11.4839C7.39631 11.4839 7.62017 11.26 7.62017 10.9839V10.4301H8.87644C9.15258 10.4301 9.37644 10.2063 9.37644 9.93011C9.37644 9.65396 9.15258 9.43011 8.87644 9.43011H7.62017V8.67384H8.70081C9.84992 8.67384 10.7815 7.7423 10.7815 6.59319C10.7815 5.44408 9.84992 4.51255 8.70082 4.51255H7.12017ZM8.70081 7.67384H7.62017V5.51255H8.70082C9.29764 5.51255 9.78146 5.99637 9.78146 6.59319C9.78146 7.19001 9.29764 7.67384 8.70081 7.67384Z"
            fill="currentColor"
        />
    </s.Svg>
);
import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const NextFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.001 13.001C14.001 13.2771 13.7771 13.501 13.501 13.501C13.2249 13.501 13.001 13.2771 13.001 13.001V2.99976C13.001 2.72361 13.2249 2.49976 13.501 2.49976C13.7771 2.49976 14.001 2.72361 14.001 2.99976V13.001ZM10.4344 7.2731C11.1129 7.68113 11.1129 8.66471 10.4344 9.07274L3.58918 13.1894C2.88935 13.6102 1.99805 13.1062 1.99805 12.2895L1.99805 4.0563C1.99805 3.23966 2.88935 2.73561 3.58918 3.15648L10.4344 7.2731Z"
            fill="currentColor"
        />
    </s.Svg>
);

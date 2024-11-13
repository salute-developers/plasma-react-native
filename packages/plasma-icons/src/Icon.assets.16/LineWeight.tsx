import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LineWeight: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 4.6H15V2.5H1V4.6ZM15 8.02324H1V6.62324H15V8.02324ZM1 11.106H15V10.056H1V11.106ZM1 13.5033H15V12.8033H1V13.5033Z"
            fill="currentColor"
        />
    </s.Svg>
);

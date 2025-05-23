import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DotsVerticalOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.4 5.20002C13.17 5.20002 13.8 4.57002 13.8 3.80002C13.8 3.03002 13.17 2.40002 12.4 2.40002C11.63 2.40002 11 3.03002 11 3.80002C11 4.57002 11.63 5.20002 12.4 5.20002ZM12.4 6.60002C11.63 6.60002 11 7.23002 11 8.00002C11 8.77002 11.63 9.40002 12.4 9.40002C13.17 9.40002 13.8 8.77002 13.8 8.00002C13.8 7.23002 13.17 6.60002 12.4 6.60002ZM12.4 10.8C11.63 10.8 11 11.43 11 12.2C11 12.97 11.63 13.6 12.4 13.6C13.17 13.6 13.8 12.97 13.8 12.2C13.8 11.43 13.17 10.8 12.4 10.8Z"
            fill="currentColor"
        />
    </s.Svg>
);

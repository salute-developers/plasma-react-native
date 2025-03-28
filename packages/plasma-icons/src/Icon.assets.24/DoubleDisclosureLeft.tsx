import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoubleDisclosureLeft: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.9697 17.0306C17.2626 16.7377 17.2626 16.2628 16.9697 15.9699L13 12.0002L16.9697 8.03055C17.2626 7.73766 17.2626 7.26279 16.9697 6.9699C16.6768 6.677 16.2019 6.677 15.909 6.9699L10.8787 12.0002L15.909 17.0306C16.2019 17.3234 16.6768 17.3234 16.9697 17.0306Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.591 17.0303C11.8839 16.7374 11.8839 16.2626 11.591 15.9697L7.62132 12L11.591 8.03033C11.8839 7.73744 11.8839 7.26256 11.591 6.96967C11.2981 6.67678 10.8232 6.67678 10.5303 6.96967L5.5 12L10.5303 17.0303C10.8232 17.3232 11.2981 17.3232 11.591 17.0303Z"
            fill="currentColor"
        />
    </s.Svg>
);

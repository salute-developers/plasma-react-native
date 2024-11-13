import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HeadphonesFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12V13.0109C4.00515 12.6875 4.60568 12.5 5.25 12.5C7.04493 12.5 8.5 13.9551 8.5 15.75V18.75C8.5 20.5449 7.04493 22 5.25 22C3.45507 22 2 20.5449 2 18.75V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V18.75C22 20.5449 20.5449 22 18.75 22C16.9551 22 15.5 20.5449 15.5 18.75V15.75C15.5 13.9551 16.9551 12.5 18.75 12.5C19.3943 12.5 19.9949 12.6875 20.5 13.0109V12C20.5 7.30558 16.6944 3.5 12 3.5Z"
            fill="currentColor"
        />
    </s.Svg>
);

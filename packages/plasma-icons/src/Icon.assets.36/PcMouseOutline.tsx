import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PcMouseOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M19 10C19 9.44772 18.5523 9 18 9C17.4477 9 17 9.44772 17 10C17 10.5523 17 15 17 15C17 15.5523 17.4477 16 18 16C18.5523 16 19 15.5523 19 15V10Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 13.5C7.5 7.70101 12.201 3 18 3C23.799 3 28.5 7.70101 28.5 13.5V22.5C28.5 28.299 23.799 33 18 33C12.201 33 7.5 28.299 7.5 22.5V13.5ZM26.5 13.5V22.5C26.5 27.1944 22.6944 31 18 31C13.3056 31 9.5 27.1944 9.5 22.5V13.5C9.5 8.80558 13.3056 5 18 5C22.6944 5 26.5 8.80558 26.5 13.5Z"
            fill="currentColor"
        />
    </s.Svg>
);

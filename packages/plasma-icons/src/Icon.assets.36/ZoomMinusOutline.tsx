import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ZoomMinusOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M10.5 14.5C9.94772 14.5 9.5 14.9477 9.5 15.5C9.5 16.0523 9.94772 16.5 10.5 16.5H20.5C21.0523 16.5 21.5 16.0523 21.5 15.5C21.5 14.9477 21.0523 14.5 20.5 14.5H10.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 15.5C5 9.70101 9.70101 5 15.5 5C21.299 5 26 9.70101 26 15.5C26 18.0394 25.0985 20.3682 23.5982 22.184L31.4571 30.0429C31.8476 30.4334 31.8476 31.0666 31.4571 31.4571C31.0666 31.8476 30.4334 31.8476 30.0429 31.4571L22.184 23.5982C20.3682 25.0985 18.0394 26 15.5 26C9.70101 26 5 21.299 5 15.5ZM15.5 7C10.8056 7 7 10.8056 7 15.5C7 20.1944 10.8056 24 15.5 24C20.1944 24 24 20.1944 24 15.5C24 10.8056 20.1944 7 15.5 7Z"
            fill="currentColor"
        />
    </s.Svg>
);

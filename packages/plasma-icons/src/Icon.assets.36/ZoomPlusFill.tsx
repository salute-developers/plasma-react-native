import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ZoomPlusFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5982 22.184C25.0985 20.3682 26 18.0394 26 15.5C26 9.70101 21.299 5 15.5 5C9.70101 5 5 9.70101 5 15.5C5 21.299 9.70101 26 15.5 26C18.0394 26 20.3682 25.0985 22.184 23.5982L30.0429 31.4571C30.4334 31.8476 31.0666 31.8476 31.4571 31.4571C31.8476 31.0666 31.8476 30.4334 31.4571 30.0429L23.5982 22.184ZM15.5 9.5C16.0523 9.5 16.5 9.94772 16.5 10.5V14.5H20.5C21.0523 14.5 21.5 14.9477 21.5 15.5C21.5 16.0523 21.0523 16.5 20.5 16.5H16.5V20.5C16.5 21.0523 16.0523 21.5 15.5 21.5C14.9477 21.5 14.5 21.0523 14.5 20.5V16.5H10.5C9.94772 16.5 9.5 16.0523 9.5 15.5C9.5 14.9477 9.94772 14.5 10.5 14.5H14.5V10.5C14.5 9.94772 14.9477 9.5 15.5 9.5Z"
            fill="currentColor"
        />
    </s.Svg>
);

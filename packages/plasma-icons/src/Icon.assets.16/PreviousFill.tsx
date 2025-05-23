import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PreviousFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.99805 13.001C1.99805 13.2771 2.2219 13.501 2.49805 13.501C2.77419 13.501 2.99805 13.2771 2.99805 13.001V2.99976C2.99805 2.72361 2.77419 2.49976 2.49805 2.49976C2.2219 2.49976 1.99805 2.72361 1.99805 2.99976V13.001ZM5.56461 7.2731C4.88612 7.68113 4.88612 8.66471 5.56461 9.07274L12.4099 13.1894C13.1097 13.6102 14.001 13.1062 14.001 12.2895L14.001 4.0563C14.001 3.23966 13.1097 2.73561 12.4099 3.15648L5.56461 7.2731Z"
            fill="currentColor"
        />
    </s.Svg>
);

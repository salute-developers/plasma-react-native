import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureRightOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.9745 17.0303C9.6816 16.7374 9.6816 16.2626 9.9745 15.9697L13.9442 12L9.9745 8.03033C9.6816 7.73744 9.6816 7.26256 9.9745 6.96967C10.2674 6.67678 10.7423 6.67678 11.0352 6.96967L16.0655 12L11.0352 17.0303C10.7423 17.3232 10.2674 17.3232 9.9745 17.0303Z"
            fill="currentColor"
        />
    </s.Svg>
);

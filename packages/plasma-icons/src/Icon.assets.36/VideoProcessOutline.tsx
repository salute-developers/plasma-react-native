import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoProcessOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 17.9994C5 10.82 10.82 5 17.9994 5C25.1788 5 30.9989 10.82 30.9989 17.9994C30.9989 25.1788 25.1788 30.9989 17.9994 30.9989C10.82 30.9989 5 25.1788 5 17.9994ZM17.9994 3C9.71548 3 3 9.71548 3 17.9994C3 26.2834 9.71548 32.9989 17.9994 32.9989C26.2834 32.9989 32.9989 26.2834 32.9989 17.9994C32.9989 9.71548 26.2834 3 17.9994 3ZM13.4489 11.9463C12.6199 11.9463 11.9478 12.6184 11.9478 13.4474V22.5528C11.9478 23.3818 12.6199 24.0539 13.4489 24.0539H22.5542C23.3833 24.0539 24.0554 23.3818 24.0554 22.5528V13.4474C24.0554 12.6184 23.3833 11.9463 22.5543 11.9463H13.4489Z"
            fill="currentColor"
        />
    </s.Svg>
);
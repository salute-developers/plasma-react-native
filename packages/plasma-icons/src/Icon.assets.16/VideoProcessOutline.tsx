import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoProcessOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 7.99821C2 4.68554 4.68576 2 7.99893 2C11.3121 2 13.9979 4.68554 13.9979 7.99821C13.9979 11.3109 11.3121 13.9964 7.99893 13.9964C4.68576 13.9964 2 11.3109 2 7.99821ZM7.99893 1C4.13358 1 1 4.13315 1 7.99821C1 11.8633 4.13358 14.9964 7.99893 14.9964C11.8643 14.9964 14.9979 11.8633 14.9979 7.99821C14.9979 4.13315 11.8643 1 7.99893 1ZM5.88999 5.18798C5.5031 5.18798 5.18945 5.50162 5.18945 5.88852V10.1075C5.18945 10.4944 5.5031 10.808 5.88999 10.808H10.1096C10.4965 10.808 10.8101 10.4944 10.8101 10.1075V5.88852C10.8101 5.50162 10.4965 5.18798 10.1096 5.18798H5.88999Z"
            fill="currentColor"
        />
    </s.Svg>
);

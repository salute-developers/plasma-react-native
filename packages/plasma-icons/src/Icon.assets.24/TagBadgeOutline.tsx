import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TagBadgeOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M16.9997 8.5C17.8281 8.5 18.4997 7.82843 18.4997 7C18.4997 6.17157 17.8281 5.5 16.9997 5.5C16.1713 5.5 15.4997 6.17157 15.4997 7C15.4997 7.82843 16.1713 8.5 16.9997 8.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9746 2C13.3115 2 12.6756 2.26339 12.2068 2.73223L3.38358 11.5555C2.30964 12.6294 2.30964 14.3706 3.38358 15.4445L8.43015 20.4911C9.5041 21.5651 11.2453 21.5651 12.3192 20.4911L21.2675 11.5429C21.7363 11.0741 21.9997 10.4382 21.9997 9.77513V4.5C21.9997 3.11929 20.8804 2 19.4997 2H13.9746ZM13.2675 3.79289C13.455 3.60536 13.7094 3.5 13.9746 3.5H19.4997C20.052 3.5 20.4997 3.94772 20.4997 4.5V9.77513C20.4997 10.0403 20.3943 10.2947 20.2068 10.4822L11.2586 19.4305C10.7704 19.9186 9.97897 19.9186 9.49081 19.4305L4.44424 14.3839C3.95609 13.8957 3.95609 13.1043 4.44424 12.6161L13.2675 3.79289Z"
            fill="currentColor"
        />
    </s.Svg>
);

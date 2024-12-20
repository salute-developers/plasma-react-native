import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowUp: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.3928 6.75028C18.6671 6.75681 18.9267 6.87575 19.1107 7.07924L26.4917 15.2405C26.8621 15.6501 26.8304 16.2825 26.4208 16.653C26.0111 17.0234 25.3788 16.9917 25.0083 16.5821L19.369 10.3466V28.2501C19.369 28.8024 18.9213 29.2501 18.369 29.2501C17.8168 29.2501 17.369 28.8024 17.369 28.2501V10.1731L10.9589 16.6166C10.5694 17.0081 9.93627 17.0097 9.54473 16.6202C9.15319 16.2307 9.15155 15.5976 9.54106 15.206L17.6601 7.04473C17.8536 6.85022 18.1185 6.74376 18.3928 6.75028Z"
            fill="currentColor"
        />
    </s.Svg>
);

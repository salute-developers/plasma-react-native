import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowLeft: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.653 9.57925C17.0234 9.98886 16.9917 10.6212 16.5821 10.9917L10.3466 16.631H28.2501C28.8024 16.631 29.2501 17.0787 29.2501 17.631C29.2501 18.1832 28.8024 18.631 28.2501 18.631H10.1731L16.6166 25.0411C17.0081 25.4306 17.0097 26.0637 16.6202 26.4553C16.2307 26.8468 15.5976 26.8485 15.206 26.4589L7.04473 18.3399C6.85022 18.1464 6.74376 17.8815 6.75028 17.6072C6.75681 17.3329 6.87575 17.0733 7.07924 16.8893L15.2405 9.50833C15.6501 9.13788 16.2825 9.16963 16.653 9.57925Z"
            fill="currentColor"
        />
    </s.Svg>
);

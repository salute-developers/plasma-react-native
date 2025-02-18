import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BulbSberFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M30 15C30 21.6274 24.6274 27 18 27C11.3726 27 6 21.6274 6 15C6 8.37258 11.3726 3 18 3C22.5001 3 26.4216 5.47703 28.4755 9.14199L21.858 14.0193L16.6235 10.7379V14.6855L21.858 17.9668L29.6732 12.2066C29.8869 13.1029 30 14.0382 30 15Z"
            fill="currentColor"
        />
        <s.Path
            d="M12.75 29.6255C12.75 29.1223 13.2724 28.832 13.7527 28.9818C15.0942 29.4001 16.5208 29.6255 18 29.6255C19.4792 29.6255 20.9058 29.4001 22.2473 28.9818C22.7276 28.832 23.25 29.1223 23.25 29.6255C23.25 32.525 20.8995 34.8755 18 34.8755C15.1005 34.8755 12.75 32.525 12.75 29.6255Z"
            fill="currentColor"
        />
    </s.Svg>
);

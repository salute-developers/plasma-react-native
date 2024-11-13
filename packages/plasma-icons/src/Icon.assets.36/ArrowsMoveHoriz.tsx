import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowsMoveHoriz: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2071 11.2929C14.5976 11.6834 14.5976 12.3166 14.2071 12.7071L8.91421 18L14.2071 23.2929C14.5976 23.6834 14.5976 24.3166 14.2071 24.7071C13.8166 25.0976 13.1834 25.0976 12.7929 24.7071L6.79289 18.7071C6.40237 18.3166 6.40237 17.6834 6.79289 17.2929L12.7929 11.2929C13.1834 10.9024 13.8166 10.9024 14.2071 11.2929ZM21.7929 11.2929C22.1834 10.9024 22.8166 10.9024 23.2071 11.2929L29.2071 17.2929C29.5976 17.6834 29.5976 18.3166 29.2071 18.7071L23.2071 24.7071C22.8166 25.0976 22.1834 25.0976 21.7929 24.7071C21.4024 24.3166 21.4024 23.6834 21.7929 23.2929L27.0858 18L21.7929 12.7071C21.4024 12.3166 21.4024 11.6834 21.7929 11.2929Z"
            fill="currentColor"
        />
    </s.Svg>
);
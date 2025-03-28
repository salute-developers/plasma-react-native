import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwitchToggleOffOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 18C3 13.0294 7.02944 9 12 9H24C28.9706 9 33 13.0294 33 18C33 22.9706 28.9706 27 24 27H12C7.02944 27 3 22.9706 3 18ZM12 11C8.13401 11 5 14.134 5 18C5 21.866 8.13401 25 12 25H24C27.866 25 31 21.866 31 18C31 14.134 27.866 11 24 11H12Z"
            fill="currentColor"
        />
        <s.Path
            d="M16.375 17.875C16.375 20.3603 14.3603 22.375 11.875 22.375C9.38972 22.375 7.375 20.3603 7.375 17.875C7.375 15.3897 9.38972 13.375 11.875 13.375C14.3603 13.375 16.375 15.3897 16.375 17.875Z"
            fill="currentColor"
        />
    </s.Svg>
);

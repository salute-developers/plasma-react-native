import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwitchToggleOnOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33 18C33 22.9706 28.9706 27 24 27H12C7.02944 27 3 22.9706 3 18C3 13.0294 7.02944 9 12 9H24C28.9706 9 33 13.0294 33 18ZM24 25C27.866 25 31 21.866 31 18C31 14.134 27.866 11 24 11H12C8.13401 11 5 14.134 5 18C5 21.866 8.13401 25 12 25H24Z"
            fill="currentColor"
        />
        <s.Path
            d="M19.625 18.125C19.625 15.6397 21.6397 13.625 24.125 13.625C26.6103 13.625 28.625 15.6397 28.625 18.125C28.625 20.6103 26.6103 22.625 24.125 22.625C21.6397 22.625 19.625 20.6103 19.625 18.125Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ZoomMinusFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3795 15.3189C17.3927 14.0719 18 12.4819 18 10.75C18 6.74594 14.7541 3.5 10.75 3.5C6.74594 3.5 3.5 6.74594 3.5 10.75C3.5 14.7541 6.74594 18 10.75 18C12.4819 18 14.0719 17.3927 15.3189 16.3795L19.9697 21.0303C20.2626 21.3232 20.7374 21.3232 21.0303 21.0303C21.3232 20.7374 21.3232 20.2626 21.0303 19.9697L16.3795 15.3189ZM6.5 10.75C6.5 10.3358 6.83579 10 7.25 10H14.25C14.6642 10 15 10.3358 15 10.75C15 11.1642 14.6642 11.5 14.25 11.5H7.25C6.83579 11.5 6.5 11.1642 6.5 10.75Z"
            fill="currentColor"
        />
    </s.Svg>
);

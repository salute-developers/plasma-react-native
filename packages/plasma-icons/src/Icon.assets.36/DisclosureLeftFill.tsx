import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureLeftFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.3532 25.6487C20.7474 25.468 21 25.0752 21 24.6428V11.3572C21 10.9248 20.7474 10.532 20.3532 10.3513C19.959 10.1706 19.4952 10.2352 19.1658 10.5166L11.388 17.1594C11.1417 17.3697 11 17.6768 11 18C11 18.3232 11.1417 18.6303 11.388 18.8406L19.1658 25.4834C19.4952 25.7648 19.959 25.8294 20.3532 25.6487Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureUpFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3513 20.8532C10.532 21.2474 10.9248 21.5 11.3572 21.5H24.6428C25.0752 21.5 25.468 21.2474 25.6487 20.8532C25.8294 20.459 25.7648 19.9952 25.4834 19.6658L18.8406 11.888C18.6303 11.6417 18.3232 11.5 18 11.5C17.6768 11.5 17.3697 11.6417 17.1594 11.888L10.5166 19.6658C10.2352 19.9952 10.1706 20.459 10.3513 20.8532Z"
            fill="currentColor"
        />
    </s.Svg>
);

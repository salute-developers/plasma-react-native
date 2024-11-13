import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlayCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.75 16.7631L17.25 12.433C17.5833 12.2406 17.5833 11.7594 17.25 11.567L9.75 7.23686C9.41667 7.04441 9 7.28497 9 7.66987L9 16.3301C9 16.715 9.41667 16.9556 9.75 16.7631Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PreviousFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 28.9982C5 29.5505 5.44772 29.9982 6 29.9982C6.55228 29.9982 7 29.5505 7 28.9982V7C7 6.44772 6.55228 6 6 6C5.44772 6 5 6.44772 5 7V28.9982ZM12.5687 16.4568C11.1282 17.3334 11.1282 19.4244 12.5687 20.301L27.5811 29.4366C29.0805 30.349 31.0007 29.2697 31.0007 27.5145L31.0007 9.2433C31.0007 7.4881 29.0805 6.40878 27.5811 7.32122L12.5687 16.4568Z"
            fill="currentColor"
        />
    </s.Svg>
);

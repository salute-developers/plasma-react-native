import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureRightFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.48329 4.54477C6.30589 4.62637 6.19253 4.80475 6.19253 5.00001V11C6.19253 11.1953 6.30589 11.3717 6.48329 11.4533C6.66069 11.5349 6.86936 11.5057 7.01762 11.3786L10.5176 8.37865C10.6284 8.28366 10.6922 8.14499 10.6922 7.99902C10.6922 7.85306 10.6284 7.71439 10.5176 7.6194L7.01762 4.6194C6.86936 4.49233 6.66069 4.46318 6.48329 4.54477Z"
            fill="currentColor"
        />
    </s.Svg>
);

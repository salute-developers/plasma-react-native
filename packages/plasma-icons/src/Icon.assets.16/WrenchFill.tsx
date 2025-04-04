import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WrenchFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.46618 2.53487C9.53857 1.46238 11.1288 1.2234 12.4319 1.81792L10.5864 3.66363C10.3131 3.93701 10.3131 4.38024 10.5864 4.65362L11.3454 5.41272C11.6188 5.6861 12.062 5.6861 12.3353 5.41272L14.1805 3.56734C14.7743 4.8704 14.5352 6.46012 13.4631 7.53227C12.4875 8.50798 11.0833 8.79382 9.85658 8.38982L4.21359 14.0333C3.59265 14.6543 2.58591 14.6543 1.96497 14.0333C1.34403 13.4123 1.34403 12.4055 1.96497 11.7845L7.60834 6.14061C7.20492 4.91403 7.49087 3.51028 8.46618 2.53487Z"
            fill="currentColor"
        />
    </s.Svg>
);

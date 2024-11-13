import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleLeftFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 18C4 25.732 10.268 32 18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18ZM21.5065 11.2408C21.8971 10.8503 21.8971 10.2172 21.5065 9.82664C21.116 9.43611 20.4829 9.43611 20.0923 9.82664L12.6253 17.2937C12.2347 17.6842 12.2347 18.3174 12.6253 18.7079L20.0923 26.175C20.4829 26.5655 21.116 26.5655 21.5065 26.175C21.8971 25.7844 21.8971 25.1513 21.5065 24.7608L14.7466 18.0008L21.5065 11.2408Z"
            fill="currentColor"
        />
    </s.Svg>
);

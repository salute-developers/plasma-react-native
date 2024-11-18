import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlayOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.125 15.1859C31.2917 16.4368 31.2917 19.5641 29.125 20.815L13.375 29.9083C11.2083 31.1592 8.5 29.5956 8.5 27.0937L8.5 8.90719C8.5 6.40534 11.2083 4.84169 13.375 6.09261L29.125 15.1859ZM28.125 19.083C28.9583 18.6019 28.9583 17.3991 28.125 16.9179L12.375 7.82466C11.5417 7.34353 10.5 7.94494 10.5 8.90719L10.5 27.0937C10.5 28.056 11.5417 28.6574 12.375 28.1763L28.125 19.083Z"
            fill="currentColor"
        />
    </s.Svg>
);

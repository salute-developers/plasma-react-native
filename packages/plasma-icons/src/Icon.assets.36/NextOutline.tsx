import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const NextOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.3974 20.7874C26.4987 19.5247 26.4987 16.4787 24.3974 15.216L9.42595 6.21931C7.25979 4.91761 4.50195 6.47783 4.50195 9.00502V26.9984C4.50195 29.5256 7.25978 31.0858 9.42595 29.7841L24.3974 20.7874ZM23.3672 16.9303C24.1754 17.4159 24.1754 18.5875 23.3672 19.0731L8.3958 28.0698C7.56266 28.5704 6.50195 27.9704 6.50195 26.9984L6.50195 9.00502C6.50195 8.03303 7.56266 7.43294 8.3958 7.9336L23.3672 16.9303ZM31.4999 7.51603C31.4999 6.96374 31.0522 6.51603 30.4999 6.51603C29.9476 6.51603 29.4999 6.96374 29.4999 7.51603V29.2382C29.4999 29.7904 29.9476 30.2382 30.4999 30.2382C31.0522 30.2382 31.4999 29.7904 31.4999 29.2382V7.51603Z"
            fill="currentColor"
        />
    </s.Svg>
);

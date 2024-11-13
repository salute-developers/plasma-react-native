import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PowerWireCableFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4316 3C12.6722 3 12.0566 3.61561 12.0566 4.37501V10.5566H11.5352C10.1351 10.5566 9 11.6856 9 13.0783V18.2382C9 20.2994 9.90552 22.2577 11.4789 23.5992L14.1469 25.8739C14.2593 25.9697 14.3239 26.1096 14.3239 26.2568V33H21.6761V26.2568C21.6761 26.1096 21.7407 25.9697 21.8531 25.8739L24.5211 23.5992C26.0945 22.2577 27 20.2994 27 18.2382V13.0783C27 11.6856 25.8649 10.5566 24.4648 10.5566H23.944V4.37501C23.944 3.61561 23.3284 3 22.569 3H13.4316ZM21.944 10.5566V5.00001H14.0566V10.5566H21.944Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RubleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.125 4.525C6.84885 4.525 6.625 4.74886 6.625 5.025V7.675H6.075C5.79885 7.675 5.575 7.89886 5.575 8.175C5.575 8.45114 5.79885 8.675 6.075 8.675H6.625V9.425H6.075C5.79885 9.425 5.575 9.64886 5.575 9.925C5.575 10.2011 5.79885 10.425 6.075 10.425H6.625V11.5H7.625V10.425H8.875C9.15114 10.425 9.375 10.2011 9.375 9.925C9.375 9.64886 9.15114 9.425 8.875 9.425H7.625V8.675H8.7C9.84599 8.675 10.775 7.74599 10.775 6.6C10.775 5.45401 9.84599 4.525 8.7 4.525H7.125ZM8.7 7.675H7.625V5.525H8.7C9.2937 5.525 9.775 6.0063 9.775 6.6C9.775 7.19371 9.2937 7.675 8.7 7.675Z"
            fill="currentColor"
        />
    </s.Svg>
);

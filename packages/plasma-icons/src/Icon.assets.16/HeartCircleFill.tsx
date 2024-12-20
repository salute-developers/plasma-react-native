import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HeartCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM3.8 6.72895C3.8 5.72455 4.65704 4.5 6.05366 4.5C6.83365 4.5 7.5 5.12349 8 5.71579C8.5 5.12349 9.16634 4.5 9.94634 4.5C11.343 4.5 12.2 5.72455 12.2 6.72895C12.2 8.63705 10.2995 10.4248 8.65938 11.7012C8.43235 11.8778 8.31884 11.9662 8.18301 12.003C8.06779 12.0342 7.93221 12.0342 7.81699 12.003C7.68116 11.9662 7.56765 11.8778 7.34062 11.7012C5.70048 10.4248 3.8 8.63705 3.8 6.72895Z"
            fill="currentColor"
        />
    </s.Svg>
);

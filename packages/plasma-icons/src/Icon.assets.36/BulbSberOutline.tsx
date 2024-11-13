import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BulbSberOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.09998 14.875C6.09998 8.31662 11.4166 3 17.975 3C24.5334 3 29.85 8.31662 29.85 14.875C29.85 21.4334 24.5334 26.75 17.975 26.75C11.4166 26.75 6.09998 21.4334 6.09998 14.875ZM17.975 5C12.5212 5 8.09998 9.42119 8.09998 14.875C8.09998 20.3288 12.5212 24.75 17.975 24.75C23.4288 24.75 27.85 20.3288 27.85 14.875C27.85 14.2843 27.7981 13.7057 27.6987 13.1435L21.833 17.4668L16.5985 14.1855V10.2379L21.833 13.5193L26.5775 10.0225C24.8824 7.02402 21.6651 5 17.975 5Z"
            fill="currentColor"
        />
        <s.Path
            d="M12.725 29.1259C12.725 28.6228 13.2473 28.3324 13.7277 28.4822C15.0692 28.9005 16.4958 29.1259 17.975 29.1259C19.4542 29.1259 20.8808 28.9005 22.2223 28.4822C22.7026 28.3324 23.225 28.6228 23.225 29.1259C23.225 32.0254 20.8745 34.3759 17.975 34.3759C15.0755 34.3759 12.725 32.0254 12.725 29.1259Z"
            fill="currentColor"
        />
    </s.Svg>
);
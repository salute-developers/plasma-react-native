import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ZoomMinusFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8717 10.1641C11.5769 9.30225 12 8.20053 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C8.20074 12 9.30262 11.5767 10.1646 10.8713L13.6964 14.4035C13.8917 14.5988 14.2083 14.5988 14.4035 14.4036C14.5988 14.2083 14.5988 13.8917 14.4036 13.6965L10.8717 10.1641ZM4.19922 7.00001C4.19922 6.72387 4.42308 6.50001 4.69922 6.50001H9.29922C9.57536 6.50001 9.79922 6.72387 9.79922 7.00001C9.79922 7.27615 9.57536 7.50001 9.29922 7.50001H4.69922C4.42308 7.50001 4.19922 7.27615 4.19922 7.00001Z"
            fill="currentColor"
        />
    </s.Svg>
);

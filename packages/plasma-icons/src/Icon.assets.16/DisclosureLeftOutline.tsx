import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureLeftOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.41222 4.64645C9.60748 4.84171 9.60748 5.15829 9.41222 5.35355L6.76578 8L9.41222 10.6464C9.60748 10.8417 9.60748 11.1583 9.41222 11.3536C9.21696 11.5488 8.90038 11.5488 8.70512 11.3536L5.35156 8L8.70512 4.64645C8.90038 4.45118 9.21696 4.45118 9.41222 4.64645Z"
            fill="currentColor"
        />
    </s.Svg>
);

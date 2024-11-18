import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const AttentionCircleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 7.99821C2 4.68561 4.68611 2 7.99987 2C11.3136 2 13.9997 4.68561 13.9997 7.99821C13.9997 11.3108 11.3136 13.9964 7.99987 13.9964C4.68611 13.9964 2 11.3108 2 7.99821ZM7.99987 1C4.13407 1 1 4.13308 1 7.99821C1 11.8633 4.13407 14.9964 7.99987 14.9964C11.8657 14.9964 14.9997 11.8633 14.9997 7.99821C14.9997 4.13308 11.8657 1 7.99987 1ZM7.99771 4.48779C8.3843 4.48779 8.69771 4.80119 8.69771 5.18779V7.99783C8.69771 8.38443 8.3843 8.69783 7.99771 8.69783C7.61111 8.69783 7.29771 8.38443 7.29771 7.99783V5.18779C7.29771 4.80119 7.61111 4.48779 7.99771 4.48779ZM8.70121 10.808C8.70121 11.196 8.38669 11.5105 7.9987 11.5105C7.61072 11.5105 7.29619 11.196 7.29619 10.808C7.29619 10.42 7.61072 10.1055 7.9987 10.1055C8.38669 10.1055 8.70121 10.42 8.70121 10.808Z"
            fill="currentColor"
        />
    </s.Svg>
);

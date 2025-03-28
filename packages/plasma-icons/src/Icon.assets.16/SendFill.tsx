import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SendFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.7035 8.46568C14.885 8.37824 15 8.1977 15 8C15 7.8023 14.885 7.62176 14.7035 7.53432L1.76681 1.30356C1.56603 1.20686 1.32474 1.24335 1.16331 1.39483C1.00189 1.54632 0.95492 1.78033 1.04584 1.98012L3.0467 6.37693L6.78587 7.83767C6.9343 7.89565 6.9343 8.10569 6.78587 8.16367L3.04596 9.62471L1.04584 14.0199C0.954919 14.2197 1.00189 14.4537 1.16331 14.6052C1.32474 14.7566 1.56603 14.7931 1.7668 14.6964L14.7035 8.46568Z"
            fill="currentColor"
        />
    </s.Svg>
);

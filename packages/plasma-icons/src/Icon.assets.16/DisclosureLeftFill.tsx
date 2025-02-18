import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureLeftFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.4975 11.4254C9.6749 11.3438 9.78857 11.1664 9.78857 10.9712V4.9712C9.78857 4.77593 9.6749 4.59853 9.4975 4.51694C9.3201 4.43535 9.11143 4.46449 8.96318 4.59157L5.46318 7.59156C5.35236 7.68655 5.28857 7.82523 5.28857 7.97119C5.28857 8.11715 5.35236 8.25583 5.46318 8.35082L8.96318 11.3508C9.11143 11.4779 9.3201 11.507 9.4975 11.4254Z"
            fill="currentColor"
        />
    </s.Svg>
);

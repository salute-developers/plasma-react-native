import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WrenchFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8586 4.46447C14.3759 2.94717 16.6257 2.6089 18.4697 3.44965L15.8638 6.05551C15.4733 6.44604 15.4733 7.0792 15.8638 7.46973L16.9245 8.53039C17.315 8.92091 17.9481 8.92091 18.3387 8.53039L20.9445 5.92456C21.7852 7.76847 21.4469 10.0183 19.9296 11.5355C18.5493 12.9158 16.5628 13.3204 14.8271 12.7492L6.84099 20.7353C5.96231 21.614 4.53769 21.614 3.65901 20.7353C2.78033 19.8566 2.78033 18.432 3.65901 17.5533L11.645 9.56734C11.0736 7.83158 11.4782 5.84486 12.8586 4.46447Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CoinRubleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M7.5 4.20577C8.86817 3.41586 10.4202 3 12 3C13.5798 3 15.1318 3.41586 16.5 4.20577C17.8682 4.99569 19.0043 6.13183 19.7942 7.5C20.5841 8.86817 21 10.4202 21 12C21 13.5798 20.5841 15.1318 19.7942 16.5C19.5871 16.8587 19.1284 16.9816 18.7697 16.7745C18.411 16.5674 18.2881 16.1087 18.4952 15.75C19.1535 14.6099 19.5 13.3165 19.5 12C19.5 10.6835 19.1535 9.39014 18.4952 8.25C17.8369 7.10986 16.8901 6.16307 15.75 5.50481C14.6099 4.84655 13.3165 4.5 12 4.5C10.6835 4.5 9.39014 4.84655 8.25 5.50481C7.10986 6.16307 6.16307 7.10986 5.50481 8.25C4.84655 9.39015 4.5 10.6835 4.5 12C4.5 13.3165 4.84655 14.6099 5.50481 15.75C5.71192 16.1087 5.58901 16.5674 5.23029 16.7745C4.87157 16.9816 4.41288 16.8587 4.20577 16.5C3.41586 15.1318 3 13.5798 3 12C3 10.4202 3.41586 8.86817 4.20577 7.5C4.99569 6.13183 6.13183 4.99569 7.5 4.20577Z"
            fill="currentColor"
        />
        <s.Path
            d="M2 19.25C2 18.8358 2.33579 18.5 2.75 18.5H21.25C21.6642 18.5 22 18.8358 22 19.25C22 19.6642 21.6642 20 21.25 20H2.75C2.33579 20 2 19.6642 2 19.25Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 7C10.3358 7 10 7.33579 10 7.75V11.5H9.25C8.83579 11.5 8.5 11.8358 8.5 12.25C8.5 12.6642 8.83579 13 9.25 13H10V14H9.25C8.83579 14 8.5 14.3358 8.5 14.75C8.5 15.1642 8.83579 15.5 9.25 15.5H10V16.25C10 16.6642 10.3358 17 10.75 17C11.1642 17 11.5 16.6642 11.5 16.25V15.5H13.25C13.6642 15.5 14 15.1642 14 14.75C14 14.3358 13.6642 14 13.25 14H11.5V13H13C14.6569 13 16 11.6569 16 10C16 8.34315 14.6569 7 13 7H10.75ZM13 11.5H11.5V8.5H13C13.8284 8.5 14.5 9.17157 14.5 10C14.5 10.8284 13.8284 11.5 13 11.5Z"
            fill="currentColor"
        />
    </s.Svg>
);

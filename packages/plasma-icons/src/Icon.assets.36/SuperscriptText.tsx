import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SuperscriptText: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M26.4976 12.2043V13.7749H32.4462V12.2043H30.6562V3.5H29.4584L26.4976 5.59903V7.34577L28.947 5.59903V12.2043H26.4976Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.0836 26.5L11.8062 10.9629H9.20411L4 26.5H6.32719L7.53659 22.8155H13.4187L14.6464 26.5H17.0836ZM10.4685 13.8928L12.5758 20.263H8.36119L10.4685 13.8928Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.3567 16.0014V19.242C18.9797 18.0656 19.9509 17.2665 21.6368 17.2665C22.8645 17.2665 23.4875 17.7549 23.4875 19.3308V19.8191H21.4169C19.163 19.8191 17.6421 20.5293 17.6421 23.0597C17.6421 25.2348 18.7415 26.5 20.5923 26.5C22.0582 26.5 23.176 25.6122 23.6158 24.3248V26.3224H25.6315V18.9978C25.6315 16.1124 24.3121 15.0026 21.6368 15.0026C20.0609 15.0026 18.9614 15.4465 18.3567 16.0014ZM23.4875 22.416C23.3959 23.1706 22.7179 24.1694 21.2703 24.1694C20.3174 24.1694 19.8043 23.6367 19.8043 22.7933C19.8043 21.7945 20.409 21.5059 21.6734 21.5059H23.4875V22.416Z"
            fill="currentColor"
        />
    </s.Svg>
);

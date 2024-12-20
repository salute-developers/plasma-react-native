import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HeartCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM9 15.2763C9 13.124 10.8365 10.5 13.8293 10.5C15.5007 10.5 16.9286 11.836 18 13.1053C19.0714 11.836 20.4993 10.5 22.1707 10.5C25.1635 10.5 27 13.124 27 15.2763C27 19.3651 22.9275 23.196 19.413 25.9311C18.9265 26.3096 18.6832 26.4989 18.3922 26.5778C18.1453 26.6447 17.8547 26.6447 17.6078 26.5778C17.3168 26.4989 17.0735 26.3096 16.587 25.9311C13.0725 23.196 9 19.3651 9 15.2763Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BulbSberFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M13.5999 6.6C13.5999 9.69279 11.0927 12.2 7.9999 12.2C4.90711 12.2 2.3999 9.69279 2.3999 6.6C2.3999 3.50721 4.90711 1 7.9999 1C10.0999 1 11.93 2.15595 12.8885 3.86626L9.80032 6.14233L7.35754 4.61103V6.45322L9.80032 7.98451L13.4474 5.29641C13.5471 5.71469 13.5999 6.15118 13.5999 6.6Z"
            fill="currentColor"
        />
        <s.Path
            d="M5.5499 13.4245C5.5499 13.1895 5.79387 13.0539 6.01821 13.1239C6.64412 13.319 7.30974 13.4242 7.9999 13.4242C8.69007 13.4242 9.35568 13.319 9.98159 13.1239C10.2059 13.0539 10.4499 13.1895 10.4499 13.4245C10.4499 14.7776 9.353 15.8745 7.9999 15.8745C6.64681 15.8745 5.5499 14.7776 5.5499 13.4245Z"
            fill="currentColor"
        />
    </s.Svg>
);

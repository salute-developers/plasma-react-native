import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Mir: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M3.8778 9.50054C3.86758 9.50072 3.85811 9.50088 3.84946 9.50093L2 9.50095V14.9555H3.78718V11.7387H3.90702L4.90328 14.9555H6.24791L7.24417 11.741H7.36401V14.9555H9.15119V9.50095L7.39773 9.50095C7.38413 9.50095 7.36931 9.50074 7.35341 9.50052C7.10368 9.4971 6.58867 9.49003 6.375 10.2112C6.2422 10.6594 5.99821 11.497 5.64304 12.7241H5.50815C5.17696 11.5602 4.93561 10.7225 4.78409 10.2112C4.57004 9.48876 4.07881 9.49712 3.8778 9.50054Z"
            fill="currentColor"
        />
        <s.Path
            d="M11.7175 12.7178V9.50095H9.89304V14.9555H11.6225C11.6225 14.9555 12.1476 14.9079 12.3829 14.3838L13.571 11.7387H13.7136V14.9555H15.5381V9.50095H13.8086C13.8086 9.50095 13.3072 9.5462 13.072 10.0726L11.8601 12.7178H11.7175Z"
            fill="currentColor"
        />
        <s.Path
            d="M19.9058 13.3307C20.7906 13.3307 21.5898 12.8142 21.8443 12.093H16.2574V14.9555H17.9924V13.3307H19.9058Z"
            fill="currentColor"
        />
        <s.Path
            d="M16.1664 9.50095H19.9894C21.4604 9.50095 22.1714 10.7456 21.9649 11.7549H18.3858C17.3032 11.7549 16.2574 10.7153 16.1664 9.50095Z"
            fill="currentColor"
        />
    </s.Svg>
);
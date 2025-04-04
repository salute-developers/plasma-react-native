import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HeadphonesFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M18 5.25C10.9584 5.25 5.25 10.9584 5.25 18V19.5164C6.00773 19.0312 6.90852 18.75 7.875 18.75C10.5674 18.75 12.75 20.9326 12.75 23.625V28.125C12.75 30.8174 10.5674 33 7.875 33C5.18261 33 3 30.8174 3 28.125V18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18V28.125C33 30.8174 30.8174 33 28.125 33C25.4326 33 23.25 30.8174 23.25 28.125V23.625C23.25 20.9326 25.4326 18.75 28.125 18.75C29.0915 18.75 29.9923 19.0312 30.75 19.5164V18C30.75 10.9584 25.0416 5.25 18 5.25Z"
            fill="currentColor"
        />
    </s.Svg>
);

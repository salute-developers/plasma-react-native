import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const FocusFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.25 18C5.25 10.9584 10.9584 5.25 18 5.25C25.0416 5.25 30.75 10.9584 30.75 18C30.75 25.0416 25.0416 30.75 18 30.75C10.9584 30.75 5.25 25.0416 5.25 18ZM18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3ZM28.5 18C28.5 23.799 23.799 28.5 18 28.5C12.201 28.5 7.5 23.799 7.5 18C7.5 12.201 12.201 7.5 18 7.5C23.799 7.5 28.5 12.201 28.5 18ZM22.5 18C22.5 20.4853 20.4853 22.5 18 22.5C15.5147 22.5 13.5 20.4853 13.5 18C13.5 15.5147 15.5147 13.5 18 13.5C20.4853 13.5 22.5 15.5147 22.5 18Z"
            fill="currentColor"
        />
    </s.Svg>
);

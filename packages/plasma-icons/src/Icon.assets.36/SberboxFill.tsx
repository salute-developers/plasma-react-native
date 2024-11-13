import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SberboxFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M28.9775 4.47702C28.831 4.33058 28.5936 4.33058 28.4472 4.47702L26.0607 6.86351C25.5351 7.38906 25.4811 8.20758 25.8986 8.79338L20.0486 14.6433C19.261 13.8654 18.7713 13.421 18.2662 13.1294C16.5258 12.1246 14.3816 12.1246 12.6412 13.1294C11.9999 13.4997 11.3834 14.1162 10.1504 15.3491L6.43807 19.0615C5.20509 20.2944 4.5886 20.9109 4.21833 21.5523C3.21352 23.2926 3.21352 25.4369 4.21833 27.1773C4.5886 27.8186 5.20509 28.4351 6.43807 29.6681C7.67105 30.901 8.28754 31.5175 8.92887 31.8878C10.6693 32.8926 12.8135 32.8926 14.5539 31.8878C15.1952 31.5175 15.8117 30.901 17.0447 29.6681L20.757 25.9557C21.99 24.7228 22.6065 24.1063 22.9767 23.4649C23.9815 21.7246 23.9815 19.5803 22.9767 17.8399C22.6851 17.3348 22.2408 16.8452 21.4628 16.0576L27.3128 10.2076C27.8986 10.6251 28.7171 10.571 29.2426 10.0455L31.6291 7.659C31.7756 7.51256 31.7756 7.27512 31.6291 7.12867L28.9775 4.47702Z"
            fill="currentColor"
        />
    </s.Svg>
);
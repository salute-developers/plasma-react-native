import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SberboxOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.8892 4.39108C28.7427 4.24464 28.5053 4.24464 28.3588 4.39109L25.9723 6.77757C25.4468 7.30313 25.3927 8.12165 25.8102 8.70745L19.8724 14.6453C19.0738 13.8575 18.4661 13.3112 17.7982 12.9818C16.2646 12.2256 14.4666 12.2256 12.933 12.9818C12.1161 13.3847 11.3891 14.1121 10.2929 15.2092L6.29616 19.2058C5.19915 20.3021 4.47171 21.0291 4.06885 21.846C3.31258 23.3796 3.31258 25.1776 4.06885 26.7112C4.47171 27.5281 5.19914 28.2551 6.29616 29.3513L6.58055 29.6357C7.67683 30.7328 8.40378 31.4602 9.22071 31.863C10.7543 32.6193 12.5523 32.6193 14.0859 31.863C14.9028 31.4602 15.6298 30.7327 16.7261 29.6357L20.7227 25.639C21.8198 24.5428 22.5472 23.8158 22.9501 22.9989C23.7063 21.4653 23.7063 19.6673 22.9501 18.1337C22.6207 17.4658 22.0744 16.8581 21.2866 16.0595L27.2244 10.1217C27.8102 10.5391 28.6288 10.4851 29.1543 9.95955L31.5408 7.57307C31.6873 7.42662 31.6873 7.18918 31.5408 7.04273L28.8892 4.39108ZM19.1663 16.7656C17.8747 15.474 17.3946 15.0128 16.9136 14.7756C15.9377 14.2943 14.7935 14.2943 13.8176 14.7756C13.3367 15.0128 12.8565 15.474 11.5649 16.7656L7.8526 20.4779C6.56104 21.7695 6.09977 22.2496 5.86259 22.7306C5.38133 23.7065 5.38133 24.8507 5.86259 25.8266C6.09976 26.3075 6.56104 26.7877 7.8526 28.0793C9.14416 29.3709 9.62435 29.8321 10.1053 30.0693C11.0812 30.5506 12.2254 30.5506 13.2013 30.0693C13.6822 29.8321 14.1624 29.3709 15.454 28.0793L19.1663 24.367C20.4579 23.0754 20.9191 22.5952 21.1563 22.1143C21.6376 21.1384 21.6376 19.9942 21.1563 19.0183C20.9191 18.5373 20.4579 18.0571 19.1663 16.7656Z"
            fill="currentColor"
        />
    </s.Svg>
);

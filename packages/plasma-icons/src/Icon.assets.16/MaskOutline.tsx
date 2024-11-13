import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MaskOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.88775 1.54325C2.33002 1.35942 1.74178 1.78218 1.74909 2.37598C1.81618 7.82277 2.92037 10.8607 4.26964 12.5439C5.63707 14.2498 7.20321 14.5004 8.00073 14.5004C8.79825 14.5004 10.3644 14.2498 11.7318 12.5439C13.0811 10.8607 14.1853 7.82277 14.2524 2.37598C14.2597 1.78218 13.6714 1.35942 13.1137 1.54325C12.2411 1.83087 10.2561 2.388 8.00073 2.388C5.74531 2.388 3.76039 1.83087 2.88775 1.54325ZM5.0499 11.9184C3.91332 10.5005 2.84022 7.77114 2.75174 2.55015C3.74822 2.86533 5.73913 3.388 8.00073 3.388C10.2623 3.388 12.2532 2.86533 13.2497 2.55015C13.1612 7.77114 12.0881 10.5005 10.9516 11.9184C9.81969 13.3305 8.57644 13.5004 8.00073 13.5004C7.42502 13.5004 6.18177 13.3305 5.0499 11.9184ZM6.95602 6.53458C6.95602 6.93685 6.48709 7.06699 6.13833 6.86651L6.00297 6.7887C5.72926 6.63136 5.39254 6.63136 5.11883 6.7887L4.98347 6.86651C4.63472 7.06699 4.16578 6.93685 4.16578 6.53458C4.16578 6.29075 4.23025 6.05122 4.35269 5.84006C4.47514 5.6289 4.65126 5.45355 4.86334 5.33163C5.07543 5.20972 5.31601 5.14553 5.5609 5.14553C5.8058 5.14553 6.04638 5.20972 6.25846 5.33163C6.47055 5.45355 6.64666 5.6289 6.76911 5.84006C6.89156 6.05122 6.95602 6.29075 6.95602 6.53458ZM9.86629 6.86651C9.51753 7.06699 9.0486 6.93685 9.0486 6.53458C9.0486 6.29075 9.11306 6.05122 9.23551 5.84006C9.35795 5.6289 9.53407 5.45355 9.74615 5.33163C9.95824 5.20972 10.1988 5.14553 10.4437 5.14553C10.6886 5.14553 10.9292 5.20972 11.1413 5.33163C11.3534 5.45355 11.5295 5.6289 11.6519 5.84006C11.7744 6.05122 11.8388 6.29075 11.8388 6.53458C11.8388 6.93685 11.3699 7.06699 11.0211 6.86651L10.8858 6.7887C10.6121 6.63136 10.2754 6.63136 10.0016 6.7887L9.86629 6.86651ZM5.26587 9.96041C5.12588 9.34725 5.78253 8.96796 6.395 9.11093L7.46323 9.36029C7.81797 9.4431 8.18702 9.44311 8.54177 9.36029L9.60999 9.11093C10.2225 8.96796 10.8791 9.34725 10.7391 9.96041C10.6556 10.3261 10.4767 10.6702 10.2161 10.966C9.9556 11.2618 9.62044 11.5014 9.23659 11.6663C8.85274 11.8312 8.43049 11.917 8.0025 11.917C7.57451 11.917 7.15226 11.8312 6.76841 11.6663C6.38456 11.5014 6.0494 11.2618 5.78885 10.966C5.52831 10.6702 5.34937 10.3261 5.26587 9.96041Z"
            fill="currentColor"
        />
    </s.Svg>
);
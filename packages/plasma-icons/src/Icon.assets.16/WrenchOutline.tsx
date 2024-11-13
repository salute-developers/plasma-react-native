import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WrenchOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.11472 2.18133C9.3394 0.956492 11.1547 0.684677 12.6416 1.36303C12.7906 1.43105 12.8969 1.56779 12.9261 1.72904C12.9552 1.89029 12.9035 2.05558 12.7876 2.17146L10.9421 4.01716C10.864 4.09528 10.864 4.22198 10.9421 4.30011L11.7011 5.0592C11.7792 5.1373 11.9058 5.1373 11.9839 5.0592L13.829 3.21386C13.9449 3.09794 14.1102 3.0462 14.2715 3.07537C14.4328 3.10454 14.5696 3.21091 14.6376 3.36007C15.3149 4.84673 15.043 6.66143 13.8187 7.88585C12.7836 8.92112 11.3262 9.27542 10.0027 8.95094L4.56735 14.387C3.75116 15.2033 2.42782 15.2033 1.61163 14.387C0.795472 13.5707 0.795472 12.2473 1.61163 11.4311L7.04871 5.99329C6.72613 4.67088 7.08072 3.21546 8.11472 2.18133ZM11.4985 2.04645C10.5557 1.87947 9.54958 2.16059 8.82187 2.88839C7.98544 3.72493 7.73888 4.92906 8.08502 5.98312C8.14385 6.16228 8.09688 6.3593 7.96355 6.49265L2.31878 12.1381C1.89309 12.5639 1.89309 13.2542 2.31878 13.6799C2.74444 14.1056 3.43455 14.1056 3.8602 13.6799L9.50357 8.03584C9.63709 7.90231 9.83444 7.85538 10.0138 7.91453C11.0685 8.26242 12.2742 8.01626 13.1115 7.17878C13.8388 6.4514 14.12 5.44589 13.9537 4.50342L12.691 5.76627C12.2224 6.23494 11.4626 6.23494 10.994 5.76627L10.235 5.00717C9.7664 4.53853 9.7664 3.77874 10.235 3.31009L11.4985 2.04645Z"
            fill="currentColor"
        />
    </s.Svg>
);
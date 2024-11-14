import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BatteryHorizChargeOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33 15C33 14.1716 32.3284 13.5 31.5 13.5H29.9323C29.8662 12.7134 29.7354 12.1284 29.4768 11.6208C29.0166 10.7177 28.2823 9.98336 27.3792 9.52317C26.3524 9 25.0083 9 22.32 9H10.68C7.99175 9 6.64762 9 5.62085 9.52317C4.71767 9.98336 3.98336 10.7177 3.52317 11.6208C3 12.6476 3 13.9917 3 16.68V19.32C3 22.0083 3 23.3524 3.52317 24.3792C3.98336 25.2823 4.71767 26.0166 5.62085 26.4768C6.64762 27 7.99175 27 10.68 27H22.32C25.0083 27 26.3524 27 27.3792 26.4768C28.2823 26.0166 29.0166 25.2823 29.4768 24.3792C29.7354 23.8716 29.8662 23.2866 29.9323 22.5H31.5C32.3284 22.5 33 21.8284 33 21V15ZM24.75 11.25C26.4069 11.25 27.75 12.5931 27.75 14.25V21.75C27.75 23.4069 26.4069 24.75 24.75 24.75H8.25C6.59315 24.75 5.25 23.4069 5.25 21.75V14.25C5.25 12.5931 6.59315 11.25 8.25 11.25H24.75ZM12.0966 18.3985C11.8537 18.7338 12.0968 19.4495 12.5147 19.4495H16.5768L15.0441 23.6268C14.9761 24.1493 15.6613 24.4145 15.9717 23.9859L21.7931 17.5009C22.036 17.1656 21.8075 16.4495 21.3896 16.4495H17.2793L18.7647 12.2727C18.8328 11.7501 18.1476 11.4848 17.8371 11.9136L12.0966 18.3985Z"
            fill="currentColor"
        />
    </s.Svg>
);
import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WalletFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4695 2.57422C10.6921 2.54971 10.8264 2.53536 10.9265 2.5328C10.9876 2.53125 11.0138 2.5352 11.021 2.53664C11.0549 2.55137 11.0833 2.57649 11.1018 2.60832C11.104 2.61519 11.1109 2.64063 11.1161 2.70098C11.1246 2.79985 11.125 2.93378 11.125 3.15568V4.82555L3.19098 4.22982C2.96573 4.2129 2.79167 4.02682 2.79167 3.80293C2.79167 3.58478 2.95716 3.40152 3.17591 3.37743L10.4695 2.57422ZM3.06088 2.35132C2.3146 2.4335 1.75 3.05871 1.75 3.80293V10.7502C1.74999 11.1825 1.74999 11.5371 1.77309 11.8267C1.79706 12.1272 1.84817 12.3991 1.97327 12.6568C2.16986 13.0616 2.4849 13.3984 2.87736 13.6233C3.1271 13.7664 3.39683 13.8374 3.69736 13.8838C3.98696 13.9285 4.34365 13.9553 4.77857 13.988L10.7249 14.4344C11.2245 14.472 11.632 14.5026 11.9635 14.4998C12.3056 14.497 12.6166 14.4596 12.9099 14.3304C13.3667 14.1291 13.7432 13.7831 13.9803 13.3468C14.1324 13.0668 14.1936 12.7622 14.2222 12.4243C14.25 12.0969 14.25 11.6919 14.25 11.1953V8.07051C14.25 7.63823 14.25 7.28366 14.2269 6.99408C14.2029 6.69356 14.1518 6.42163 14.0267 6.164C13.8301 5.75914 13.5151 5.42235 13.1226 5.19748C12.8729 5.05438 12.6032 4.98332 12.3026 4.93693C12.2589 4.93018 12.2136 4.92383 12.1667 4.91781L12.1667 3.13639C12.1667 2.94004 12.1667 2.76144 12.154 2.6134C12.1404 2.45521 12.1092 2.28076 12.0153 2.11213C11.8824 1.87347 11.6717 1.68657 11.4177 1.58197C11.2382 1.50807 11.0598 1.49664 10.8997 1.50072C10.7498 1.50454 10.5707 1.52428 10.3738 1.54598L3.06088 2.35132ZM10.1214 9.00433C9.84606 8.98366 9.60606 9.19012 9.58539 9.46549C9.56471 9.74086 9.77118 9.98085 10.0465 10.0015L11.7827 10.1319C12.058 10.1526 12.298 9.94609 12.3187 9.67072C12.3394 9.39536 12.1329 9.15537 11.8575 9.13469L10.1214 9.00433Z"
            fill="currentColor"
        />
    </s.Svg>
);
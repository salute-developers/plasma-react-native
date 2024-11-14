import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CallMissedOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.96614 21.2621C6.96447 18.8641 10.7798 17 17.875 17C24.9702 17 28.7855 18.8641 30.7838 21.2621C32.7503 23.6219 32.7501 26.2692 32.75 27.3438V27.3656C32.75 28.2194 32.4821 28.9491 31.9569 29.5052C31.4514 30.0404 30.7875 30.3304 30.1358 30.4854C28.8564 30.7895 27.3139 30.6443 26.078 30.4307C26.0372 30.4237 25.9967 30.4167 25.9566 30.4098C25.3271 30.3017 24.7977 30.2108 24.3289 29.9588C24.1299 29.8519 23.934 29.7374 23.7451 29.5757C23.5562 29.414 23.4129 29.238 23.2766 29.0579C23.0652 28.7788 22.9016 28.3802 22.7517 27.98C22.5899 27.5482 22.3931 26.9658 22.1417 26.2218L22.1352 26.2026C21.9026 25.5142 21.5177 24.8575 20.891 24.3705C20.2729 23.8903 19.3357 23.5093 17.875 23.5093C16.4143 23.5093 15.4771 23.8903 14.859 24.3705C14.2323 24.8575 13.8474 25.5142 13.6148 26.2026L13.6083 26.2218C13.3569 26.9657 13.1601 27.5482 12.9983 27.98C12.8484 28.3802 12.6848 28.7788 12.4734 29.0579C12.3371 29.238 12.1937 29.414 12.0049 29.5757C11.816 29.7374 11.6201 29.8519 11.4211 29.9588C10.9523 30.2108 10.4229 30.3017 9.79335 30.4098C9.75329 30.4167 9.71284 30.4237 9.67196 30.4307C8.43604 30.6443 6.89363 30.7895 5.61414 30.4853C4.96253 30.3304 4.29857 30.0404 3.79311 29.5052C3.26786 28.9491 3 28.2194 3 27.3656L3 27.3437C2.99991 26.2692 2.99968 23.6219 4.96614 21.2621ZM6.50258 22.5425C5.01375 24.3291 5 26.3445 5 27.3656C5 27.7791 5.11805 27.9953 5.24712 28.1319C5.39596 28.2895 5.65472 28.4392 6.07672 28.5396C6.94447 28.7459 8.1529 28.6636 9.33142 28.4599C10.1467 28.319 10.3287 28.2754 10.4741 28.1972C10.6367 28.1098 10.6811 28.0761 10.7042 28.0564C10.7273 28.0366 10.7675 27.9979 10.8789 27.8507L10.8775 27.8524C10.8775 27.8524 10.9002 27.8185 10.9449 27.7222C10.9927 27.6192 11.0514 27.4761 11.1254 27.2784C11.2743 26.8809 11.4608 26.3294 11.72 25.5623C12.0416 24.6108 12.6158 23.5808 13.6319 22.7912C14.6567 21.9949 16.0461 21.5093 17.875 21.5093C19.7038 21.5093 21.0933 21.9949 22.1181 22.7913C23.1342 23.5808 23.7084 24.6108 24.03 25.5624C24.2892 26.3295 24.4757 26.8809 24.6246 27.2784C24.6986 27.4761 24.7573 27.6192 24.8051 27.7222C24.8498 27.8185 24.8724 27.8524 24.8724 27.8524L24.8711 27.8507C24.9825 27.9979 25.0227 28.0366 25.0458 28.0564C25.0688 28.0761 25.1133 28.1098 25.2759 28.1972C25.4212 28.2754 25.6033 28.319 26.4186 28.4599C27.5971 28.6636 28.8055 28.7459 29.6733 28.5396C30.0953 28.4393 30.354 28.2896 30.5029 28.132C30.632 27.9953 30.75 27.7792 30.75 27.3656C30.75 26.3445 30.7362 24.3291 29.2474 22.5425C27.777 20.778 24.6548 19 17.875 19C11.0951 19 7.97298 20.778 6.50258 22.5425Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.9571 4.2929C29.1719 4.50771 29.2774 4.80851 29.2439 5.11044L28.4939 11.8604C28.4329 12.4093 27.9385 12.8049 27.3896 12.7439C26.8407 12.6829 26.4451 12.1885 26.5061 11.6396L26.9413 7.72292L21.6391 13.0251C19.4912 15.173 16.0088 15.173 13.8609 13.0251L8.7929 7.95711C8.40237 7.56659 8.40237 6.93342 8.7929 6.5429C9.18342 6.15238 9.81659 6.15238 10.2071 6.5429L15.2751 11.6109C16.642 12.9778 18.858 12.9778 20.2249 11.6109L25.5271 6.30871L21.6104 6.74389C21.0615 6.80488 20.5671 6.40935 20.5061 5.86044C20.4451 5.31153 20.8407 4.81711 21.3896 4.75612L28.1396 4.00612C28.4415 3.97258 28.7423 4.07809 28.9571 4.2929Z"
            fill="currentColor"
        />
    </s.Svg>
);
import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const AlarmCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.2632 3.04527C26.6524 2.65344 27.2856 2.65131 27.6774 3.04053L32.9553 8.28313C33.3472 8.67234 33.3493 9.3055 32.9601 9.69734C32.5709 10.0892 31.9377 10.0913 31.5459 9.70208L26.268 4.45947C25.8761 4.07026 25.874 3.4371 26.2632 3.04527ZM9.73736 3.04527C10.1266 3.4371 10.1244 4.07026 9.73262 4.45947L4.45473 9.70208C4.0629 10.0913 3.42974 10.0892 3.04053 9.69734C2.65131 9.3055 2.65344 8.67234 3.04527 8.28313L8.32315 3.04053C8.71499 2.65131 9.34815 2.65344 9.73736 3.04527ZM9.2389 28.0215L6.39223 30.8492C6.0004 31.2384 5.36724 31.2363 4.97803 30.8444C4.58881 30.4526 4.59094 29.8194 4.98277 29.4302L7.81971 26.6123C5.79221 24.2751 4.56641 21.2322 4.56641 17.905C4.56641 10.5345 10.5816 4.55949 18.0017 4.55949C25.4218 4.55949 31.437 10.5345 31.437 17.905C31.437 21.6089 29.918 24.9603 27.465 27.3782L29.5308 29.4302C29.9226 29.8194 29.9248 30.4526 29.5356 30.8444C29.1463 31.2363 28.5132 31.2384 28.1214 30.8492L25.9345 28.677C23.7114 30.295 20.9689 31.2505 18.0017 31.2505C14.6535 31.2505 11.5914 30.0339 9.2389 28.0215ZM16.8809 10.4776C17.5022 10.4776 18.0059 10.9812 18.0059 11.6026V17.8917H22.1057C22.727 17.8917 23.2307 18.3954 23.2307 19.0167C23.2307 19.638 22.727 20.1417 22.1057 20.1417H17.2559C16.4274 20.1417 15.7559 19.4701 15.7559 18.6417V11.6026C15.7559 10.9812 16.2595 10.4776 16.8809 10.4776Z"
            fill="currentColor"
        />
    </s.Svg>
);

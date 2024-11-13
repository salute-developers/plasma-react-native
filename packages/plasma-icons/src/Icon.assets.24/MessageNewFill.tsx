import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MessageNewFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M3.94921 11.7621C3.94921 7.18505 7.65965 3.47461 12.2367 3.47461C13.651 3.47461 14.9825 3.82886 16.1474 4.45348C14.871 5.1217 14 6.45889 14 7.99951C14 10.2087 15.7909 11.9995 18 11.9995C18.9459 11.9995 19.8151 11.6712 20.4999 11.1223C20.516 11.3334 20.5242 11.5468 20.5242 11.7621C20.5242 16.3392 16.8138 20.0496 12.2367 20.0496C11.252 20.0496 10.306 19.8776 9.42817 19.5614C8.90122 19.3716 8.38364 19.317 7.92808 19.4445L5.42496 20.1454C4.46754 20.4135 3.58532 19.5313 3.8534 18.5739L4.55428 16.0707C4.68183 15.6152 4.62718 15.0976 4.4374 14.5706C4.12123 13.6928 3.94921 12.7468 3.94921 11.7621Z"
            fill="currentColor"
        />
        <s.Path
            d="M18.125 10.4746C19.5747 10.4746 20.75 9.29936 20.75 7.84961C20.75 6.39986 19.5747 5.22461 18.125 5.22461C16.6753 5.22461 15.5 6.39986 15.5 7.84961C15.5 9.29936 16.6753 10.4746 18.125 10.4746Z"
            fill="currentColor"
        />
    </s.Svg>
);
import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MicOffFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M11.9999 2C10.0669 2 8.49994 3.67893 8.49994 5.75V11.75C8.49994 12.2471 8.59022 12.7216 8.75416 13.1557L7.45127 14.4586C7.08164 13.8449 6.83854 13.157 6.74353 12.4353C6.68946 12.0246 6.31272 11.7356 5.90205 11.7896C5.49138 11.8437 5.2023 12.2204 5.25636 12.6311C5.39487 13.6832 5.77814 14.6793 6.3658 15.5441L2.46967 19.4402C2.17678 19.7331 2.17678 20.208 2.46967 20.5009C2.76256 20.7938 3.23744 20.7938 3.53033 20.5009L7.34482 16.6864C7.34477 16.6864 7.34487 16.6864 7.34482 16.6864L8.40645 15.625C8.4064 15.625 8.40649 15.6251 8.40645 15.625L9.57605 14.4552C9.57601 14.4551 9.57609 14.4552 9.57605 14.4552L20.5009 3.53033C20.7938 3.23744 20.7938 2.76256 20.5009 2.46967C20.208 2.17678 19.7331 2.17678 19.4402 2.46967L15.4999 6.40996V5.75C15.4999 3.67893 13.9329 2 11.9999 2Z"
            fill="currentColor"
        />
        <s.Path
            d="M9.67204 16.4808L8.56313 17.5897C9.3702 18.0576 10.2676 18.3542 11.1986 18.4583V20.75C11.1986 21.1642 11.5344 21.5 11.9486 21.5C12.3628 21.5 12.6986 21.1642 12.6986 20.75V18.4583C14.0641 18.3056 15.3572 17.7388 16.3992 16.825C17.6304 15.7452 18.4271 14.2547 18.6409 12.6311C18.6949 12.2204 18.4058 11.8437 17.9952 11.7896C17.5845 11.7356 17.2078 12.0246 17.1537 12.4353C16.9875 13.6981 16.3678 14.8574 15.4102 15.6972C14.4526 16.537 13.2223 17 11.9486 17C11.1543 17 10.3769 16.82 9.67204 16.4808Z"
            fill="currentColor"
        />
        <s.Path
            d="M15.4999 10.6529L10.8572 15.2956C11.2153 15.4281 11.5998 15.5 11.9999 15.5C13.9329 15.5 15.4999 13.8211 15.4999 11.75V10.6529Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CloudFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.33287 13.0582C5.68184 14.0624 3 17.4046 3 21.375C3 26.1385 6.86154 30 11.625 30H26.25C29.9779 30 33 26.9779 33 23.25C33 20.5771 31.447 18.2692 29.1961 17.1755C29.2317 16.8299 29.25 16.4794 29.25 16.125C29.25 10.5331 24.7169 6 19.125 6C15.482 6 12.2899 7.9233 10.5064 10.8092C11.3987 10.7148 12.3017 10.7335 13.1936 10.8666C14.6348 11.0817 16.0163 11.591 17.2522 12.3627C18.4882 13.1344 19.5522 14.1521 20.3782 15.3525C21.2041 16.5529 21.7743 17.9104 22.0534 19.3405C22.1591 19.8826 21.8054 20.4077 21.2634 20.5135C20.7213 20.6193 20.1961 20.2656 20.0904 19.7235C19.8639 18.5626 19.401 17.4606 18.7305 16.4862C18.06 15.5117 17.1963 14.6856 16.193 14.0592C15.1897 13.4327 14.0682 13.0193 12.8984 12.8447C11.7285 12.6701 10.5352 12.7379 9.39269 13.0441C9.37276 13.0494 9.35281 13.0541 9.33287 13.0582Z"
            fill="currentColor"
        />
    </s.Svg>
);

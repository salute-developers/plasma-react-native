import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RegionalFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3398 3.2896C12.7322 3.6783 12.7351 4.31146 12.3464 4.7038C11.6031 5.45408 11.013 6.3453 10.6102 7.32681C10.2074 8.30834 10 9.36065 10 10.4236C10 11.4865 10.2074 12.5388 10.6102 13.5204C11.013 14.5019 11.6031 15.3931 12.3464 16.1434C12.7351 16.5357 12.7322 17.1689 12.3398 17.5576C11.9475 17.9463 11.3143 17.9433 10.9256 17.551C9.99751 16.6141 9.26176 15.5025 8.75995 14.2797C8.25815 13.0569 8 11.7466 8 10.4236C8 9.10058 8.25816 7.79032 8.75995 6.56752C9.26176 5.34471 9.99751 4.23303 10.9256 3.2962C11.3143 2.90386 11.9475 2.9009 12.3398 3.2896ZM25.0744 3.2962C24.6857 2.90386 24.0525 2.90091 23.6602 3.28961C23.2678 3.67831 23.2649 4.31146 23.6536 4.70381C24.3969 5.45409 24.987 6.34531 25.3898 7.32682C25.7926 8.30834 26 9.36066 26 10.4236C26 11.4865 25.7926 12.5388 25.3898 13.5204C24.987 14.5019 24.3969 15.3931 23.6536 16.1434C23.2649 16.5357 23.2678 17.1689 23.6602 17.5576C24.0525 17.9463 24.6857 17.9433 25.0744 17.551C26.0025 16.6142 26.7382 15.5025 27.24 14.2797C27.7418 13.0569 28 11.7466 28 10.4236C28 9.10059 27.7418 7.79032 27.24 6.56753C26.7382 5.34471 26.0025 4.23303 25.0744 3.2962ZM18.535 16.0757C18.3589 16.0925 18.1804 16.1011 18 16.1011C17.8203 16.1011 17.6426 16.0925 17.4672 16.0759L14.9159 25.2477L19.8311 20.7375L18.535 16.0757ZM15.5425 15.532C13.6674 14.6113 12.375 12.6696 12.375 10.4234C12.375 7.28764 14.8934 4.74565 18 4.74565C21.1066 4.74565 23.625 7.28764 23.625 10.4234C23.625 12.6689 22.3335 14.6099 20.4594 15.531L24.9636 31.7311C25.1116 32.2632 24.8002 32.8145 24.2681 32.9625C23.736 33.1104 23.1847 32.799 23.0367 32.2669L20.4324 22.9002L13.9021 28.8924L12.9634 32.267C12.8154 32.7991 12.2641 33.1104 11.732 32.9624C11.1999 32.8144 10.8886 32.2631 11.0366 31.731L15.5425 15.532Z"
            fill="currentColor"
        />
    </s.Svg>
);

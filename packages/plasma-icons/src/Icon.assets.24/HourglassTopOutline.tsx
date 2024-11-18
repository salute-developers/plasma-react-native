import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HourglassTopOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M10.8222 9.72179L10.844 9.73549C11.4868 10.1393 12.4108 10.2037 13.1562 9.73549L13.178 9.72179C13.8312 9.31012 14.8794 8.58059 15.7381 7.6934C16.4134 6.99576 16.8864 6.29725 16.9811 5.39069C16.9936 5.2711 16.9998 5.21131 16.9753 5.15254C16.9554 5.10467 16.9121 5.056 16.8669 5.03063C16.8114 4.99948 16.7439 4.99862 16.6091 4.99691C13.5381 4.95802 10.462 4.95802 7.39112 4.99691C7.25625 4.99862 7.18882 4.99948 7.1333 5.03063C7.08808 5.056 7.04478 5.10467 7.02485 5.15254C7.00038 5.21131 7.00662 5.2711 7.01911 5.39069C7.11381 6.29725 7.58676 6.99576 8.26204 7.6934C9.12079 8.58059 10.169 9.31012 10.8222 9.72179Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.61 22.0002C17.1995 22.0006 17.6553 22.0009 18.0484 21.8817C18.9273 21.6151 19.6151 20.9273 19.8817 20.0484C20.0009 19.6553 20.0006 19.1995 20.0002 18.61L20.0001 18.5001C20.0001 16.8184 18.97 15.3323 17.8937 14.2204C16.9742 13.2704 15.9303 12.5006 15.1783 12.0001C15.9303 11.4996 16.9742 10.7298 17.8937 9.77985C18.97 8.66792 20.0001 7.18177 20.0001 5.5001L20.0002 5.39016C20.0006 4.80075 20.0009 4.34492 19.8817 3.95182C19.6151 3.07292 18.9273 2.38513 18.0484 2.11852C17.6553 1.99928 17.1995 1.99961 16.6101 2.00005H7.39016C6.80075 1.99961 6.34491 1.99928 5.95182 2.11852C5.07292 2.38513 4.38513 3.07292 4.11852 3.95182C3.99928 4.34492 3.99961 4.80075 4.00005 5.39016L4.00011 5.5001C4.00011 7.18178 5.03018 8.66792 6.10647 9.77985C7.02597 10.7298 8.06992 11.4996 8.82192 12.0001C8.06992 12.5006 7.02597 13.2704 6.10647 14.2204C5.03018 15.3323 4.00011 16.8184 4.00011 18.5001L4.00005 18.61C3.99961 19.1995 3.99928 19.6553 4.11852 20.0484C4.38513 20.9273 5.07292 21.6151 5.95182 21.8817C6.34491 22.0009 6.80075 22.0006 7.39016 22.0002H16.61ZM17.613 20.4463C17.4624 20.492 17.2525 20.5001 16.5001 20.5001H7.5001C6.74776 20.5001 6.53785 20.492 6.38725 20.4463C5.98775 20.3251 5.67512 20.0125 5.55393 19.613C5.50825 19.4624 5.5001 19.2524 5.5001 18.5001C5.5001 17.4179 6.18496 16.296 7.18426 15.2636C8.16238 14.2531 9.32385 13.4497 10.0225 13.0094L10.0393 12.9989C10.1326 12.9401 10.2359 12.875 10.3177 12.8142C10.3878 12.7621 10.5685 12.6262 10.6682 12.3926C10.777 12.1379 10.777 11.8623 10.6682 11.6076C10.5685 11.374 10.3878 11.2381 10.3177 11.186C10.2359 11.1252 10.1327 11.0602 10.0393 11.0014L10.0225 10.9908C9.32385 10.5505 8.16238 9.74711 7.18426 8.7366C6.18496 7.70421 5.5001 6.58234 5.5001 5.5001C5.5001 4.74776 5.50825 4.53785 5.55393 4.38725C5.67512 3.98775 5.98775 3.67512 6.38725 3.55393C6.53785 3.50825 6.74776 3.50011 7.5001 3.50011H16.5001C17.2525 3.50011 17.4624 3.50825 17.613 3.55393C18.0125 3.67512 18.3251 3.98775 18.4463 4.38725C18.492 4.53785 18.5001 4.74776 18.5001 5.5001C18.5001 6.58234 17.8153 7.70421 16.8159 8.7366C15.8378 9.74711 14.6764 10.5505 13.9777 10.9908L13.9609 11.0013C13.8676 11.0601 13.7643 11.1252 13.6825 11.186C13.6124 11.2381 13.4317 11.374 13.332 11.6076C13.2232 11.8623 13.2232 12.1379 13.332 12.3926C13.4317 12.6262 13.6124 12.7621 13.6825 12.8142C13.7643 12.875 13.8676 12.94 13.9609 12.9988L13.9777 13.0094C14.6764 13.4497 15.8378 14.2531 16.8159 15.2636C17.8153 16.296 18.5001 17.4179 18.5001 18.5001C18.5001 19.2524 18.492 19.4624 18.4463 19.613C18.3251 20.0125 18.0125 20.3251 17.613 20.4463Z"
            fill="currentColor"
        />
    </s.Svg>
);

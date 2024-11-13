import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BusOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7818 3C11.5584 2.99998 10.5793 2.99996 9.78807 3.06459C8.97583 3.13095 8.27389 3.27038 7.62811 3.59941C6.5932 4.12671 5.7518 4.96811 5.22449 6.00302C4.89545 6.64879 4.75601 7.35073 4.68965 8.16297C4.62501 8.95421 4.62502 9.93331 4.62503 11.1567L4.62505 13.4377C4.47441 13.3629 4.30462 13.3208 4.125 13.3208C3.50368 13.3208 3 13.8245 3 14.4458V16.6899C3 17.3112 3.50368 17.8149 4.125 17.8149C4.30461 17.8149 4.47438 17.7728 4.625 17.698V27.5708H4.60005V30.1958C4.60005 31.6455 5.7753 32.8208 7.22505 32.8208C8.6748 32.8208 9.85005 31.6455 9.85005 30.1958V28.1961H26.15V30.1958C26.15 31.6455 27.3252 32.8208 28.775 32.8208C30.2247 32.8208 31.4 31.6455 31.4 30.1958V27.5708H31.375V17.7053C31.5256 17.7802 31.6954 17.8222 31.875 17.8222C32.4963 17.8222 33 17.3186 33 16.6972V14.4531C33 13.8318 32.4963 13.3281 31.875 13.3281C31.6954 13.3281 31.5256 13.3702 31.375 13.445L31.375 11.1568C31.375 9.93342 31.375 8.95436 31.3104 8.16314C31.244 7.35092 31.1046 6.649 30.7755 6.00324C30.2482 4.96835 29.4069 4.12696 28.372 3.59965C27.7262 3.27061 27.0243 3.13117 26.2121 3.0648C25.4209 3.00014 24.4418 3.00014 23.2184 3.00013L12.7818 3ZM29.375 14.1961V11.2001C29.375 9.92352 29.3742 9.02621 29.317 8.326C29.2608 7.63747 29.155 7.22804 28.9935 6.91121C28.658 6.25265 28.1226 5.71722 27.464 5.38166C27.1472 5.22022 26.7377 5.11442 26.0492 5.05815C25.349 5.00094 24.4517 5.00015 23.1751 5.00013L12.8251 5C11.5485 4.99998 10.6511 5.00075 9.95091 5.05795C9.26235 5.1142 8.85292 5.22 8.53608 5.38143C7.8775 5.71699 7.34206 6.25242 7.0065 6.911C6.84506 7.22783 6.73926 7.63727 6.68301 8.32582C6.6258 9.02605 6.62503 9.92339 6.62504 11.2L6.62505 14.1961H29.375ZM6.625 26.1961V16.1961H29.375V26.1961H6.625ZM11.25 23.8208C12.4926 23.8208 13.5 22.8134 13.5 21.5708C13.5 20.3281 12.4926 19.3208 11.25 19.3208C10.0074 19.3208 9 20.3281 9 21.5708C9 22.8134 10.0074 23.8208 11.25 23.8208ZM24.75 23.8208C25.9926 23.8208 27 22.8134 27 21.5708C27 20.3281 25.9926 19.3208 24.75 19.3208C23.5074 19.3208 22.5 20.3281 22.5 21.5708C22.5 22.8134 23.5074 23.8208 24.75 23.8208Z"
            fill="currentColor"
        />
    </s.Svg>
);

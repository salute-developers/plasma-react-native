import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CanisterFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5811 2.35754C13.8614 2.13328 13.9068 1.72424 13.6826 1.44392C13.4583 1.1636 13.0493 1.11815 12.7689 1.34241L12.351 1.67678C12.0753 1.89725 11.8887 2.04648 11.7278 2.21527C11.3002 2.66381 11.0028 3.21771 10.8639 3.81764C10.2854 3.56507 9.64657 3.42496 8.975 3.42496H8.76271C8.75388 3.29733 8.73874 3.18257 8.71283 3.07467C8.51532 2.25196 7.87296 1.60961 7.05025 1.41209C6.79011 1.34964 6.49001 1.34975 6.06604 1.34991L5.63252 1.34992C5.23966 1.34992 4.91959 1.34992 4.65844 1.36774C4.38894 1.38612 4.14584 1.42515 3.91396 1.5212C3.36265 1.74956 2.92463 2.18757 2.69627 2.73889C2.60022 2.97077 2.5612 3.21386 2.54281 3.48337C2.52499 3.74452 2.525 4.06458 2.525 4.45744L2.525 5.36153C2.50853 5.47195 2.5 5.58496 2.5 5.69996V12.35C2.5 13.6064 3.51855 14.625 4.775 14.625H11.425C12.6814 14.625 13.7 13.6064 13.7 12.35V8.14996C13.7 6.72762 13.0715 5.45207 12.0771 4.58584C12.0795 4.45976 12.0844 4.38152 12.0944 4.30724C12.1552 3.85835 12.3562 3.44013 12.6688 3.11225C12.7617 3.01481 12.875 2.9224 13.1976 2.66432L13.5811 2.35754ZM6.81681 2.38446C6.68745 2.35341 6.51696 2.34992 6 2.34992H5.65C5.23546 2.34992 4.9496 2.3502 4.72651 2.36542C4.50792 2.38033 4.38637 2.40791 4.29665 2.44508C3.99036 2.57194 3.74702 2.81529 3.62015 3.12157C3.58299 3.21129 3.55541 3.33285 3.54049 3.55144C3.53546 3.6252 3.53206 3.70583 3.52977 3.7957C3.88752 3.56128 4.31534 3.42496 4.775 3.42496H7.75976C7.75495 3.37938 7.74867 3.34231 7.74046 3.30812C7.63073 2.85106 7.27387 2.49419 6.81681 2.38446ZM6.17855 6.39641C5.98329 6.20115 5.66671 6.20115 5.47145 6.39641C5.27619 6.59167 5.27619 6.90825 5.47145 7.10351L7.39289 9.02496L5.47145 10.9464C5.27619 11.1417 5.27619 11.4583 5.47145 11.6535C5.66671 11.8488 5.98329 11.8488 6.17855 11.6535L8.1 9.73207L10.0214 11.6535C10.2167 11.8488 10.5333 11.8488 10.7286 11.6535C10.9238 11.4583 10.9238 11.1417 10.7286 10.9464L8.80711 9.02496L10.7286 7.10351C10.9238 6.90825 10.9238 6.59167 10.7286 6.39641C10.5333 6.20115 10.2167 6.20115 10.0214 6.39641L8.1 8.31785L6.17855 6.39641Z"
            fill="currentColor"
        />
    </s.Svg>
);

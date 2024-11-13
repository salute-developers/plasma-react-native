import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CardstackOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6069 5.5C10.6069 4.94772 11.0547 4.5 11.6069 4.5H24.3908C24.9431 4.5 25.3908 4.94772 25.3908 5.5C25.3908 6.05228 24.9431 6.5 24.3908 6.5H11.6069C11.0547 6.5 10.6069 6.05228 10.6069 5.5ZM7.9322 16.6207H28.0653C28.9607 16.6207 29.696 16.6207 30.2899 16.6713C30.9037 16.7237 31.4668 16.8361 31.983 17.1222C32.7775 17.5625 33.3984 18.2602 33.7437 19.1005C33.968 19.6463 34.0143 20.2187 33.9951 20.8344C33.9765 21.4302 33.8912 22.1605 33.7873 23.0499L33.3949 26.4098C33.3111 27.1279 33.2416 27.7233 33.1466 28.2076C33.0475 28.7128 32.9079 29.1724 32.6452 29.5984C32.2351 30.2634 31.6392 30.7938 30.9312 31.124C30.4775 31.3355 30.0048 31.4208 29.4916 31.4606C28.9995 31.4988 28.4 31.4988 27.677 31.4988H8.3205C7.59751 31.4988 6.99807 31.4988 6.50597 31.4606C5.99278 31.4208 5.52003 31.3355 5.06639 31.124C4.35833 30.7938 3.76247 30.2634 3.35236 29.5984C3.08962 29.1724 2.95001 28.7128 2.85096 28.2076C2.75598 27.7233 2.68646 27.1279 2.60261 26.4098L2.21021 23.0498C2.10633 22.1605 2.02103 21.4302 2.00246 20.8344C1.98325 20.2187 2.02958 19.6463 2.25385 19.1005C2.59909 18.2602 3.22005 17.5625 4.01457 17.1222C4.5307 16.8361 5.09385 16.7237 5.70766 16.6713C6.30156 16.6207 7.03681 16.6207 7.9322 16.6207ZM5.87763 18.6641C5.38905 18.7058 5.14655 18.7814 4.98414 18.8714C4.58688 19.0916 4.2764 19.4405 4.10378 19.8606C4.0332 20.0323 3.9862 20.282 4.00148 20.7721C4.01709 21.2725 4.09159 21.9177 4.20181 22.8615L4.58464 26.1396C4.6741 26.9056 4.73529 27.4235 4.81358 27.8228C4.88948 28.2098 4.96827 28.4085 5.05467 28.5486C5.25972 28.8811 5.55765 29.1463 5.91168 29.3114C6.06085 29.3809 6.26736 29.4361 6.66058 29.4666C7.0662 29.4981 7.58779 29.4988 8.35899 29.4988H27.6386C28.4098 29.4988 28.9313 29.4981 29.337 29.4666C29.7302 29.4361 29.9367 29.3809 30.0859 29.3114C30.4399 29.1463 30.7378 28.8811 30.9429 28.5486C31.0293 28.4085 31.1081 28.2098 31.184 27.8228C31.2622 27.4235 31.3234 26.9056 31.4129 26.1396L31.7957 22.8615C31.906 21.9177 31.9805 21.2725 31.9961 20.7721C32.0113 20.282 31.9643 20.0323 31.8938 19.8606C31.7211 19.4405 31.4107 19.0916 31.0134 18.8714C30.851 18.7814 30.6085 18.7058 30.1199 18.6641C29.6211 18.6215 28.9716 18.6207 28.0214 18.6207H7.97615C7.02597 18.6207 6.37642 18.6215 5.87763 18.6641ZM10.4903 9.04492C9.73184 9.04491 9.10779 9.0449 8.60013 9.0826C8.07514 9.12158 7.5908 9.20508 7.1337 9.41751C6.18582 9.85802 5.44803 10.6521 5.07822 11.6297C4.89988 12.1011 4.85212 12.5903 4.85174 13.1167C4.85138 13.6258 4.89715 14.2482 4.95278 15.0045L4.95555 15.0422L6.95017 14.8956C6.89109 14.0922 6.85144 13.5441 6.85174 13.1182C6.85204 12.7011 6.89259 12.486 6.94885 12.3373C7.13376 11.8485 7.50266 11.4515 7.97659 11.2312C8.12079 11.1642 8.33236 11.108 8.74823 11.0771C9.17302 11.0456 9.72249 11.0449 10.5281 11.0449H25.4692C26.2748 11.0449 26.8243 11.0456 27.2491 11.0771C27.6649 11.108 27.8765 11.1642 28.0207 11.2312C28.4946 11.4515 28.8635 11.8485 29.0484 12.3373C29.1047 12.486 29.1452 12.7011 29.1455 13.1182C29.1458 13.5441 29.1062 14.0922 29.0471 14.8956L31.0417 15.0422L31.0445 15.0046C31.1001 14.2482 31.1459 13.6258 31.1455 13.1167C31.1452 12.5903 31.0974 12.1011 30.9191 11.6297C30.5493 10.6521 29.8115 9.85802 28.8636 9.41751C28.4065 9.20508 27.9221 9.12158 27.3971 9.0826C26.8895 9.0449 26.2654 9.04491 25.507 9.04492H10.4903Z"
            fill="currentColor"
        />
    </s.Svg>
);

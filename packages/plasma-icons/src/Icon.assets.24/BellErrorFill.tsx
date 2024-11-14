import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BellErrorFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 6.5C23 9.53757 20.5376 12 17.5 12C14.4624 12 12 9.53757 12 6.5C12 3.46243 14.4624 1 17.5 1C20.5376 1 23 3.46243 23 6.5ZM15.0251 4.02513C15.2204 3.82986 15.537 3.82986 15.7322 4.02513L17.5 5.79289L19.2678 4.02513C19.463 3.82986 19.7796 3.82986 19.9749 4.02513C20.1701 4.22039 20.1701 4.53697 19.9749 4.73223L18.2071 6.5L19.9749 8.26777C20.1701 8.46303 20.1701 8.77961 19.9749 8.97487C19.7796 9.17014 19.463 9.17014 19.2678 8.97487L17.5 7.20711L15.7322 8.97487C15.537 9.17014 15.2204 9.17014 15.0251 8.97487C14.8299 8.77961 14.8299 8.46303 15.0251 8.26777L16.7929 6.5L15.0251 4.73223C14.8299 4.53697 14.8299 4.22039 15.0251 4.02513Z"
            fill="currentColor"
        />
        <s.Path
            d="M17.5 13C17.8224 13 18.1394 12.9765 18.4492 12.9312C18.4609 13.2082 18.4708 13.4835 18.48 13.7559C18.4852 13.908 18.4901 14.0591 18.495 14.209C18.5307 15.2999 18.5644 16.3276 18.6612 17.25H19.5C19.9142 17.25 20.25 17.5858 20.25 18C20.25 18.4142 19.9142 18.75 19.5 18.75H4.5C4.08579 18.75 3.75 18.4142 3.75 18C3.75 17.5858 4.08579 17.25 4.5 17.25H5.33883C5.43564 16.3276 5.46927 15.2999 5.50496 14.209C5.50987 14.0591 5.51481 13.908 5.51996 13.7559C5.57059 12.2603 5.64156 10.6734 5.91986 9.23274C6.19751 7.79554 6.69703 6.41406 7.67134 5.38943C8.28911 4.73975 9.06582 4.26649 10.022 4H10C10 3.73736 10.0517 3.47728 10.1522 3.23463C10.2528 2.99198 10.4001 2.7715 10.5858 2.58579C10.7715 2.40007 10.992 2.25275 11.2346 2.15224C11.4773 2.05173 11.7374 2 12 2C12.2369 2 12.4717 2.04209 12.6935 2.1241C11.6415 3.27904 11 4.81461 11 6.5C11 10.0899 13.9101 13 17.5 13Z"
            fill="currentColor"
        />
        <s.Path
            d="M9.17065 20C9.58249 21.1652 10.6937 22 11.9999 22C13.3062 22 14.4174 21.1652 14.8292 20H9.17065Z"
            fill="currentColor"
        />
    </s.Svg>
);
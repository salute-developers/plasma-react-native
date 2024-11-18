import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Battery60Fill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 3C14.1716 3 13.5 3.67157 13.5 4.5V6.16228C13.0674 6.23973 12.7026 6.35415 12.3708 6.52317C11.4677 6.98336 10.7334 7.71767 10.2732 8.62085C9.75 9.64762 9.75 10.9917 9.75 13.68V25.32C9.75 28.0083 9.75 29.3524 10.2732 30.3792C10.7334 31.2823 11.4677 32.0166 12.3708 32.4768C13.3976 33 14.7417 33 17.43 33H18.57C21.2583 33 22.6024 33 23.6292 32.4768C24.5323 32.0166 25.2666 31.2823 25.7268 30.3792C26.25 29.3524 26.25 28.0083 26.25 25.32V13.68C26.25 10.9917 26.25 9.64762 25.7268 8.62085C25.2666 7.71767 24.5323 6.98336 23.6292 6.52317C23.2974 6.35415 22.9326 6.23973 22.5 6.16228V4.5C22.5 3.67157 21.8284 3 21 3H15ZM13.5 30.75C12.6716 30.75 12 30.0784 12 29.25V28.5C12 28.0858 12.3358 27.75 12.75 27.75H23.25C23.6642 27.75 24 28.0858 24 28.5V29.25C24 30.0784 23.3284 30.75 22.5 30.75H13.5ZM12 26.0996C12 26.5138 12.3358 26.8496 12.75 26.8496H23.25C23.6642 26.8496 24 26.5138 24 26.0996V24.5996C24 24.1854 23.6642 23.8496 23.25 23.8496H12.75C12.3358 23.8496 12 24.1854 12 24.5996V26.0996ZM12.75 22.9497C12.3358 22.9497 12 22.6139 12 22.1997V20.6997C12 20.2855 12.3358 19.9497 12.75 19.9497H23.25C23.6642 19.9497 24 20.2855 24 20.6997V22.1997C24 22.6139 23.6642 22.9497 23.25 22.9497H12.75ZM12 18.3003C12 18.7145 12.3358 19.0503 12.75 19.0503H23.25C23.6642 19.0503 24 18.7145 24 18.3003V16.8003C24 16.3861 23.6642 16.0503 23.25 16.0503H12.75C12.3358 16.0503 12 16.3861 12 16.8003V18.3003Z"
            fill="currentColor"
        />
    </s.Svg>
);

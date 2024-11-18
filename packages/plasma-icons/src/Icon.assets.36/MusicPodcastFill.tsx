import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MusicPodcastFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5155 10.0134H15.375C15.9273 10.0134 16.375 10.4611 16.375 11.0134C16.375 11.5657 15.9273 12.0134 15.375 12.0134H10.5V14.5921H15.375C15.9273 14.5921 16.375 15.0398 16.375 15.5921C16.375 16.1444 15.9273 16.5921 15.375 16.5921H10.5V19.1709H15.375C15.9273 19.1709 16.375 19.6186 16.375 20.1709C16.375 20.7232 15.9273 21.1709 15.375 21.1709H10.6038C11.1448 24.395 13.7428 26.9215 17.0021 27.3548C17.0007 27.3765 17 27.3984 17 27.4205V30.9993H15C14.4477 30.9993 14 31.447 14 31.9993C14 32.5516 14.4477 32.9993 15 32.9993H17.9859C17.9906 32.9994 17.9953 32.9994 18 32.9994C18.0047 32.9994 18.0094 32.9994 18.0141 32.9993H21C21.5523 32.9993 22 32.5516 22 31.9993C22 31.447 21.5523 30.9993 21 30.9993H19V27.4205C19 27.3984 18.9993 27.3765 18.9979 27.3548C22.215 26.9271 24.7878 24.4601 25.3742 21.2959H20.625C20.0037 21.2959 19.5 20.7922 19.5 20.1709C19.5 19.5496 20.0037 19.0459 20.625 19.0459H25.5V16.5921H20.625C20.0727 16.5921 19.625 16.1444 19.625 15.5921C19.625 15.0398 20.0727 14.5921 20.625 14.5921H25.5V12.0134H20.625C20.0727 12.0134 19.625 11.5657 19.625 11.0134C19.625 10.4611 20.0727 10.0134 20.625 10.0134H25.4845C25.2337 6.09804 21.9787 3 18 3C14.0213 3 10.7663 6.09803 10.5155 10.0134Z"
            fill="currentColor"
        />
    </s.Svg>
);

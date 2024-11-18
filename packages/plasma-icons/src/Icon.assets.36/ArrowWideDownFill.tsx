import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowWideDownFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M8.25003 20.7568L18 30.75L27.75 20.7568H21.8304V6.75C21.8304 5.92157 21.1588 5.25 20.3304 5.25H15.6697C14.8412 5.25 14.1697 5.92157 14.1697 6.75V20.7568H8.25003Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.32852 20.3684C7.48473 19.9977 7.84781 19.7568 8.25003 19.7568H13.1697V6.75C13.1697 5.36929 14.289 4.25 15.6697 4.25H20.3304C21.7111 4.25 22.8304 5.36929 22.8304 6.75V19.7568H27.75C28.1522 19.7568 28.5153 19.9977 28.6715 20.3684C28.8277 20.739 28.7467 21.1672 28.4658 21.4551L18.7158 31.4483C18.5276 31.6412 18.2695 31.75 18 31.75C17.7305 31.75 17.4725 31.6412 17.2843 31.4483L7.53426 21.4551C7.25337 21.1672 7.17231 20.739 7.32852 20.3684ZM18 29.318L25.3773 21.7568H21.8304C21.2781 21.7568 20.8304 21.309 20.8304 20.7568V6.75C20.8304 6.47386 20.6065 6.25 20.3304 6.25H15.6697C15.3935 6.25 15.1697 6.47386 15.1697 6.75V20.7568C15.1697 21.309 14.722 21.7568 14.1697 21.7568H10.6228L18 29.318Z"
            fill="currentColor"
        />
    </s.Svg>
);

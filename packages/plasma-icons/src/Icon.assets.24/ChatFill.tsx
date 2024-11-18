import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChatFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M9.74901 3C5.74494 3 2.49901 6.24594 2.49901 10.25C2.49901 10.9221 2.59066 11.574 2.76258 12.1933C2.93471 12.8133 2.99207 13.3793 2.86123 13.8765L2.35091 15.8157C2.05856 16.9267 3.07234 17.9404 4.18326 17.6481L6.12251 17.1378C6.61969 17.0069 7.18572 17.0643 7.80575 17.2364C8.42505 17.4084 9.07693 17.5 9.74901 17.5C13.7531 17.5 16.999 14.2541 16.999 10.25C16.999 6.24594 13.7531 3 9.74901 3Z"
            fill="currentColor"
        />
        <s.Path
            d="M9.83203 18.9996C10.6685 18.9918 11.4769 18.8666 12.2416 18.6398C12.8665 18.8727 13.5429 18.9999 14.249 18.9999C14.7842 18.9999 15.3011 18.927 15.791 18.791C16.5279 18.5865 17.3926 18.4596 18.2572 18.6871L20.1965 19.1974L19.6862 17.2582C19.4586 16.3935 19.5855 15.5289 19.7901 14.792C19.9261 14.3021 19.999 13.7851 19.999 13.2499C19.999 11.7324 19.4111 10.3521 18.4507 9.32452C18.3637 8.49719 18.1614 7.7042 17.8602 6.96191C20.0349 8.2135 21.499 10.5607 21.499 13.2499C21.499 13.922 21.4074 14.5739 21.2354 15.1932C21.0633 15.8132 21.0059 16.3793 21.1368 16.8764L21.6471 18.8157C21.9395 19.9266 20.9257 20.9404 19.8148 20.648L17.8755 20.1377C17.3783 20.0069 16.8123 20.0642 16.1923 20.2364C15.573 20.4083 14.9211 20.4999 14.249 20.4999C12.5867 20.4999 11.055 19.9405 9.83203 18.9996Z"
            fill="currentColor"
        />
    </s.Svg>
);

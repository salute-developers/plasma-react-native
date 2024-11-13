import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChatOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.74998 3C5.74592 3 2.49998 6.24594 2.49998 10.25C2.49998 10.9221 2.59163 11.574 2.76356 12.1933C2.93568 12.8133 2.99305 13.3793 2.86221 13.8765L2.35188 15.8157C2.05954 16.9267 3.07332 17.9404 4.18423 17.6481L6.12348 17.1378C6.62067 17.0069 7.1867 17.0643 7.80673 17.2364C8.42603 17.4084 9.07791 17.5 9.74998 17.5C13.754 17.5 17 14.2541 17 10.25C17 6.24594 13.754 3 9.74998 3ZM3.99998 10.25C3.99998 7.07436 6.57435 4.5 9.74998 4.5C12.9256 4.5 15.5 7.07436 15.5 10.25C15.5 13.4256 12.9256 16 9.74998 16C9.2148 16 8.69785 15.9271 8.20797 15.7911C7.47108 15.5865 6.60643 15.4596 5.74174 15.6872L3.80249 16.1975L4.31282 14.2582C4.54037 13.3935 4.41346 12.5289 4.20889 11.792C4.0729 11.3021 3.99998 10.7852 3.99998 10.25Z"
            fill="currentColor"
        />
        <s.Path
            d="M9.83301 18.9996C10.6695 18.9918 11.4779 18.8666 12.2425 18.6398C12.8675 18.8727 13.5439 18.9999 14.25 18.9999C14.7852 18.9999 15.3021 18.927 15.792 18.791C16.5289 18.5865 17.3935 18.4596 18.2582 18.6871L20.1975 19.1974L19.6871 17.2582C19.4596 16.3935 19.5865 15.5289 19.7911 14.792C19.9271 14.3021 20 13.7851 20 13.2499C20 11.7324 19.4121 10.3521 18.4516 9.32452C18.3647 8.49719 18.1624 7.7042 17.8612 6.96191C20.0358 8.2135 21.5 10.5607 21.5 13.2499C21.5 13.922 21.4083 14.5739 21.2364 15.1932C21.0643 15.8132 21.0069 16.3793 21.1378 16.8764L21.6481 18.8157C21.9404 19.9266 20.9266 20.9404 19.8157 20.648L17.8765 20.1377C17.3793 20.0069 16.8133 20.0642 16.1932 20.2364C15.5739 20.4083 14.9221 20.4999 14.25 20.4999C12.5876 20.4999 11.056 19.9405 9.83301 18.9996Z"
            fill="currentColor"
        />
    </s.Svg>
);

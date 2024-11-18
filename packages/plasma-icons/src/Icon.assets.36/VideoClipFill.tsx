import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoClipFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.3245 6H13.6755C12.0373 5.99999 10.739 5.99999 9.6926 6.08548C8.62252 6.17291 7.71708 6.35532 6.89032 6.77658C5.54966 7.45968 4.45968 8.54966 3.77658 9.89032C3.35532 10.7171 3.17291 11.6225 3.08548 12.6926C2.99999 13.739 2.99999 15.0373 3 16.6755V19.3245C2.99999 20.9627 2.99999 22.261 3.08548 23.3074C3.17291 24.3775 3.35532 25.2829 3.77658 26.1097C4.45968 27.4503 5.54966 28.5403 6.89032 29.2234C7.71708 29.6447 8.62252 29.8271 9.6926 29.9145C10.739 30 12.0372 30 13.6754 30H22.3245C23.9627 30 25.261 30 26.3074 29.9145C27.3775 29.8271 28.2829 29.6447 29.1097 29.2234C30.4503 28.5403 31.5403 27.4503 32.2234 26.1097C32.6447 25.2829 32.8271 24.3775 32.9145 23.3074C33 22.261 33 20.9627 33 19.3245V16.6755C33 15.0373 33 13.739 32.9145 12.6926C32.8271 11.6225 32.6447 10.7171 32.2234 9.89032C31.5403 8.54966 30.4503 7.45968 29.1097 6.77658C28.2829 6.35532 27.3775 6.17291 26.3074 6.08548C25.261 5.99999 23.9627 5.99999 22.3245 6ZM22.875 19.299C23.875 18.7216 23.875 17.2782 22.875 16.7009L16.125 12.8038C15.125 12.2264 13.875 12.9481 13.875 14.1028V21.8971C13.875 23.0518 15.125 23.7734 16.125 23.1961L22.875 19.299Z"
            fill="currentColor"
        />
    </s.Svg>
);

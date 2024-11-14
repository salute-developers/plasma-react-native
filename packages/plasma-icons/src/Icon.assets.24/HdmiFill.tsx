import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HdmiFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.4395 15.7421C18.6161 15.6339 18.7674 15.4826 19.0701 15.1799L21.1799 13.0701C21.4826 12.7674 21.6339 12.6161 21.7421 12.4395C21.8381 12.2829 21.9088 12.1122 21.9516 11.9337C22 11.7323 22 11.5182 22 11.0902V10.8C22 9.81991 22 9.32986 21.8093 8.95552C21.6415 8.62623 21.3738 8.35852 21.0445 8.19074C20.6701 8 20.1801 8 19.2 8L4.8 8C3.81991 8 3.32986 8 2.95552 8.19074C2.62623 8.35852 2.35852 8.62623 2.19074 8.95552C2 9.32986 2 9.81991 2 10.8V11.0902C2 11.5182 2 11.7323 2.04835 11.9337C2.09122 12.1122 2.16193 12.2829 2.25788 12.4395C2.3661 12.6161 2.51744 12.7674 2.8201 13.0701L4.9299 15.1799C5.23256 15.4826 5.3839 15.6339 5.5605 15.7421C5.71708 15.8381 5.88778 15.9088 6.06634 15.9516C6.26775 16 6.48176 16 6.9098 16L17.0902 16C17.5182 16 17.7323 16 17.9337 15.9516C18.1122 15.9088 18.2829 15.8381 18.4395 15.7421ZM16.25 12.5C16.6642 12.5 17 12.1642 17 11.75C17 11.3358 16.6642 11 16.25 11L7.75 11C7.33579 11 7 11.3358 7 11.75C7 12.1642 7.33579 12.5 7.75 12.5L16.25 12.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
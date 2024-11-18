import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const GiftFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.71967 2.71986C7.70292 1.73661 9.29708 1.73661 10.2803 2.71986L12 4.43953L13.7197 2.71986C14.7029 1.73661 16.2971 1.73661 17.2803 2.71986C18.2636 3.70311 18.2636 5.29727 17.2803 6.28052L16.5607 7.00019H19.75C20.4404 7.00019 21 7.55983 21 8.25019V11.5002H12.75V7.00024H11.25V11.5002H3V8.25019C3 7.55983 3.55964 7.00019 4.25 7.00019H7.43934L6.71967 6.28052C5.73642 5.29727 5.73642 3.70311 6.71967 2.71986ZM14.4393 7.00019L12.75 7.00024V5.81085L14.7803 3.78052C15.1778 3.38306 15.8222 3.38306 16.2197 3.78052C16.6171 4.17798 16.6171 4.8224 16.2197 5.21986L14.4393 7.00019ZM11.25 5.81085V7.00024L9.56066 7.00019L7.78033 5.21986C7.38287 4.8224 7.38287 4.17798 7.78033 3.78052C8.17779 3.38306 8.82221 3.38306 9.21967 3.78052L11.25 5.81085Z"
            fill="currentColor"
        />
        <s.Path d="M4 13.0002V18.7502C4 20.5451 5.45507 22.0002 7.25 22.0002H11.25V13.0002H4Z" fill="currentColor" />
        <s.Path
            d="M12.75 22.0002H16.75C18.5449 22.0002 20 20.5451 20 18.7502V13.0002H12.75V22.0002Z"
            fill="currentColor"
        />
    </s.Svg>
);

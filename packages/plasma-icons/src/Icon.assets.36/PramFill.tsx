import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PramFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0294 4.75C20.0294 4.19772 20.4772 3.75 21.0294 3.75C26.8109 3.75 31.4986 8.43429 31.4986 14.2138C31.4986 14.7826 31.4531 15.3415 31.3654 15.8869C30.5634 20.8713 26.2418 24.6777 21.0294 24.6777H16.4842C11.5693 24.6777 7.44634 21.2932 6.31947 16.7281H5.5C4.94772 16.7281 4.5 16.2803 4.5 15.7281C4.5 15.1758 4.94772 14.7281 5.5 14.7281H20.0294V4.75ZM22.0294 14.7281H29.4833C29.4935 14.558 29.4986 14.3866 29.4986 14.2138C29.4986 9.87797 26.236 6.30285 22.0294 5.80838V14.7281ZM29.119 16.7281H8.39473C9.46587 20.1744 12.683 22.6777 16.4842 22.6777H21.0294C24.8306 22.6777 28.0478 20.1744 29.119 16.7281ZM27.4684 27.706C26.765 27.706 26.1958 28.2757 26.1958 28.9773C26.1958 29.6789 26.765 30.2487 27.4684 30.2487C28.1718 30.2487 28.741 29.6789 28.741 28.9773C28.741 28.2757 28.1718 27.706 27.4684 27.706ZM24.1958 28.9773C24.1958 27.1701 25.6615 25.706 27.4684 25.706C29.2753 25.706 30.741 27.1701 30.741 28.9773C30.741 30.7846 29.2753 32.2487 27.4684 32.2487C25.6615 32.2487 24.1958 30.7846 24.1958 28.9773ZM8.77246 28.9773C8.77246 28.2757 9.34169 27.706 10.0451 27.706C10.7484 27.706 11.3177 28.2757 11.3177 28.9773C11.3177 29.6789 10.7484 30.2487 10.0451 30.2487C9.34169 30.2487 8.77246 29.6789 8.77246 28.9773ZM10.0451 25.706C8.23819 25.706 6.77246 27.1701 6.77246 28.9773C6.77246 30.7846 8.23819 32.2487 10.0451 32.2487C11.8519 32.2487 13.3177 30.7846 13.3177 28.9773C13.3177 27.1701 11.8519 25.706 10.0451 25.706Z"
            fill="currentColor"
        />
        <s.Path d="M21 5L28.5 8L30 16L28 21L23 23.5L12.5 23L8 19L7.5 16H21V5Z" fill="currentColor" />
    </s.Svg>
);
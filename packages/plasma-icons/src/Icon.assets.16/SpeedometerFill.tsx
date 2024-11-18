import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SpeedometerFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM6.45013 4.25829C7.27381 3.91711 8.18705 3.85725 9.04822 4.088C9.31495 4.15947 9.58912 4.00118 9.66059 3.73445C9.73206 3.46771 9.57377 3.19355 9.30704 3.12207C8.23324 2.83435 7.09451 2.90899 6.06745 3.33441C5.04039 3.75983 4.18241 4.51226 3.62657 5.475C3.07073 6.43774 2.8481 7.55699 2.9932 8.65916C3.13831 9.76132 3.64304 10.7848 4.42911 11.5709C4.62437 11.7662 4.94096 11.7662 5.13622 11.5709C5.33148 11.3756 5.33148 11.059 5.13622 10.8638C4.5058 10.2334 4.10102 9.41255 3.98465 8.52863C3.86828 7.64472 4.04683 6.7471 4.4926 5.975C4.93837 5.2029 5.62645 4.59947 6.45013 4.25829ZM12.2656 6.33941C12.5323 6.26794 12.8065 6.42623 12.8779 6.69297C13.1074 7.54922 13.1074 8.45078 12.8779 9.30704C12.6485 10.1633 12.1977 10.9441 11.5709 11.5709C11.3756 11.7662 11.059 11.7662 10.8638 11.5709C10.6685 11.3756 10.6685 11.059 10.8638 10.8638C11.3665 10.3611 11.728 9.73492 11.912 9.04822C12.096 8.36152 12.096 7.63848 11.912 6.95178C11.8405 6.68505 11.9988 6.41088 12.2656 6.33941ZM11.4985 4.44176C11.3441 4.3122 11.1184 4.31423 10.9664 4.44653L7.20769 7.71707C6.65313 8.1996 6.66088 9.06344 7.224 9.53596C7.78712 10.0085 8.63918 9.86609 9.01809 9.23617L11.5862 4.96666C11.6901 4.79394 11.6529 4.57132 11.4985 4.44176Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header3: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6582 12.705V17.25H12.0646V6.75H10.6582V10.968H6.89486V6.75H5.5V17.25H6.89486V12.705H10.6582ZM13.0639 7.7751C13.4984 7.2772 14.4697 6.75 15.8116 6.75C17.6646 6.76464 18.6614 7.74582 18.6614 9.35669C18.6614 10.5722 18.0608 11.4069 17.1407 11.7877C18.3292 12.0366 18.9937 12.8421 18.9937 14.2333C18.9937 15.932 17.9074 17.2207 15.7221 17.25C14.3547 17.25 13.3706 16.6496 13 16.2103V14.2626C13.5623 15.0094 14.5208 15.522 15.6965 15.5073C16.8851 15.4927 17.5113 14.9362 17.5113 14.0429C17.5113 13.0764 16.9873 12.5931 15.6071 12.5931H14.5975V11.2751H15.3387C16.5144 11.2751 17.1662 10.8358 17.1662 9.8546C17.1662 8.91737 16.6422 8.49268 15.5943 8.49268C14.4952 8.52197 13.6518 8.94666 13.0639 9.7228V7.7751Z"
            fill="currentColor"
        />
    </s.Svg>
);
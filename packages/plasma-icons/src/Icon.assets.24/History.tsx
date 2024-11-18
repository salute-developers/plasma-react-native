import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const History: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M20.5 11.999C20.5 7.3046 16.6944 3.49902 12 3.49902C8.89506 3.49902 6.17764 5.16396 4.69406 7.6518H6.34722C6.76144 7.6518 7.09722 7.98759 7.09722 8.4018C7.09722 8.81602 6.76144 9.1518 6.34722 9.1518H2.75C2.33579 9.1518 2 8.81602 2 8.4018V4.80458C2 4.39037 2.33579 4.05458 2.75 4.05458C3.16421 4.05458 3.5 4.39037 3.5 4.80458V6.72891C5.26364 3.89034 8.4103 1.99902 12 1.99902C17.5229 1.99902 22 6.47618 22 11.999C22 17.5219 17.5229 21.999 12 21.999C7.85532 21.999 4.30126 19.4777 2.78465 15.8881C2.62344 15.5066 2.80207 15.0666 3.18362 14.9054C3.56518 14.7442 4.00518 14.9228 4.16639 15.3044C5.45667 18.3582 8.47919 20.499 12 20.499C16.6944 20.499 20.5 16.6934 20.5 11.999Z"
            fill="currentColor"
        />
        <s.Path
            d="M10.5001 8.25C10.5001 7.69772 10.9478 7.25 11.5001 7.25C12.0524 7.25 12.5001 7.69772 12.5001 8.25V12.6726L14.5982 13.884C15.0765 14.1601 15.2404 14.7717 14.9643 15.25C14.6881 15.7283 14.0765 15.8922 13.5982 15.616L11.0182 14.1264C10.9775 14.104 10.9385 14.0788 10.9016 14.0512C10.6755 13.882 10.5234 13.6194 10.5026 13.3205C10.5005 13.2919 10.4997 13.2632 10.5001 13.2344V8.25Z"
            fill="currentColor"
        />
    </s.Svg>
);

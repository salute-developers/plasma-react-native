import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CameraVideoAddOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M7.13793 11H19.5517C20.7325 11 21.6897 11.9572 21.6897 13.1379V22.8621C21.6897 24.0428 20.7325 25 19.5517 25H19.3883C19.4619 25.4893 19.5 25.9902 19.5 26.5C19.5 26.6677 19.4959 26.8344 19.4877 27H19.5517C21.837 27 23.6897 25.1474 23.6897 22.8621V13.1379C23.6897 10.8526 21.837 9 19.5517 9H7.13793C4.85261 9 3 10.8526 3 13.1379V18.9004C3.60786 18.38 4.27889 17.9313 5 17.5673V13.1379C5 11.9572 5.95718 11 7.13793 11Z"
            fill="currentColor"
        />
        <s.Path
            d="M33.0004 13.1988C33.0004 11.9261 31.4616 11.2887 30.5617 12.1886L25.7231 17.027C25.1799 17.5702 25.1635 18.4456 25.6859 19.0088L30.5245 24.2242C31.4078 25.1763 33.0004 24.5513 33.0004 23.2526V13.1988Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 26.5C18 31.1944 14.1944 35 9.5 35C4.80558 35 1 31.1944 1 26.5C1 21.8056 4.80558 18 9.5 18C14.1944 18 18 21.8056 18 26.5ZM9.50013 21.1136C9.91435 21.1136 10.2501 21.4494 10.2501 21.8636V25.75H14.1365C14.5507 25.75 14.8865 26.0858 14.8865 26.5C14.8865 26.9142 14.5507 27.25 14.1365 27.25H10.2501V31.1364C10.2501 31.5506 9.91435 31.8864 9.50013 31.8864C9.08592 31.8864 8.75013 31.5506 8.75013 31.1364V27.25H4.86377C4.44956 27.25 4.11377 26.9142 4.11377 26.5C4.11377 26.0858 4.44956 25.75 4.86377 25.75H8.75013V21.8636C8.75013 21.4494 9.08592 21.1136 9.50013 21.1136Z"
            fill="currentColor"
        />
    </s.Svg>
);
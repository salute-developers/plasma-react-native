import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CaseDiagramFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1211 3H12.8789C13.2742 2.99999 13.6154 2.99998 13.8963 3.02293C14.1928 3.04716 14.4877 3.10064 14.7715 3.24524C15.1948 3.46095 15.5391 3.80516 15.7548 4.22852C15.8994 4.51231 15.9528 4.80722 15.9771 5.10373C16 5.38466 16 5.72574 16 6.1211L16 7.00002C17.6878 7.00049 18.5562 7.01322 19.2255 7.35423C19.837 7.66582 20.3342 8.163 20.6458 8.77453C21 9.46975 21 10.3798 21 12.2V14.8C21 16.6202 21 17.5303 20.6458 18.2255C20.3342 18.837 19.837 19.3342 19.2255 19.6458C18.5303 20 17.6202 20 15.8 20H8.2C6.37983 20 5.46974 20 4.77453 19.6458C4.163 19.3342 3.66582 18.837 3.35423 18.2255C3 17.5303 3 16.6202 3 14.8V12.2C3 10.3798 3 9.46975 3.35423 8.77453C3.66582 8.163 4.163 7.66582 4.77453 7.35423C5.4438 7.01322 6.31221 7.00049 8 7.00002L8 6.12109C7.99999 5.72573 7.99997 5.38466 8.02293 5.10373C8.04715 4.80722 8.10064 4.51231 8.24524 4.22852C8.46095 3.80516 8.80516 3.46095 9.22852 3.24524C9.51231 3.10064 9.80722 3.04716 10.1037 3.02293C10.3846 2.99998 10.7258 2.99999 11.1211 3ZM14.5 6.15V7H9.5V6.15C9.5 5.71759 9.50058 5.43838 9.51795 5.22588C9.53459 5.02213 9.56285 4.94659 9.58175 4.90951C9.65365 4.76839 9.76839 4.65365 9.90951 4.58175C9.94659 4.56285 10.0221 4.53459 10.2259 4.51795C10.4384 4.50059 10.7176 4.5 11.15 4.5H12.85C13.2824 4.5 13.5616 4.50059 13.7741 4.51795C13.9779 4.53459 14.0534 4.56285 14.0905 4.58175C14.2316 4.65365 14.3463 4.76839 14.4183 4.90951C14.4372 4.94659 14.4654 5.02213 14.4821 5.22588C14.4994 5.43838 14.5 5.71759 14.5 6.15ZM17.5303 12.0303C17.8232 11.7374 17.8232 11.2626 17.5303 10.9697C17.2374 10.6768 16.7626 10.6768 16.4697 10.9697L13 14.4393L10.5303 11.9697C10.2374 11.6768 9.76256 11.6768 9.46967 11.9697L6.46967 14.9697C6.17678 15.2626 6.17678 15.7374 6.46967 16.0303C6.76256 16.3232 7.23744 16.3232 7.53033 16.0303L10 13.5607L12.4697 16.0303C12.7626 16.3232 13.2374 16.3232 13.5303 16.0303L17.5303 12.0303Z"
            fill="currentColor"
        />
    </s.Svg>
);
import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CaseDiagramOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M17.5303 12.0303C17.8232 11.7374 17.8232 11.2626 17.5303 10.9697C17.2374 10.6768 16.7626 10.6768 16.4697 10.9697L13 14.4393L10.5303 11.9697C10.2374 11.6768 9.76256 11.6768 9.46967 11.9697L6.46967 14.9697C6.17678 15.2626 6.17678 15.7374 6.46967 16.0303C6.76256 16.3232 7.23744 16.3232 7.53033 16.0303L10 13.5607L12.4697 16.0303C12.7626 16.3232 13.2374 16.3232 13.5303 16.0303L17.5303 12.0303Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1211 3H12.8789C13.2743 2.99999 13.6154 2.99998 13.8963 3.02293C14.1928 3.04715 14.4877 3.10064 14.7715 3.24524C15.1948 3.46095 15.5391 3.80516 15.7548 4.22852C15.8994 4.51231 15.9528 4.80722 15.9771 5.10373C16 5.38466 16 5.72574 16 6.1211L16 7L16.2814 7C16.9548 6.99999 17.5055 6.99999 17.9531 7.03655C18.4163 7.0744 18.8347 7.15514 19.2255 7.35423C19.837 7.66582 20.3342 8.16301 20.6458 8.77453C20.8449 9.16527 20.9256 9.58367 20.9634 10.0469C21 10.4945 21 11.0452 21 11.7186V15.2814C21 15.9548 21 16.5055 20.9634 16.9531C20.9256 17.4163 20.8449 17.8347 20.6458 18.2255C20.3342 18.837 19.837 19.3342 19.2255 19.6458C18.8347 19.8449 18.4163 19.9256 17.9531 19.9634C17.5055 20 16.9548 20 16.2815 20H7.71856C7.04523 20 6.49448 20 6.04693 19.9634C5.58367 19.9256 5.16527 19.8449 4.77453 19.6458C4.163 19.3342 3.66582 18.837 3.35423 18.2255C3.15514 17.8347 3.0744 17.4163 3.03655 16.9531C2.99998 16.5055 2.99999 15.9548 3 15.2814V11.7186C2.99999 11.0452 2.99998 10.4945 3.03655 10.0469C3.0744 9.58367 3.15514 9.16527 3.35423 8.77453C3.66582 8.16301 4.163 7.66582 4.77453 7.35423C5.16527 7.15514 5.58367 7.0744 6.04693 7.03655C6.49449 6.99999 7.0452 6.99999 7.71858 7L8 7L8 6.12109C7.99999 5.72573 7.99998 5.38466 8.02293 5.10373C8.04715 4.80722 8.10064 4.51231 8.24524 4.22852C8.46095 3.80516 8.80516 3.46095 9.22852 3.24524C9.51231 3.10064 9.80722 3.04715 10.1037 3.02293C10.3847 2.99998 10.7257 2.99999 11.1211 3ZM14.5 6.15V7H9.5V6.15C9.5 5.71759 9.50058 5.43838 9.51795 5.22588C9.53459 5.02213 9.56285 4.94659 9.58175 4.90951C9.65365 4.76839 9.76839 4.65365 9.90951 4.58175C9.94659 4.56285 10.0221 4.53459 10.2259 4.51795C10.4384 4.50059 10.7176 4.5 11.15 4.5H12.85C13.2824 4.5 13.5616 4.50059 13.7741 4.51795C13.9779 4.53459 14.0534 4.56285 14.0905 4.58175C14.2316 4.65365 14.3463 4.76839 14.4183 4.90951C14.4372 4.94659 14.4654 5.02213 14.4821 5.22588C14.4994 5.43838 14.5 5.71759 14.5 6.15ZM6.16908 8.53157C5.79858 8.56184 5.59956 8.61735 5.45552 8.69074C5.12623 8.85852 4.85852 9.12624 4.69074 9.45552C4.61735 9.59956 4.56184 9.79858 4.53157 10.1691C4.50058 10.5483 4.5 11.0376 4.5 11.75V15.25C4.5 15.9624 4.50058 16.4517 4.53157 16.8309C4.56184 17.2014 4.61735 17.4004 4.69074 17.5445C4.85852 17.8738 5.12623 18.1415 5.45552 18.3093C5.59956 18.3827 5.79858 18.4382 6.16908 18.4684C6.54833 18.4994 7.03756 18.5 7.75 18.5H16.25C16.9624 18.5 17.4517 18.4994 17.8309 18.4684C18.2014 18.4382 18.4004 18.3827 18.5445 18.3093C18.8738 18.1415 19.1415 17.8738 19.3093 17.5445C19.3827 17.4004 19.4382 17.2014 19.4684 16.8309C19.4994 16.4517 19.5 15.9624 19.5 15.25V11.75C19.5 11.0376 19.4994 10.5483 19.4684 10.1691C19.4382 9.79858 19.3827 9.59956 19.3093 9.45552C19.1415 9.12624 18.8738 8.85852 18.5445 8.69074C18.4004 8.61735 18.2014 8.56184 17.8309 8.53157C17.4517 8.50059 16.9624 8.5 16.25 8.5H7.75C7.03756 8.5 6.54833 8.50059 6.16908 8.53157Z"
            fill="currentColor"
        />
    </s.Svg>
);
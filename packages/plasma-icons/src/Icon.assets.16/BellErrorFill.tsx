import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BellErrorFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.54929 1.11147C8.5454 1.10982 8.5415 1.10819 8.53759 1.10657C8.36769 1.03621 8.18559 1 8.00169 1C7.81778 1 7.63568 1.03621 7.46578 1.10657C7.29587 1.17693 7.14149 1.28005 7.01146 1.41005C6.88142 1.54005 6.77826 1.69439 6.70789 1.86424C6.63751 2.0341 6.60129 2.21615 6.60129 2.4H6.71354C6.00633 2.58026 5.43716 2.91843 4.98884 3.38978C4.31138 4.10202 3.96289 5.06365 3.76888 6.06764C3.57444 7.0739 3.52477 8.18288 3.48931 9.22995L3.4788 9.54728C3.45354 10.3194 3.42972 11.0474 3.35999 11.7H2.75C2.47386 11.7 2.25 11.9239 2.25 12.2C2.25 12.4761 2.47386 12.7 2.75 12.7H13.253C13.5291 12.7 13.753 12.4761 13.753 12.2C13.753 11.9239 13.5291 11.7 13.253 11.7H12.643C12.5733 11.0475 12.5494 10.3195 12.5242 9.54737L12.5137 9.22995C12.5052 8.98082 12.496 8.72818 12.4842 8.47426C12.3251 8.49127 12.1636 8.5 12 8.5C9.51472 8.5 7.5 6.48528 7.5 4C7.5 2.90049 7.89433 1.89307 8.54929 1.11147ZM6.02002 13.6001C6.30838 14.4157 7.08647 15.0001 8.00108 15.0001C8.9157 15.0001 9.69379 14.4157 9.98215 13.6001H6.02002Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 7.75C14.0711 7.75 15.75 6.07107 15.75 4C15.75 1.92893 14.0711 0.25 12 0.25C9.92893 0.25 8.25 1.92893 8.25 4C8.25 6.07107 9.92893 7.75 12 7.75ZM10.8008 2.30616C10.6641 2.16947 10.4425 2.16947 10.3058 2.30616C10.1691 2.44284 10.1691 2.66445 10.3058 2.80113L11.5047 4L10.3058 5.19887C10.1691 5.33555 10.1691 5.55716 10.3058 5.69384C10.4425 5.83053 10.6641 5.83053 10.8008 5.69384L11.9996 4.49497L13.1985 5.69384C13.3352 5.83053 13.5568 5.83053 13.6935 5.69384C13.8302 5.55716 13.8302 5.33555 13.6935 5.19887L12.4946 4L13.6935 2.80113C13.8302 2.66445 13.8302 2.44284 13.6935 2.30616C13.5568 2.16947 13.3352 2.16947 13.1985 2.30616L11.9996 3.50503L10.8008 2.30616Z"
            fill="currentColor"
        />
    </s.Svg>
);

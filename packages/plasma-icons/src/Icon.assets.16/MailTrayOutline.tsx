import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MailTrayOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.28088 2.5C3.80873 2.49999 3.42411 2.49999 3.11184 2.5255C2.7891 2.55187 2.49988 2.60797 2.23047 2.74524C1.80711 2.96095 1.4629 3.30516 1.24719 3.72852C1.10992 3.99793 1.05382 4.28715 1.02746 4.60989C1.00194 4.92215 1.00195 5.30677 1.00195 5.77892V10.2223C1.00195 10.6944 1.00194 11.0791 1.02746 11.3913C1.05382 11.7141 1.10992 12.0033 1.24719 12.2727C1.4629 12.6961 1.80711 13.0403 2.23047 13.256C2.49988 13.3933 2.7891 13.4494 3.11184 13.4757C3.4241 13.5012 3.80872 13.5012 4.28086 13.5012H11.7195C12.1916 13.5012 12.5762 13.5012 12.8885 13.4757C13.2112 13.4494 13.5004 13.3933 13.7698 13.256C14.1932 13.0403 14.5374 12.6961 14.7531 12.2727C14.8904 12.0033 14.9465 11.7141 14.9729 11.3913C14.9984 11.0791 14.9984 10.6945 14.9984 10.2223V5.77891C14.9984 5.30677 14.9984 4.92215 14.9729 4.60989C14.9465 4.28715 14.8904 3.99793 14.7531 3.72852C14.5374 3.30516 14.1932 2.96095 13.7698 2.74524C13.5004 2.60797 13.2112 2.55187 12.8885 2.5255C12.5762 2.49999 12.1916 2.49999 11.7195 2.5H4.28088ZM2.68447 3.63624C2.7894 3.58277 2.93238 3.5435 3.19327 3.52218C3.46001 3.50039 3.80366 3.5 4.30195 3.5H11.6984C12.1967 3.5 12.5403 3.50039 12.807 3.52218C13.0679 3.5435 13.2109 3.58277 13.3159 3.63624C13.5511 3.75608 13.7423 3.94731 13.8621 4.18251C13.9156 4.28745 13.9549 4.43042 13.9762 4.69132C13.998 4.95805 13.9984 5.3017 13.9984 5.8V8.87989H10.815C10.3832 8.87989 10.0293 9.1117 9.80459 9.38661C9.68989 9.52692 9.55768 9.65434 9.41005 9.76556C9.00662 10.0695 8.51109 10.235 8.00027 10.235C7.48945 10.235 6.99391 10.0695 6.59049 9.76556C6.44286 9.65434 6.31065 9.52692 6.19595 9.38661C5.97121 9.1117 5.61734 8.87989 5.18553 8.87989H2.00195V5.8C2.00195 5.3017 2.00234 4.95805 2.02414 4.69132C2.04545 4.43042 2.08473 4.28745 2.1382 4.18251C2.25804 3.94731 2.44926 3.75608 2.68447 3.63624ZM2.00195 9.87989V10.2012C2.00195 10.6995 2.00234 11.0432 2.02414 11.3099C2.04545 11.5708 2.08473 11.7138 2.1382 11.8187C2.25804 12.0539 2.44926 12.2451 2.68447 12.365C2.7894 12.4184 2.93238 12.4577 3.19327 12.479C3.46 12.5008 3.80366 12.5012 4.30195 12.5012H11.6984C12.1967 12.5012 12.5403 12.5008 12.807 12.479C13.0679 12.4577 13.2109 12.4184 13.3159 12.365C13.5511 12.2451 13.7423 12.0539 13.8621 11.8187C13.9156 11.7138 13.9549 11.5708 13.9762 11.3099C13.998 11.0432 13.9984 10.6995 13.9984 10.2012V9.87989H10.815C10.7558 9.87989 10.6648 9.91428 10.5788 10.0195C10.4135 10.2217 10.2234 10.4048 10.0118 10.5643C9.43368 10.9998 8.72662 11.235 8.00027 11.235C7.27392 11.235 6.56685 10.9998 5.98876 10.5643C5.77711 10.4048 5.587 10.2217 5.42173 10.0195C5.33569 9.91428 5.24475 9.87989 5.18553 9.87989H2.00195ZM3.10938 7.13849C3.10938 6.86235 3.33323 6.63849 3.60938 6.63849H12.3907C12.6669 6.63849 12.8907 6.86235 12.8907 7.13849C12.8907 7.41464 12.6669 7.63849 12.3907 7.63849H3.60938C3.33323 7.63849 3.10938 7.41464 3.10938 7.13849ZM3.60938 4.56836C3.33323 4.56836 3.10938 4.79222 3.10938 5.06836C3.10938 5.3445 3.33323 5.56836 3.60938 5.56836H12.3907C12.6669 5.56836 12.8907 5.3445 12.8907 5.06836C12.8907 4.79222 12.6669 4.56836 12.3907 4.56836H3.60938Z"
            fill="currentColor"
        />
    </s.Svg>
);
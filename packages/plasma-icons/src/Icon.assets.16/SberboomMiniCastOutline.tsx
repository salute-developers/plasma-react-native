import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SberboomMiniCastOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M14.9882 7.36467C14.9094 9.245 14.4563 10.1296 13.9409 10.696C13.8062 10.8441 13.6731 10.964 13.5603 11.0644L13.5418 11.0809C13.4333 11.1776 13.3525 11.2495 13.2841 11.3246C13.1641 11.4565 13.0898 11.5876 13.0898 11.8502H13.037V12.3746C13.037 12.8579 12.6452 13.2496 12.162 13.2496H3.83803C3.35478 13.2496 2.96303 12.8579 2.96303 12.3746V11.8502H2.91057C2.91057 11.5876 2.83618 11.4565 2.71617 11.3246C2.64783 11.2495 2.56708 11.1776 2.45855 11.0809L2.44001 11.0644C2.32723 10.964 2.19411 10.8441 2.05941 10.696C1.49196 10.0723 1 9.063 1 6.76353V4.5002C1 4.1982 1.09232 3.91777 1.25028 3.68559C1.12973 3.58939 1.05248 3.44122 1.05248 3.275C1.05248 2.98505 1.28753 2.75 1.57748 2.75H7.67588C7.5746 3.10099 7.51489 3.46962 7.50245 3.8502H2.45C2.09102 3.8502 1.8 4.14121 1.8 4.5002V6.76353C1.8 8.94406 2.26333 9.73139 2.65116 10.1577C2.75528 10.2721 2.86099 10.3681 2.97211 10.467L2.99865 10.4907C3.09821 10.5792 3.20981 10.6784 3.30792 10.7862C3.54605 11.048 3.71044 11.3659 3.71057 11.8496H4.30008C4.30003 11.5417 4.25971 11.3613 4.21054 11.2354C4.15967 11.1052 4.0914 11.009 3.9806 10.8537C3.87085 10.6998 3.7354 10.5078 3.61335 10.2264C3.49192 9.94647 3.38964 9.59268 3.32029 9.1067C3.28908 8.888 3.44108 8.68542 3.65977 8.65421C3.87847 8.623 4.08106 8.77499 4.11227 8.99369C4.17366 9.4239 4.25973 9.70622 4.34728 9.90808C4.4342 10.1085 4.52836 10.244 4.63187 10.3891L4.64757 10.4111C4.74722 10.5505 4.86767 10.7189 4.95572 10.9444C5.05008 11.186 5.10003 11.4702 5.10008 11.8496H5.86328C5.86325 11.5035 5.83878 11.3452 5.81476 11.2594C5.79803 11.1996 5.78425 11.1747 5.75084 11.1144C5.73711 11.0896 5.72007 11.0588 5.69815 11.0172C5.54338 10.7232 5.41346 10.3098 5.35552 9.06885C5.34521 8.84818 5.51575 8.66093 5.73643 8.65063C5.9571 8.64033 6.14434 8.81086 6.15465 9.03154C6.21114 10.2414 6.33532 10.5102 6.40604 10.6445C6.41265 10.657 6.42082 10.6716 6.4301 10.6881C6.47344 10.7653 6.54086 10.8854 6.58517 11.0438C6.63852 11.2345 6.66325 11.4785 6.66328 11.8496H7.60016V9.0502C7.60016 8.82928 7.77925 8.6502 8.00016 8.6502C8.22108 8.6502 8.40016 8.82928 8.40016 9.0502V11.8496H9.33705C9.33707 11.4785 9.36181 11.2345 9.41515 11.0438C9.45947 10.8854 9.52687 10.7654 9.57021 10.6882C9.57947 10.6716 9.58768 10.657 9.59428 10.6445C9.665 10.5102 9.78918 10.2414 9.84568 9.03154C9.85598 8.81086 10.0432 8.64033 10.2639 8.65063C10.4846 8.66093 10.6551 8.84818 10.6448 9.06885C10.5869 10.3098 10.4569 10.7232 10.3022 11.0172C10.2803 11.0588 10.2632 11.0896 10.2495 11.1144C10.2161 11.1747 10.2023 11.1996 10.1856 11.2594C10.1615 11.3452 10.1371 11.5035 10.137 11.8496H10.9002C10.9003 11.4702 10.9502 11.186 11.0446 10.9444C11.1327 10.7189 11.2531 10.5505 11.3527 10.4111L11.3684 10.3891C11.472 10.244 11.5661 10.1085 11.653 9.90808C11.7406 9.70622 11.8267 9.4239 11.8881 8.99369C11.9193 8.77499 12.1219 8.623 12.3405 8.65421C12.5592 8.68542 12.7112 8.888 12.68 9.1067C12.6107 9.59268 12.5084 9.94647 12.387 10.2264C12.2649 10.5078 12.1295 10.6998 12.0197 10.8537C11.9089 11.009 11.8407 11.1052 11.7898 11.2354C11.7406 11.3613 11.7003 11.5417 11.7002 11.8496H12.2898C12.2899 11.3659 12.4543 11.048 12.6924 10.7862C12.7905 10.6784 12.9021 10.5792 13.0017 10.4907L13.0282 10.467C13.1393 10.3681 13.245 10.2721 13.3492 10.1577C13.656 9.82045 14.01 9.25725 14.1446 7.95709C14.4487 7.79194 14.7316 7.59276 14.9882 7.36467Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.75 4C15.75 6.07107 14.0711 7.75 12 7.75C9.92893 7.75 8.25 6.07107 8.25 4C8.25 1.92893 9.92893 0.25 12 0.25C14.0711 0.25 15.75 1.92893 15.75 4ZM10.3102 3.95588C10.3602 3.76917 10.5521 3.65836 10.7388 3.70839C11.1032 3.80603 11.4252 4.02116 11.6548 4.32044C11.8845 4.61972 12.0089 4.98641 12.0089 5.36364C12.0089 5.55694 11.8522 5.71364 11.6589 5.71364C11.4656 5.71364 11.3089 5.55694 11.3089 5.36364C11.3089 5.1405 11.2353 4.9236 11.0995 4.74657C10.9636 4.56955 10.7732 4.44229 10.5577 4.38454C10.3709 4.33451 10.2601 4.14259 10.3102 3.95588ZM11.2682 1.76735C11.0815 1.71732 10.8896 1.82812 10.8396 2.01483C10.7896 2.20155 10.9004 2.39346 11.0871 2.44349C11.7375 2.61779 12.3123 3.00184 12.7223 3.53609C13.1322 4.07034 13.3544 4.72494 13.3544 5.39835C13.3544 5.59165 13.5111 5.74835 13.7044 5.74835C13.8977 5.74835 14.0544 5.59165 14.0544 5.39835C14.0544 4.57084 13.7814 3.76646 13.2776 3.10996C12.7739 2.45346 12.0676 1.98152 11.2682 1.76735Z"
            fill="currentColor"
        />
    </s.Svg>
);

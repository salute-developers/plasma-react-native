import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SberboomMiniCastFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.67588 2.75H1.525C1.23505 2.75 1 2.98505 1 3.275C1 3.48696 1.12561 3.66958 1.30645 3.75249C1.11383 3.91235 1 4.15051 1 4.5V6.76333C1 9.0823 1.50051 10.1269 2.10049 10.7814C2.24096 10.9347 2.37932 11.0582 2.49319 11.1589L2.50913 11.173C2.62113 11.272 2.69788 11.3398 2.76221 11.41C2.86474 11.5218 2.925 11.6232 2.925 11.85L2.925 11.8518V12.3746C2.925 12.8579 3.31675 13.2496 3.8 13.2496H12.2C12.6833 13.2496 13.075 12.8579 13.075 12.3746V11.8496C13.0751 11.6231 13.1353 11.5218 13.2378 11.41C13.3021 11.3398 13.3788 11.272 13.4908 11.173L13.5068 11.1589C13.6207 11.0582 13.759 10.9347 13.8995 10.7814C14.4449 10.1864 14.9082 9.26904 14.9879 7.36496C14.1932 8.0711 13.1467 8.5 12 8.5C9.51472 8.5 7.5 6.48528 7.5 4C7.5 3.56627 7.56136 3.14686 7.67588 2.75ZM3.40149 8.70299C3.59292 8.67619 3.76983 8.80965 3.79663 9.00109C3.85702 9.43246 3.9468 9.71656 4.04044 9.92078C4.13361 10.124 4.23648 10.2619 4.34842 10.4071L4.36812 10.4326C4.47449 10.5702 4.6009 10.7338 4.69397 10.952C4.79519 11.1894 4.85001 11.4708 4.85001 11.8496C4.85001 12.0429 4.69331 12.1996 4.50001 12.1996C4.30671 12.1996 4.15001 12.0429 4.15001 11.8496C4.15001 11.5404 4.10565 11.3569 4.05007 11.2266C3.99285 11.0924 3.91612 10.9929 3.79821 10.8399L3.794 10.8345C3.67551 10.6807 3.5319 10.4912 3.40415 10.2125C3.27686 9.93496 3.17126 9.58295 3.10339 9.09813C3.07659 8.9067 3.21005 8.72979 3.40149 8.70299ZM12.9485 8.70299C13.14 8.72979 13.2734 8.9067 13.2466 9.09813C13.1771 9.59494 13.0444 9.95875 12.8739 10.2456C12.7042 10.5309 12.5067 10.7224 12.3436 10.8758L12.3198 10.8981C12.1629 11.0455 12.0595 11.1427 11.9822 11.2705C11.9092 11.3911 11.85 11.5587 11.85 11.8496C11.85 12.0429 11.6933 12.1996 11.5 12.1996C11.3067 12.1996 11.15 12.0429 11.15 11.8496C11.15 11.4525 11.2338 11.1552 11.3832 10.9082C11.5126 10.6943 11.6844 10.5337 11.8258 10.4017L11.8641 10.3658C12.0189 10.2202 12.1554 10.0842 12.2722 9.88775C12.3882 9.69276 12.4947 9.42047 12.5534 9.00109C12.5802 8.80965 12.7571 8.67619 12.9485 8.70299ZM5.78157 8.69998C5.97467 8.69113 6.13838 8.8405 6.14722 9.03359C6.20275 10.2458 6.32502 10.5246 6.39994 10.6696C6.4071 10.6835 6.41566 10.6991 6.42518 10.7164C6.46792 10.7941 6.53003 10.9071 6.57155 11.0584C6.6219 11.2418 6.64614 11.48 6.64614 11.8496C6.64614 12.0429 6.48944 12.1996 6.29614 12.1996C6.10285 12.1996 5.94615 12.0429 5.94615 11.8496C5.94615 11.5013 5.9221 11.3369 5.89652 11.2436C5.87837 11.1775 5.86186 11.1472 5.82733 11.0836C5.81397 11.059 5.79788 11.0294 5.77799 10.9908C5.6317 10.7076 5.50469 10.3042 5.44795 9.06563C5.43911 8.87253 5.58848 8.70882 5.78157 8.69998ZM10.2186 8.69998C10.4117 8.70882 10.5611 8.87253 10.5522 9.06563C10.4955 10.3042 10.3685 10.7076 10.2222 10.9908C10.2023 11.0294 10.1862 11.059 10.1729 11.0836C10.1383 11.1472 10.1218 11.1775 10.1037 11.2436C10.0781 11.3369 10.054 11.5013 10.054 11.8496C10.054 12.0429 9.89734 12.1996 9.70404 12.1996C9.51074 12.1996 9.35404 12.0429 9.35404 11.8496C9.35404 11.48 9.37828 11.2418 9.42863 11.0584C9.47015 10.9071 9.53227 10.7941 9.575 10.7164C9.58453 10.6991 9.59309 10.6835 9.60024 10.6696C9.67516 10.5246 9.79743 10.2458 9.85296 9.03359C9.86181 8.8405 10.0255 8.69113 10.2186 8.69998ZM8.00009 8.69961C8.19339 8.69961 8.35009 8.85631 8.35009 9.04961V11.8496C8.35009 12.0429 8.19339 12.1996 8.00009 12.1996C7.80679 12.1996 7.65009 12.0429 7.65009 11.8496V9.04961C7.65009 8.85631 7.80679 8.69961 8.00009 8.69961Z"
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
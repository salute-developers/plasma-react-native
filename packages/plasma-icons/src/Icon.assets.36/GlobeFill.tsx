import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const GlobeFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.9943 3.55437C18.8535 3.2931 18.6598 3.11047 18.4448 3.00647C18.2971 3.00217 18.1488 3 18 3C17.8512 3 17.7029 3.00217 17.5552 3.00647C17.3402 3.11047 17.1465 3.2931 17.0057 3.55437C15.8395 5.71977 14.4202 8.8688 13.6224 12.4986H22.3776C21.5798 8.8688 20.1605 5.71976 18.9943 3.55437ZM22.7423 14.4986H13.2577C13.0938 15.635 13 16.8067 13 17.9998C13 19.1923 13.0937 20.3633 13.2574 21.4991H22.7426C22.9063 20.3633 23 19.1923 23 17.9998C23 16.8067 22.9062 15.635 22.7423 14.4986ZM11.5779 12.4986C12.3294 8.83192 13.6853 5.63173 14.8656 3.32798C9.91231 4.381 5.86311 7.87886 4.04095 12.4986H11.5779ZM3.41086 14.4986H11.2385C11.0864 15.6349 11 16.8058 11 17.9998C11 19.1932 11.0863 20.3634 11.2383 21.4991H3.4103C3.14204 20.3764 3 19.2048 3 18C3 16.7944 3.14224 15.6219 3.41086 14.4986ZM24.7615 14.4986H32.5891C32.8578 15.6219 33 16.7944 33 18C33 19.2048 32.858 20.3764 32.5897 21.4991H24.7617C24.9137 20.3634 25 19.1932 25 17.9998C25 16.8058 24.9136 15.6349 24.7615 14.4986ZM31.959 12.4986H24.4221C23.6706 8.83192 22.3147 5.63173 21.1344 3.32798C26.0877 4.381 30.1369 7.87886 31.959 12.4986ZM17.0057 32.4453C15.8392 30.2795 14.4197 27.1297 13.622 23.4991H22.378C21.5803 27.1297 20.1608 30.2795 18.9943 32.4453C18.8534 32.7069 18.6593 32.8896 18.4442 32.9935C18.2966 32.9978 18.1486 33 18 33C17.8514 33 17.7034 32.9978 17.5558 32.9935C17.3407 32.8896 17.1466 32.7069 17.0057 32.4453ZM24.4225 23.4991C23.6711 27.1668 22.3148 30.3679 21.1342 32.6721C26.0884 31.6189 30.1382 28.12 31.96 23.4991H24.4225ZM11.5775 23.4991C12.3289 27.1668 13.6852 30.3679 14.8658 32.6721C9.91157 31.6189 5.86177 28.12 4.04003 23.4991H11.5775Z"
            fill="currentColor"
        />
    </s.Svg>
);

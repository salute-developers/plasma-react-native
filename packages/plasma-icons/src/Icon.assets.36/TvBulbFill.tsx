import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TvBulbFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 9C3 7.9499 3 7.42485 3.20436 7.02377C3.38413 6.67096 3.67096 6.38413 4.02377 6.20436C4.42485 6 4.9499 6 6 6H30C31.0501 6 31.5751 6 31.9762 6.20436C32.329 6.38413 32.6159 6.67096 32.7956 7.02377C33 7.42485 33 7.9499 33 9V16.4993C31.6317 14.678 29.4534 13.5 27 13.5C22.8579 13.5 19.5 16.8579 19.5 21C19.5 22.7839 20.1228 24.4223 21.1628 25.7097H6C4.9499 25.7097 4.42485 25.7097 4.02377 25.5053C3.67096 25.3256 3.38413 25.0387 3.20436 24.6859C3 24.2848 3 23.7598 3 22.7097V9ZM23 27.5H6V29.5H23V27.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.2334 27C30.1295 27.2532 30.047 27.5149 29.9926 27.7868L29.6913 29.2937C29.4347 30.5766 28.3083 31.5 27 31.5C25.6917 31.5 24.5653 30.5766 24.3087 29.2937L24.0074 27.7868C23.953 27.5149 23.8705 27.2532 23.7666 27H30.2334ZM30.7652 26C31.0497 25.5573 31.3782 25.136 31.7048 24.724C32.5157 23.7008 33 22.407 33 21C33 17.6863 30.3137 15 27 15C23.6863 15 21 17.6863 21 21C21 22.407 21.4843 23.7008 22.2952 24.724C22.6218 25.136 22.9503 25.5573 23.2348 26H30.7652Z"
            fill="currentColor"
        />
    </s.Svg>
);
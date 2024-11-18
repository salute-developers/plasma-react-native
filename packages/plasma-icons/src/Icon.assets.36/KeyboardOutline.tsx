import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const KeyboardOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M9.09998 24.3516C9.09998 23.7993 9.54769 23.3516 10.1 23.3516H25.85C26.4023 23.3516 26.85 23.7993 26.85 24.3516C26.85 24.9038 26.4023 25.3516 25.85 25.3516H10.1C9.54769 25.3516 9.09998 24.9038 9.09998 24.3516Z"
            fill="currentColor"
        />
        <s.Path
            d="M7.47498 13.477C7.47498 12.6485 8.14655 11.977 8.97498 11.977C9.8034 11.977 10.475 12.6485 10.475 13.477C10.475 14.3054 9.8034 14.977 8.97498 14.977C8.14655 14.977 7.47498 14.3054 7.47498 13.477Z"
            fill="currentColor"
        />
        <s.Path
            d="M11.975 16.477C11.1465 16.477 10.475 17.1485 10.475 17.977C10.475 18.8054 11.1465 19.477 11.975 19.477C12.8034 19.477 13.475 18.8054 13.475 17.977C13.475 17.1485 12.8034 16.477 11.975 16.477Z"
            fill="currentColor"
        />
        <s.Path
            d="M23.975 16.477C23.1465 16.477 22.475 17.1485 22.475 17.977C22.475 18.8054 23.1465 19.477 23.975 19.477C24.8034 19.477 25.475 18.8054 25.475 17.977C25.475 17.1485 24.8034 16.477 23.975 16.477Z"
            fill="currentColor"
        />
        <s.Path
            d="M14.975 11.977C14.1465 11.977 13.475 12.6485 13.475 13.477C13.475 14.3054 14.1465 14.977 14.975 14.977C15.8034 14.977 16.475 14.3054 16.475 13.477C16.475 12.6485 15.8034 11.977 14.975 11.977Z"
            fill="currentColor"
        />
        <s.Path
            d="M19.475 13.477C19.475 12.6485 20.1465 11.977 20.975 11.977C21.8034 11.977 22.475 12.6485 22.475 13.477C22.475 14.3054 21.8034 14.977 20.975 14.977C20.1465 14.977 19.475 14.3054 19.475 13.477Z"
            fill="currentColor"
        />
        <s.Path
            d="M26.975 11.977C26.1465 11.977 25.475 12.6485 25.475 13.477C25.475 14.3054 26.1465 14.977 26.975 14.977C27.8034 14.977 28.475 14.3054 28.475 13.477C28.475 12.6485 27.8034 11.977 26.975 11.977Z"
            fill="currentColor"
        />
        <s.Path
            d="M16.475 17.977C16.475 17.1485 17.1465 16.477 17.975 16.477C18.8034 16.477 19.475 17.1485 19.475 17.977C19.475 18.8054 18.8034 19.477 17.975 19.477C17.1465 19.477 16.475 18.8054 16.475 17.977Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2566 6.10156H24.6933C25.9167 6.10155 26.8958 6.10155 27.687 6.16619C28.4992 6.23255 29.2012 6.37199 29.8469 6.70103C30.8818 7.22833 31.7232 8.06972 32.2505 9.10462C32.5795 9.75038 32.719 10.4523 32.7853 11.2645C32.85 12.0558 32.85 13.0348 32.85 14.2582V21.6949C32.85 22.9183 32.85 23.8974 32.7853 24.6886C32.719 25.5008 32.5795 26.2027 32.2505 26.8485C31.7232 27.8834 30.8818 28.7248 29.8469 29.2521C29.2012 29.5811 28.4992 29.7206 27.687 29.7869C26.8958 29.8516 25.9167 29.8516 24.6933 29.8516H11.2566C10.0333 29.8516 9.05418 29.8516 8.26295 29.7869C7.45073 29.7206 6.7488 29.5811 6.10303 29.2521C5.06814 28.7248 4.22674 27.8834 3.69944 26.8485C3.3704 26.2027 3.23097 25.5008 3.16461 24.6886C3.09996 23.8974 3.09997 22.9183 3.09998 21.6949V14.2582C3.09997 13.0349 3.09996 12.0558 3.16461 11.2645C3.23097 10.4523 3.3704 9.75038 3.69944 9.10462C4.22674 8.06972 5.06814 7.22833 6.10303 6.70103C6.7488 6.37199 7.45073 6.23255 8.26295 6.16619C9.05418 6.10155 10.0333 6.10155 11.2566 6.10156ZM8.42582 8.15955C7.73727 8.21581 7.32784 8.32161 7.01101 8.48304C6.35244 8.8186 5.81701 9.35403 5.48145 10.0126C5.32002 10.3294 5.21422 10.7389 5.15796 11.4274C5.10075 12.1276 5.09998 13.0249 5.09998 14.3016V21.6516C5.09998 22.9282 5.10075 23.8255 5.15796 24.5257C5.21422 25.2143 5.32002 25.6237 5.48145 25.9405C5.81701 26.5991 6.35244 27.1345 7.01101 27.4701C7.32784 27.6315 7.73727 27.7373 8.42582 27.7936C9.12603 27.8508 10.0234 27.8516 11.3 27.8516H24.65C25.9266 27.8516 26.8239 27.8508 27.5241 27.7936C28.2127 27.7373 28.6221 27.6315 28.9389 27.4701C29.5975 27.1345 30.1329 26.5991 30.4685 25.9405C30.6299 25.6237 30.7357 25.2143 30.792 24.5257C30.8492 23.8255 30.85 22.9282 30.85 21.6516V14.3016C30.85 13.0249 30.8492 12.1276 30.792 11.4274C30.7357 10.7389 30.6299 10.3294 30.4685 10.0126C30.1329 9.35403 29.5975 8.8186 28.9389 8.48304C28.6221 8.32161 28.2127 8.21581 27.5241 8.15955C26.8239 8.10234 25.9266 8.10156 24.65 8.10156H11.3C10.0234 8.10156 9.12603 8.10234 8.42582 8.15955Z"
            fill="currentColor"
        />
    </s.Svg>
);

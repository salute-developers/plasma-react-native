import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TranscriptionVoiceTextFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 7.125C13 4.84683 14.8468 3 17.125 3H29.875C32.1532 3 34 4.84682 34 7.125V19.875C34 22.1532 32.1532 24 29.875 24H24.25V28.8745C24.25 31.1527 22.4032 32.9995 20.125 32.9995H8.125C5.84683 32.9995 4 31.1527 4 28.8745V16.8745C4 14.5963 5.84683 12.7495 8.125 12.7495H13V7.125ZM19.75 24H17.5V25.499C17.5 26.1204 18.0037 26.624 18.625 26.624C19.2463 26.624 19.75 26.1204 19.75 25.499V24ZM15.25 23.5502C13.9144 22.8674 13 21.478 13 19.875V27.374C13 27.9954 13.5037 28.499 14.125 28.499C14.7463 28.499 15.25 27.9954 15.25 27.374V23.5502ZM17.125 5.25C16.0895 5.25 15.25 6.08947 15.25 7.125V19.875C15.25 20.9105 16.0895 21.75 17.125 21.75H29.875C30.9105 21.75 31.75 20.9105 31.75 19.875V7.125C31.75 6.08947 30.9105 5.25 29.875 5.25H17.125ZM29.3953 19.05H27.2008L26.0953 16.311H20.7988L19.7098 19.05H17.6143L22.3003 7.5H24.6433L29.3953 19.05ZM25.3363 14.4135L23.4388 9.678L21.5413 14.4135H25.3363ZM9.625 19.124C10.2463 19.124 10.75 19.6277 10.75 20.249V25.499C10.75 26.1204 10.2463 26.624 9.625 26.624C9.00368 26.624 8.5 26.1204 8.5 25.499V20.249C8.5 19.6277 9.00368 19.124 9.625 19.124Z"
            fill="currentColor"
        />
    </s.Svg>
);
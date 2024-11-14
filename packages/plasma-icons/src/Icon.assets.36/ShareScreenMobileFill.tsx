import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ShareScreenMobileFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.125 5C4.84683 5 3 6.84683 3 9.125V24.875C3 27.1532 4.84683 29 7.125 29H15.75V17.75C15.75 16.0931 17.0931 14.75 18.75 14.75H26.25C27.9069 14.75 29.25 16.0931 29.25 17.75V28.9832C31.3524 28.7937 33 27.0268 33 24.875V9.125C33 6.84683 31.1532 5 28.875 5H7.125Z"
            fill="currentColor"
        />
        <s.Path
            d="M18 19.4C18 18.5599 18 18.1399 18.1635 17.819C18.3073 17.5368 18.5368 17.3073 18.819 17.1635C19.1399 17 19.5599 17 20.4 17H24.6C25.4401 17 25.8601 17 26.181 17.1635C26.4632 17.3073 26.6927 17.5368 26.8365 17.819C27 18.1399 27 18.5599 27 19.4V29.6C27 30.4401 27 30.8601 26.8365 31.181C26.6927 31.4632 26.4632 31.6927 26.181 31.8365C25.8601 32 25.4401 32 24.6 32H20.4C19.5599 32 19.1399 32 18.819 31.8365C18.5368 31.6927 18.3073 31.4632 18.1635 31.181C18 30.8601 18 30.4401 18 29.6V19.4Z"
            fill="currentColor"
        />
    </s.Svg>
);
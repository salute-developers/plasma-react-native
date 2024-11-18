import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RepeatOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.0007 1.39357C8.19755 1.19991 8.51412 1.2025 8.70778 1.39935L10.4645 3.18506C10.656 3.37964 10.656 3.69179 10.4645 3.88637L8.70778 5.67208C8.51412 5.86893 8.19755 5.87152 8.0007 5.67786C7.80385 5.4842 7.80126 5.16763 7.99492 4.97078L8.91482 4.03571H5.89189C3.75013 4.03571 2 5.80285 2 8C2 8.89508 2.29062 9.71892 2.78018 10.3814C2.94429 10.6035 2.89729 10.9166 2.6752 11.0807C2.45312 11.2448 2.14004 11.1978 1.97593 10.9757C1.3628 10.146 1 9.11493 1 8C1 5.26604 3.1825 3.03571 5.89189 3.03571H8.91482L7.99492 2.10065C7.80126 1.9038 7.80385 1.58723 8.0007 1.39357ZM13.3244 4.91891C13.5465 4.75477 13.8596 4.80173 14.0237 5.0238C14.6371 5.85362 15 6.88485 15 8C15 10.734 12.8175 12.9643 10.1081 12.9643H7.08518L8.00508 13.8993C8.19874 14.0962 8.19615 14.4128 7.9993 14.6064C7.80245 14.8001 7.48588 14.7975 7.29222 14.6007L5.53546 12.8149C5.34404 12.6204 5.34404 12.3082 5.53546 12.1136L7.29222 10.3279C7.48588 10.1311 7.80245 10.1285 7.9993 10.3221C8.19615 10.5158 8.19874 10.8324 8.00508 11.0292L7.08518 11.9643H10.1081C12.2499 11.9643 14 10.1972 14 8C14 7.10475 13.7093 6.28076 13.2195 5.61819C13.0554 5.39612 13.1024 5.08304 13.3244 4.91891Z"
            fill="currentColor"
        />
    </s.Svg>
);

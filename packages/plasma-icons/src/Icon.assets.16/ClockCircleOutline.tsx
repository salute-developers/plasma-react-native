import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ClockCircleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 7.975C2 4.6751 4.6751 2 7.975 2C11.2749 2 13.95 4.6751 13.95 7.975C13.95 11.2749 11.2749 13.95 7.975 13.95C4.6751 13.95 2 11.2749 2 7.975ZM7.975 1C4.12281 1 1 4.12281 1 7.975C1 11.8272 4.12281 14.95 7.975 14.95C11.8272 14.95 14.95 11.8272 14.95 7.975C14.95 4.12281 11.8272 1 7.975 1ZM8.475 4.825C8.475 4.54886 8.25114 4.325 7.975 4.325C7.69886 4.325 7.475 4.54886 7.475 4.825V8.325C7.475 8.49218 7.55855 8.64829 7.69765 8.74102L9.79765 10.141C10.0274 10.2942 10.3378 10.2321 10.491 10.0023C10.6442 9.77259 10.5821 9.46215 10.3524 9.30898L8.475 8.05741V4.825Z"
            fill="currentColor"
        />
    </s.Svg>
);

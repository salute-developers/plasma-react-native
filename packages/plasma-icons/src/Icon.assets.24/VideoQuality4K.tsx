import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoQuality4K: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M2.74707 13.0522L7.14307 7.2002H9.38307V12.9402H10.4751V14.8022H9.38307V17.0002H7.26907V14.8022H2.74707V13.0522ZM4.86107 12.9402H7.26907V9.8182L4.86107 12.9402Z"
            fill="currentColor"
        />
        <s.Path
            d="M14.4247 13.0102V17.0002H12.1847V7.2002H14.4247V11.0922H15.7127L18.2607 7.2002H20.9207L17.6447 11.7922L21.5787 17.0002H18.7507L15.8387 13.0102H14.4247Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LightningFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.6936 3.15426C23.1524 3.42299 23.3605 3.97631 23.1923 4.4808L19.9359 14.25H28.875C29.3203 14.25 29.7237 14.5127 29.9039 14.9199C30.084 15.3271 30.007 15.8023 29.7075 16.1318L14.7075 32.6318C14.3498 33.0253 13.7654 33.1146 13.3065 32.8458C12.8476 32.5771 12.6396 32.0238 12.8078 31.5193L16.0642 21.75H7.12502C6.67973 21.75 6.27634 21.4874 6.09619 21.0802C5.91605 20.6729 5.99305 20.1978 6.29259 19.8683L21.2926 3.36828C21.6503 2.9748 22.2347 2.88553 22.6936 3.15426Z"
            fill="currentColor"
        />
    </s.Svg>
);

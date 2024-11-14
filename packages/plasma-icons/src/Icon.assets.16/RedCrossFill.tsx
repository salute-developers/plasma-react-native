import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RedCrossFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.68352 1.66886C5.55 1.9309 5.55 2.27394 5.55 2.96V5.55H2.96C2.27394 5.55 1.9309 5.55 1.66886 5.68352C1.43836 5.80096 1.25096 5.98836 1.13352 6.21886C1 6.4809 1 6.82394 1 7.51V8.49C1 9.17606 1 9.5191 1.13352 9.78114C1.25096 10.0116 1.43836 10.199 1.66886 10.3165C1.9309 10.45 2.27394 10.45 2.96 10.45H5.55V13.04C5.55 13.7261 5.55 14.0691 5.68352 14.3311C5.80096 14.5616 5.98836 14.749 6.21886 14.8665C6.4809 15 6.82394 15 7.51 15H8.49C9.17606 15 9.5191 15 9.78114 14.8665C10.0116 14.749 10.199 14.5616 10.3165 14.3311C10.45 14.0691 10.45 13.7261 10.45 13.04V10.45H13.04C13.7261 10.45 14.0691 10.45 14.3311 10.3165C14.5616 10.199 14.749 10.0116 14.8665 9.78114C15 9.5191 15 9.17606 15 8.49V7.51C15 6.82394 15 6.4809 14.8665 6.21886C14.749 5.98836 14.5616 5.80096 14.3311 5.68352C14.0691 5.55 13.7261 5.55 13.04 5.55H10.45V2.96C10.45 2.27394 10.45 1.9309 10.3165 1.66886C10.199 1.43836 10.0116 1.25096 9.78114 1.13352C9.5191 1 9.17606 1 8.49 1H7.51C6.82394 1 6.4809 1 6.21886 1.13352C5.98836 1.25096 5.80096 1.43836 5.68352 1.66886Z"
            fill="currentColor"
        />
    </s.Svg>
);
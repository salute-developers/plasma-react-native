import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PawFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.36523 3.35105C4.36523 2.48504 5.04718 1.75049 5.9278 1.75049C6.80842 1.75049 7.49037 2.48504 7.49037 3.35105C7.49037 4.21706 6.80842 4.95162 5.9278 4.95162C5.04718 4.95162 4.36523 4.21706 4.36523 3.35105ZM2.81257 5.31494C1.93195 5.31494 1.25 6.04949 1.25 6.9155C1.25 7.78152 1.93195 8.51607 2.81257 8.51607C3.69319 8.51607 4.37514 7.78152 4.37514 6.9155C4.37514 6.04949 3.69319 5.31494 2.81257 5.31494ZM9.85609 7.10061C8.98028 5.66894 7.02625 5.66894 6.15044 7.10061L4.04217 10.547C3.56249 11.3311 3.5806 12.2471 3.92788 12.9643C4.27569 13.6825 4.9811 14.2473 5.89499 14.2473H10.1115C11.0254 14.2473 11.7308 13.6825 12.0787 12.9643C12.4259 12.2471 12.444 11.3311 11.9644 10.547L9.85609 7.10061ZM13.1885 5.31494C12.3079 5.31494 11.626 6.04949 11.626 6.9155C11.626 7.78152 12.3079 8.51607 13.1885 8.51607C14.0692 8.51607 14.7511 7.78152 14.7511 6.9155C14.7511 6.04949 14.0692 5.31494 13.1885 5.31494ZM8.51514 3.35105C8.51514 2.48504 9.19709 1.75049 10.0777 1.75049C10.9583 1.75049 11.6403 2.48504 11.6403 3.35105C11.6403 4.21706 10.9583 4.95162 10.0777 4.95162C9.19709 4.95162 8.51514 4.21706 8.51514 3.35105Z"
            fill="currentColor"
        />
    </s.Svg>
);
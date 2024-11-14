import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PanelSidebarDFocusOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.89 3H13.11C13.6015 3 14 3.39847 14 3.89V11.11C14 11.6015 13.6015 12 13.11 12H2.89C2.39847 12 2 11.6015 2 11.11V3.89C2 3.39847 2.39847 3 2.89 3ZM1 3.89C1 2.84618 1.84618 2 2.89 2H13.11C14.1538 2 15 2.84618 15 3.89V11.11C15 12.1538 14.1538 13 13.11 13H2.89C1.84618 13 1 12.1538 1 11.11V3.89ZM3.44961 8.1001C3.25631 8.1001 3.09961 8.2568 3.09961 8.4501V10.5501C3.09961 10.7434 3.25631 10.9001 3.44961 10.9001H12.5496C12.7429 10.9001 12.8996 10.7434 12.8996 10.5501V8.4501C12.8996 8.2568 12.7429 8.1001 12.5496 8.1001H3.44961Z"
            fill="currentColor"
        />
    </s.Svg>
);
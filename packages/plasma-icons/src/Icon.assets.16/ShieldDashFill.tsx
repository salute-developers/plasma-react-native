import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ShieldDashFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.37468 1.14934C8.14674 0.998397 7.85326 0.998397 7.62532 1.14934C7.35209 1.33026 6.50876 1.87068 5.47019 2.36411C4.41682 2.86456 3.22949 3.28375 2.25 3.28375C1.97386 3.28375 1.75 3.50761 1.75 3.78375C1.75 8.20599 2.89065 10.9179 4.22158 12.5694L13.5148 3.27611C12.5843 3.21721 11.5002 2.82514 10.5298 2.36411C9.49124 1.87068 8.64791 1.33026 8.37468 1.14934ZM14.2494 3.95573L4.89694 13.3082C6.33187 14.6893 7.74334 14.9635 7.90932 14.9918L7.91065 14.992L7.91361 14.9925L7.92749 14.9946C7.94139 14.9966 7.96734 14.9997 8 14.9997C8.03266 14.9997 8.05861 14.9966 8.07251 14.9946L8.08639 14.9925L8.08935 14.992L8.09068 14.9918C8.2651 14.9621 9.81494 14.6608 11.322 13.0888C12.8197 11.5266 14.2169 8.77039 14.2494 3.95573Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4434 1.64645C14.6387 1.84171 14.6387 2.15829 14.4434 2.35355L2.564 14.2329C2.36874 14.4282 2.05216 14.4282 1.8569 14.2329C1.66163 14.0377 1.66163 13.7211 1.8569 13.5258L13.7363 1.64645C13.9316 1.45118 14.2481 1.45118 14.4434 1.64645Z"
            fill="currentColor"
        />
    </s.Svg>
);
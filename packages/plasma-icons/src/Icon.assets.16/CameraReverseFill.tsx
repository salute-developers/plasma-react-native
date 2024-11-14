import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CameraReverseFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.25 5C14.6642 5 15 5.33579 15 5.75V9.50401C15 10.066 15 10.5328 14.9689 10.9137C14.9365 11.3102 14.8667 11.6792 14.6894 12.0272C14.4161 12.5635 13.9801 12.9995 13.4439 13.2727C13.0959 13.45 12.7269 13.5198 12.3304 13.5522C11.9495 13.5834 11.4826 13.5833 10.9207 13.5833H4.05623L4.19301 13.7206C4.4854 14.014 4.48458 14.4889 4.19118 14.7812C3.89778 15.0736 3.4229 15.0728 3.13052 14.7794L1.71875 13.3627C1.42708 13.0701 1.42708 12.5966 1.71875 12.3039L3.13052 10.8873C3.4229 10.5939 3.89778 10.593 4.19118 10.8854C4.48458 11.1778 4.4854 11.6527 4.19301 11.9461L4.05623 12.0833H10.89C11.4904 12.0833 11.8956 12.0827 12.2082 12.0572C12.512 12.0324 12.6616 11.9878 12.7629 11.9362C13.0169 11.8068 13.2234 11.6002 13.3529 11.3462C13.4045 11.245 13.4491 11.0953 13.4739 10.7915C13.4994 10.479 13.5 10.0738 13.5 9.47333V5.75C13.5 5.33579 13.8358 5 14.25 5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8088 1.21875C12.1022 0.926366 12.5771 0.927189 12.8695 1.22059L14.2812 2.63726C14.5729 2.92994 14.5729 3.4034 14.2812 3.69608L12.8695 5.11274C12.5771 5.40614 12.1022 5.40697 11.8088 5.11458C11.5154 4.8222 11.5146 4.34732 11.807 4.05392L11.9438 3.91667H5.11C4.50957 3.91667 4.10435 3.91725 3.7918 3.94279C3.488 3.96761 3.33837 4.01222 3.23711 4.06381C2.98309 4.19324 2.77657 4.39976 2.64714 4.65378C2.59555 4.75504 2.55094 4.90467 2.52612 5.20847C2.50058 5.52102 2.5 5.92624 2.5 6.52667V10.25C2.5 10.6642 2.16421 11 1.75 11C1.33579 11 1 10.6642 1 10.25L1 6.496C0.99999 5.93403 0.999982 5.46722 1.0311 5.08632C1.0635 4.68976 1.13334 4.32075 1.31063 3.97279C1.58387 3.43653 2.01987 3.00054 2.55613 2.7273C2.90409 2.55 3.27309 2.48017 3.66965 2.44777C4.05055 2.41665 4.51736 2.41666 5.07934 2.41667L11.9438 2.41667L11.807 2.27941C11.5146 1.98601 11.5154 1.51114 11.8088 1.21875Z"
            fill="currentColor"
        />
        <s.Path
            d="M11 8C11 9.51878 9.76878 10.75 8.25 10.75C6.73122 10.75 5.5 9.51878 5.5 8C5.5 6.48122 6.73122 5.25 8.25 5.25C9.76878 5.25 11 6.48122 11 8Z"
            fill="currentColor"
        />
    </s.Svg>
);
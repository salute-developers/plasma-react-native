import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LineLinkToto: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8693 1.90914L14.7212 3.76109C14.815 3.85486 14.8677 3.98203 14.8677 4.11464C14.8677 4.24725 14.815 4.37443 14.7212 4.4682L12.7767 6.41274C12.5814 6.608 12.2648 6.608 12.0696 6.41274C11.8743 6.21748 11.8743 5.9009 12.0696 5.70563L13.1302 4.64497L9.99428 4.72146C9.1412 4.74227 8.45457 5.42889 8.43376 6.28197L8.35452 9.53101C8.32071 10.9173 7.20494 12.033 5.81869 12.0668L2.59941 12.1454L3.6264 13.1723C3.82166 13.3676 3.82166 13.6842 3.6264 13.8794C3.43113 14.0747 3.11455 14.0747 2.91929 13.8794L1.06735 12.0275C0.872083 11.8322 0.872083 11.5157 1.06735 11.3204L3.01189 9.37585C3.20715 9.18059 3.52373 9.18059 3.71899 9.37585C3.91426 9.57112 3.91426 9.8877 3.71899 10.083L2.65833 11.1436L5.79431 11.0671C6.64739 11.0463 7.33401 10.3597 7.35482 9.50662L7.43406 6.25759C7.46787 4.87133 8.58364 3.75557 9.96989 3.72176L13.1892 3.64324L12.1622 2.61625C11.9669 2.42099 11.9669 2.1044 12.1622 1.90914C12.3574 1.71388 12.674 1.71388 12.8693 1.90914Z"
            fill="currentColor"
        />
    </s.Svg>
);

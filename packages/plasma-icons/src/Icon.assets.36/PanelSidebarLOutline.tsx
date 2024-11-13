import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PanelSidebarLOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.7587 6H27.2413C28.0463 5.99999 28.7106 5.99998 29.2518 6.04419C29.8139 6.09012 30.3306 6.18868 30.816 6.43597C31.5686 6.81947 32.1805 7.43139 32.564 8.18404C32.8113 8.66937 32.9099 9.18608 32.9558 9.74817C33 10.2894 33 10.9537 33 11.7587V24.2413C33 25.0463 33 25.7106 32.9558 26.2518C32.9099 26.8139 32.8113 27.3306 32.564 27.816C32.1805 28.5686 31.5686 29.1805 30.816 29.564C30.3306 29.8113 29.8139 29.9099 29.2518 29.9558C28.7106 30 28.0463 30 27.2413 30H8.75868C7.95372 30 7.28936 30 6.74818 29.9558C6.18608 29.9099 5.66937 29.8113 5.18404 29.564C4.43139 29.1805 3.81947 28.5686 3.43597 27.816C3.18868 27.3306 3.09012 26.8139 3.04419 26.2518C2.99998 25.7106 2.99999 25.0463 3 24.2413V11.7587C2.99999 10.9537 2.99998 10.2894 3.04419 9.74817C3.09012 9.18608 3.18868 8.66937 3.43597 8.18404C3.81947 7.43139 4.43139 6.81947 5.18404 6.43597C5.66937 6.18868 6.18608 6.09012 6.74817 6.04419C7.28937 5.99998 7.95373 5.99999 8.7587 6ZM6.91104 8.03755C6.47262 8.07337 6.24842 8.1383 6.09202 8.21799C5.7157 8.40973 5.40973 8.7157 5.21799 9.09202C5.1383 9.24842 5.07337 9.47262 5.03755 9.91104C5.00078 10.3611 5 10.9434 5 11.8V24.2C5 25.0566 5.00078 25.6389 5.03755 26.089C5.07337 26.5274 5.1383 26.7516 5.21799 26.908C5.40973 27.2843 5.7157 27.5903 6.09202 27.782C6.24842 27.8617 6.47262 27.9266 6.91104 27.9624C7.36113 27.9992 7.94342 28 8.8 28H11.3243V8H8.8C7.94342 8 7.36113 8.00078 6.91104 8.03755ZM13.3243 8V28H27.2C28.0566 28 28.6389 27.9992 29.089 27.9624C29.5274 27.9266 29.7516 27.8617 29.908 27.782C30.2843 27.5903 30.5903 27.2843 30.782 26.908C30.8617 26.7516 30.9266 26.5274 30.9625 26.089C30.9992 25.6389 31 25.0566 31 24.2V11.8C31 10.9434 30.9992 10.3611 30.9625 9.91104C30.9266 9.47262 30.8617 9.24842 30.782 9.09202C30.5903 8.7157 30.2843 8.40973 29.908 8.21799C29.7516 8.1383 29.5274 8.07337 29.089 8.03755C28.6389 8.00078 28.0566 8 27.2 8H13.3243Z"
            fill="currentColor"
        />
    </s.Svg>
);
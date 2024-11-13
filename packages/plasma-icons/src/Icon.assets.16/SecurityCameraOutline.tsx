import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SecurityCameraOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.25899 2.5C2.40295 2.5 1.70898 3.19396 1.70898 4.05V7.81233C1.70898 8.66837 2.40294 9.36233 3.25898 9.36233H7.49792V10.7477C7.49792 11.0514 7.25167 11.2977 6.94792 11.2977H2.00195V10.587C2.00195 10.3108 1.7781 10.087 1.50195 10.087C1.22581 10.087 1.00195 10.3108 1.00195 10.587V13.0017C1.00195 13.2778 1.22581 13.5017 1.50195 13.5017C1.7781 13.5017 2.00195 13.2778 2.00195 13.0017V12.2977H6.94792C7.80396 12.2977 8.49792 11.6037 8.49792 10.7477V9.36233H11.3414C12.1975 9.36233 12.8914 8.66837 12.8914 7.81233V4.05C12.8914 3.19396 12.1975 2.5 11.3414 2.5H3.25899ZM2.70898 4.05C2.70898 3.74624 2.95523 3.5 3.25899 3.5H11.3414C11.6452 3.5 11.8914 3.74624 11.8914 4.05V7.81233C11.8914 8.11608 11.6452 8.36233 11.3414 8.36233H3.25898C2.95523 8.36233 2.70898 8.11609 2.70898 7.81233V4.05ZM14.9987 4.37695C14.9987 4.2044 14.9097 4.04404 14.7633 3.95272C14.6169 3.8614 14.4338 3.85202 14.2788 3.9279L13.9266 4.10038C13.7552 4.18433 13.6465 4.35855 13.6465 4.54943V7.30909C13.6465 7.50004 13.7552 7.67432 13.9268 7.75823L14.279 7.93052C14.434 8.00633 14.6171 7.9969 14.7634 7.90556C14.9098 7.81423 14.9987 7.6539 14.9987 7.48138V4.37695ZM3.81445 5.06738C3.81445 4.79124 4.03831 4.56738 4.31445 4.56738H6.77306C7.0492 4.56738 7.27306 4.79124 7.27306 5.06738C7.27306 5.34353 7.0492 5.56738 6.77306 5.56738H4.31445C4.03831 5.56738 3.81445 5.34353 3.81445 5.06738Z"
            fill="currentColor"
        />
    </s.Svg>
);
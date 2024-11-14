import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WindowMaximizeRFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.27893 2.5H9.403V3.5H4.3C3.8017 3.5 3.45805 3.50039 3.19132 3.52218C2.93042 3.5435 2.78745 3.58277 2.68251 3.63624C2.44731 3.75608 2.25608 3.94731 2.13624 4.18251C2.08277 4.28745 2.0435 4.43042 2.02218 4.69132C2.00039 4.95805 2 5.3017 2 5.8V7.30957H7.5837C8.46578 7.30957 8.90682 7.30957 9.24374 7.48124C9.54009 7.63224 9.78103 7.87318 9.93204 8.16954C10.1037 8.50645 10.1037 8.94749 10.1037 9.82957V12.4972H11.6961C12.1943 12.4972 12.538 12.4968 12.8047 12.475C13.0656 12.4537 13.2086 12.4144 13.3135 12.3609C13.5487 12.2411 13.74 12.0498 13.8598 11.8146C13.9133 11.7097 13.9526 11.5667 13.9739 11.3058C13.9957 11.0391 13.9961 10.6954 13.9961 10.1972V7.99858H14.9961V10.2182C14.9961 10.6904 14.9961 11.075 14.9705 11.3873C14.9442 11.71 14.8881 11.9992 14.7508 12.2686C14.5351 12.692 14.1909 13.0362 13.7675 13.2519C13.4981 13.3892 13.2089 13.4453 12.8862 13.4716C12.5739 13.4972 12.1893 13.4972 11.7171 13.4972H4.27891C3.80677 13.4972 3.42215 13.4972 3.10989 13.4716C2.78715 13.4453 2.49793 13.3892 2.22852 13.2519C1.80516 13.0362 1.46095 12.692 1.24524 12.2686C1.10797 11.9992 1.05187 11.71 1.0255 11.3873C0.99999 11.075 0.999995 10.6904 1 10.2182V5.77892C0.999995 5.30678 0.99999 4.92215 1.0255 4.60989C1.05187 4.28715 1.10797 3.99793 1.24524 3.72852C1.46095 3.30516 1.80516 2.96095 2.22852 2.74524C2.49793 2.60797 2.78715 2.55187 3.10989 2.5255C3.42215 2.49999 3.80678 2.49999 4.27893 2.5ZM10.6596 3C10.6596 2.72386 10.8835 2.5 11.1596 2.5H14.4964C14.7726 2.5 14.9964 2.72386 14.9964 3V6.27493C14.9964 6.55107 14.7726 6.77493 14.4964 6.77493C14.2203 6.77493 13.9964 6.55107 13.9964 6.27493V4.19131L11.1586 6.97651C10.9615 7.16993 10.645 7.16697 10.4515 6.96989C10.2581 6.77281 10.2611 6.45624 10.4581 6.26281L13.2732 3.5H11.1596C10.8835 3.5 10.6596 3.27614 10.6596 3Z"
            fill="currentColor"
        />
    </s.Svg>
);
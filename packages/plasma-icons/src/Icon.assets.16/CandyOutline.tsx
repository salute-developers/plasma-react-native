import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CandyOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5831 1.19809C11.2186 0.833575 10.5965 0.995684 10.4563 1.49174L9.95805 3.25382C9.1313 2.88468 8.12746 3.03931 7.44906 3.71771L3.72 7.44676C3.04151 8.12524 2.88693 9.12924 3.25625 9.95605L1.4921 10.4548C0.996049 10.5951 0.833942 11.2172 1.19845 11.5817L4.41901 14.8022C4.78352 15.1667 5.40559 15.0046 5.54584 14.5086L6.04444 12.7451C6.87155 13.1153 7.87636 12.9609 8.55527 12.282L12.2843 8.55296C12.9628 7.87447 13.1174 6.87045 12.7481 6.04363L14.51 5.54546C15.0061 5.40521 15.1682 4.78314 14.8036 4.41863L11.5831 1.19809ZM9.88311 4.38575C9.88834 4.39149 9.89372 4.39712 9.89925 4.40265L11.5991 6.10248C11.6047 6.10805 11.6103 6.11348 11.6161 6.11875C12.065 6.60926 12.052 7.37104 11.5772 7.84586L7.84816 11.5749C7.36 12.0631 6.56853 12.0631 6.08037 11.5749L4.42711 9.92165C3.93894 9.43349 3.93894 8.64202 4.42711 8.15386L8.15616 4.42482C8.63093 3.95004 9.3926 3.93702 9.88311 4.38575ZM12.1008 5.18744L13.7048 4.73394L11.2678 2.29698L10.8143 3.90094L12.1008 5.18744ZM3.9033 10.8123L2.29735 11.2664L4.73432 13.7033L5.18838 12.0974L3.9033 10.8123ZM9.11334 6.38168C9.3086 6.18641 9.3086 5.86983 9.11334 5.67457C8.91807 5.47931 8.60149 5.47931 8.40623 5.67457L5.67587 8.40492C5.48061 8.60018 5.48061 8.91676 5.67587 9.11202C5.87114 9.30728 6.18772 9.30728 6.38298 9.11202L9.11334 6.38168Z"
            fill="currentColor"
        />
    </s.Svg>
);

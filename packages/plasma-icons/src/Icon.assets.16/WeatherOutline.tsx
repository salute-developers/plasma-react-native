import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WeatherOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.02615 1.0308C4.61646 0.951347 5.21688 1.02624 5.77022 1.24813C6.32351 1.47 6.81088 1.83127 7.18647 2.2969C7.4237 2.59101 7.61141 2.92063 7.74375 3.27244C8.00569 3.19685 8.27765 3.15197 8.5545 3.14029C9.48043 3.10121 10.3825 3.43674 11.0625 4.07097C11.614 4.58539 11.9828 5.26196 12.1227 5.99694C13.7369 6.13147 14.9958 7.50061 14.9958 9.15692C14.9958 10.6232 14.0092 11.8644 12.663 12.2232C12.6534 12.243 12.6425 12.2624 12.6301 12.2813L11.9275 13.3496C11.7758 13.5803 11.4658 13.6444 11.235 13.4926C11.0043 13.3409 10.9403 13.0309 11.092 12.8001L11.4027 12.3277H9.08781L8.41581 13.3496C8.26408 13.5803 7.95404 13.6444 7.72332 13.4926C7.4926 13.3409 7.42856 13.0309 7.58029 12.8001L7.89095 12.3277H5.57414L4.90214 13.3496C4.75041 13.5803 4.44037 13.6444 4.20965 13.4926C3.97892 13.3409 3.91489 13.0309 4.06661 12.8001L4.39774 12.2966C3.96601 12.235 3.55027 12.0827 3.17787 11.848C2.68086 11.5346 2.28119 11.0872 2.02325 10.5569C1.76533 10.0267 1.65912 9.43438 1.7162 8.84678C1.7712 8.28067 1.97575 7.73988 2.30846 7.28118C2.03561 7.06036 1.7962 6.79854 1.59905 6.50382C1.26625 6.00631 1.06477 5.43136 1.0132 4.83361C0.961639 4.23587 1.06163 3.6345 1.30398 3.08646C1.54635 2.53839 1.92326 2.06144 2.3996 1.7014C2.87598 1.34132 3.43586 1.11026 4.02615 1.0308ZM6.40812 2.92473C6.59196 3.15264 6.73463 3.41083 6.83044 3.68724C6.5752 3.8513 6.34013 4.04957 6.13223 4.27865C5.68672 4.76952 5.39187 5.37322 5.27309 6.01711C4.75321 5.94301 4.22231 6.00209 3.72948 6.19013C3.47758 6.28624 3.24038 6.41422 3.02307 6.57004C2.79273 6.39962 2.59187 6.18945 2.43023 5.94782C2.19165 5.59116 2.04663 5.17804 2.0095 4.74767C1.97238 4.31728 2.04444 3.88461 2.21855 3.4909C2.39264 3.09723 2.66276 2.756 3.00258 2.49915C3.34235 2.24233 3.74065 2.07825 4.15955 2.02187C4.57843 1.96548 5.00469 2.01856 5.39803 2.17628C5.79141 2.33403 6.13927 2.59142 6.40812 2.92473ZM10.3804 4.80225C9.89486 4.34937 9.25316 4.11169 8.59667 4.1394C7.94015 4.16711 7.31981 4.45809 6.87273 4.9507C6.52605 5.33268 6.30573 5.8116 6.23701 6.32056C6.50767 6.45739 6.75849 6.63372 6.981 6.84499C7.4076 7.25004 7.71314 7.76732 7.86395 8.33789C7.93451 8.60486 7.77529 8.87849 7.50832 8.94906C7.24134 9.01962 6.96771 8.8604 6.89715 8.59343C6.79342 8.20097 6.58364 7.84666 6.29244 7.57017C6.07624 7.36489 5.82156 7.20858 5.54532 7.10955C5.44956 7.07523 5.35119 7.04778 5.25089 7.02755C4.8614 6.94901 4.45796 6.98249 4.08596 7.12443C3.71391 7.26639 3.3875 7.51144 3.14427 7.83279C2.901 8.15419 2.75082 8.5389 2.71152 8.94348C2.67221 9.34807 2.74544 9.75549 2.92249 10.1195C3.09952 10.4834 3.37301 10.7888 3.71115 11.002C4.04923 11.2151 4.43877 11.3277 4.83575 11.3277H11.8613C13.0337 11.3277 13.9958 10.3623 13.9958 9.15692C13.9958 7.95154 13.0337 6.9861 11.8613 6.9861C11.812 6.9861 11.7633 6.98778 11.715 6.99109C11.5817 7.00024 11.4502 6.95559 11.3499 6.86713C11.2497 6.77866 11.1891 6.65374 11.1816 6.52026C11.1447 5.86288 10.8569 5.24668 10.3804 4.80225ZM6.65742 13.7048C6.80915 13.4741 6.74511 13.164 6.51439 13.0123C6.28367 12.8606 5.97363 12.9246 5.8219 13.1553L5.11935 14.2237C4.96762 14.4544 5.03166 14.7644 5.26238 14.9161C5.49311 15.0679 5.80314 15.0038 5.95487 14.7731L6.65742 13.7048ZM10.0281 13.0123C10.2588 13.164 10.3228 13.4741 10.1711 13.7048L9.46854 14.7731C9.31682 15.0038 9.00678 15.0679 8.77605 14.9161C8.54533 14.7644 8.48129 14.4544 8.63302 14.2237L9.33557 13.1553C9.4873 12.9246 9.79734 12.8606 10.0281 13.0123Z"
            fill="currentColor"
        />
    </s.Svg>
);
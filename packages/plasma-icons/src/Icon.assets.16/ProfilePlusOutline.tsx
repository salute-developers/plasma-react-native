import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ProfilePlusOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.52502 4.78542C5.52502 3.37587 6.64299 2.25 8.00157 2.25C9.36015 2.25 10.4781 3.37587 10.4781 4.78542C10.4781 6.19498 9.36015 7.32085 8.00157 7.32085C6.64299 7.32085 5.52502 6.19498 5.52502 4.78542ZM8.00157 1.25C6.07234 1.25 4.52502 2.84214 4.52502 4.78542C4.52502 6.72871 6.07234 8.32085 8.00157 8.32085C9.9308 8.32085 11.4781 6.72871 11.4781 4.78542C11.4781 2.84214 9.9308 1.25 8.00157 1.25ZM7.76761 10.4678C6.03087 10.5136 4.41782 11.0638 3.06249 11.981C2.84591 12.1275 2.72994 12.3724 2.75297 12.6107C2.77508 12.8393 2.81273 12.9702 2.86243 13.0678C2.98227 13.303 3.1735 13.4942 3.4087 13.614C3.51364 13.6675 3.65661 13.7068 3.91751 13.7281C4.18424 13.7499 4.52789 13.7503 5.02619 13.7503H7.85312C8.00508 14.1099 8.20245 14.4456 8.43804 14.7503H5.0051C4.53296 14.7503 4.14834 14.7503 3.83608 14.7248C3.51334 14.6984 3.22412 14.6423 2.95471 14.5051C2.53135 14.2893 2.18714 13.9451 1.97143 13.5218C1.8435 13.2707 1.78623 13.0029 1.75761 12.7069C1.69722 12.0823 2.00073 11.492 2.50205 11.1528C4.07774 10.0865 5.96973 9.46473 8.00336 9.46473C8.09556 9.46473 8.18747 9.46601 8.27907 9.46854C8.06922 9.77641 7.89658 10.1117 7.76761 10.4678Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92898 8.25 8.25004 9.92893 8.25004 12C8.25004 14.0711 9.92898 15.75 12 15.75ZM12.3501 9.95508C12.3501 9.76178 12.1934 9.60508 12.0001 9.60508C11.8068 9.60508 11.6501 9.76178 11.6501 9.95508V11.6505H9.95463C9.76133 11.6505 9.60463 11.8072 9.60463 12.0005C9.60463 12.1938 9.76133 12.3505 9.95463 12.3505H11.6501V14.046C11.6501 14.2393 11.8068 14.396 12.0001 14.396C12.1934 14.396 12.3501 14.2393 12.3501 14.046V12.3505H14.0455C14.2388 12.3505 14.3955 12.1938 14.3955 12.0005C14.3955 11.8072 14.2388 11.6505 14.0455 11.6505H12.3501V9.95508Z"
            fill="currentColor"
        />
    </s.Svg>
);
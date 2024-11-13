import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HouseFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M11.609 3.64854C11.8651 3.57939 12.135 3.57939 12.3911 3.64854C12.6459 3.71734 12.9023 3.89821 13.7459 4.55196L21.5406 10.5929C21.868 10.8466 22.3391 10.7869 22.5928 10.4595C22.8466 10.1321 22.7869 9.661 22.4595 9.40726L14.5512 3.27823C13.8745 2.75295 13.3657 2.358 12.7821 2.2004C12.2699 2.06211 11.7302 2.06211 11.218 2.2004C10.6343 2.358 10.1256 2.75295 9.4489 3.27824L1.54061 9.40726C1.21321 9.661 1.15349 10.1321 1.40722 10.4595C1.66096 10.7869 2.13206 10.8466 2.45946 10.5929L10.2542 4.55196C11.0978 3.89821 11.3542 3.71734 11.609 3.64854Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6795 5.16913C11.8896 5.1134 12.1105 5.1134 12.3206 5.16913C12.5677 5.23468 12.7741 5.39369 12.8996 5.49027L12.936 5.51821L20.0691 10.9221L20.1151 10.9568C20.3005 11.0966 20.4987 11.2462 20.6477 11.4439C20.7776 11.6163 20.8745 11.8113 20.9335 12.0189C21.0011 12.2571 21.0006 12.5053 21.0001 12.7375L21 12.7952V17.681C21.0001 18.2848 21.0001 18.783 20.9669 19.1889C20.9325 19.6105 20.8585 19.998 20.6731 20.362C20.3854 20.9265 19.9265 21.3855 19.362 21.6731C18.998 21.8585 18.6105 21.9325 18.1889 21.9669C17.783 22.0001 17.2848 22.0001 16.681 22.0001H7.31905C6.71533 22.0001 6.21707 22.0001 5.81117 21.9669C5.3896 21.9325 5.00207 21.8585 4.63807 21.6731C4.07359 21.3855 3.61464 20.9265 3.32702 20.362C3.14156 19.998 3.06763 19.6105 3.03319 19.1889C3.00003 18.783 3.00003 18.2848 3.00004 17.681L3.00004 12.7952L2.99996 12.7376C2.99949 12.5054 2.99897 12.2571 3.06663 12.0189C3.1256 11.8113 3.22249 11.6163 3.35238 11.4439C3.50139 11.2462 3.6996 11.0967 3.88497 10.9568L3.93098 10.9221L11.0641 5.51821L11.1005 5.49027C11.2259 5.39369 11.4324 5.23468 11.6795 5.16913ZM9.00004 15.0001C9.00004 13.3432 10.3432 12.0001 12 12.0001C13.6569 12.0001 15 13.3432 15 15.0001V20.5001H9.00004V15.0001Z"
            fill="currentColor"
        />
    </s.Svg>
);
import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SettingsFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3721 2.0004L11.3055 2.00021C11.0658 1.99917 10.7651 1.99787 10.4926 2.10581C10.2576 2.1989 10.0499 2.34989 9.8888 2.54475C9.70205 2.77067 9.61053 3.0571 9.53756 3.28544L9.51722 3.34879C9.31708 3.96588 9.1797 4.38774 9.04735 4.7084C8.91853 5.02046 8.81574 5.18147 8.71151 5.29252C8.47549 5.54398 8.17045 5.7201 7.83467 5.79876C7.68638 5.8335 7.49555 5.84202 7.16088 5.79755C6.81701 5.75184 6.38298 5.65988 5.74849 5.52466L5.68346 5.5106C5.44923 5.45963 5.15541 5.39568 4.86639 5.44444C4.6171 5.4865 4.38249 5.59088 4.18435 5.74788C3.95462 5.92992 3.8054 6.19098 3.68644 6.39909L3.65334 6.45681L3.02565 7.544L2.99221 7.60152C2.87146 7.8086 2.71999 8.06836 2.6772 8.35833C2.6403 8.60843 2.66721 8.8638 2.75543 9.10071C2.85772 9.3754 3.06001 9.59788 3.22127 9.77524L3.26596 9.82453C3.70031 10.3064 3.99696 10.6363 4.20848 10.9113C4.41433 11.1788 4.50237 11.3484 4.54643 11.4942C4.64619 11.8243 4.64619 12.1765 4.54643 12.5066C4.50237 12.6524 4.41433 12.822 4.20848 13.0896C3.99696 13.3645 3.70031 13.6944 3.26596 14.1763L3.22127 14.2256C3.06 14.4029 2.85771 14.6254 2.75543 14.9001C2.66721 15.137 2.6403 15.3924 2.6772 15.6425C2.71998 15.9324 2.87145 16.1922 2.99221 16.3993L3.02564 16.4568L3.65333 17.544L3.68643 17.6017C3.80539 17.8098 3.95461 18.0709 4.18434 18.2529C4.38248 18.4099 4.61709 18.5143 4.86638 18.5564C5.1554 18.6051 5.44922 18.5412 5.68346 18.4902L5.74849 18.4761C6.38298 18.3409 6.81701 18.249 7.16088 18.2033C7.49555 18.1588 7.68638 18.1673 7.83467 18.202C8.17045 18.2807 8.47549 18.4568 8.7115 18.7083C8.81574 18.8193 8.91853 18.9803 9.04735 19.2924C9.1797 19.6131 9.31708 20.0349 9.51722 20.652L9.53756 20.7154C9.61052 20.9437 9.70205 21.2301 9.8888 21.4561C10.0499 21.6509 10.2576 21.8019 10.4926 21.895C10.7651 22.0029 11.0658 22.0016 11.3055 22.0006L11.3721 22.0004H12.6274L12.694 22.0006C12.9337 22.0016 13.2344 22.0029 13.5069 21.895C13.7419 21.8019 13.9496 21.6509 14.1107 21.4561C14.2974 21.2301 14.389 20.9437 14.4619 20.7154L14.4823 20.652C14.6824 20.0349 14.8198 19.6131 14.9521 19.2924C15.081 18.9803 15.1838 18.8193 15.288 18.7083C15.524 18.4568 15.829 18.2807 16.1648 18.202C16.3131 18.1673 16.5039 18.1588 16.8386 18.2033C17.1825 18.249 17.6165 18.3409 18.251 18.4761L18.316 18.4902C18.5503 18.5412 18.8441 18.6051 19.1331 18.5564C19.3824 18.5143 19.617 18.4099 19.8151 18.2529C20.0449 18.0709 20.1941 17.8098 20.3131 17.6017L20.3462 17.544L20.9738 16.4568L21.0073 16.3993C21.128 16.1922 21.2795 15.9325 21.3223 15.6425C21.3592 15.3924 21.3323 15.137 21.2441 14.9001C21.1418 14.6254 20.9395 14.4029 20.7782 14.2256L20.7335 14.1763C20.2992 13.6944 20.0025 13.3645 19.791 13.0896C19.5852 12.822 19.4971 12.6524 19.4531 12.5066C19.3533 12.1765 19.3533 11.8243 19.4531 11.4942C19.4971 11.3484 19.5852 11.1788 19.791 10.9113C20.0025 10.6363 20.2992 10.3064 20.7335 9.82453L20.7782 9.77524C20.9395 9.59788 21.1418 9.3754 21.2441 9.10071C21.3323 8.8638 21.3592 8.60843 21.3223 8.35833C21.2795 8.06836 21.128 7.8086 21.0073 7.60152L20.9738 7.544L20.3462 6.45681L20.3131 6.39909C20.1941 6.19098 20.0449 5.92992 19.8151 5.74788C19.617 5.59088 19.3824 5.4865 19.1331 5.44444C18.8441 5.39568 18.5503 5.45963 18.316 5.5106L18.251 5.52466C17.6165 5.65988 17.1825 5.75184 16.8386 5.79755C16.5039 5.84202 16.3131 5.8335 16.1648 5.79876C15.829 5.7201 15.524 5.54398 15.288 5.29252C15.1838 5.18147 15.081 5.02046 14.9521 4.7084C14.8198 4.38774 14.6824 3.96588 14.4823 3.34879L14.4619 3.28544C14.389 3.0571 14.2974 2.77067 14.1107 2.54475C13.9496 2.34989 13.7419 2.1989 13.5069 2.10581C13.2344 1.99787 12.9337 1.99917 12.694 2.00021L12.6274 2.0004H11.3721ZM11.9998 16.2504C14.347 16.2504 16.2498 14.3476 16.2498 12.0004C16.2498 9.65322 14.347 7.75043 11.9998 7.75043C9.65255 7.75043 7.74976 9.65322 7.74976 12.0004C7.74976 14.3476 9.65255 16.2504 11.9998 16.2504Z"
            fill="currentColor"
        />
    </s.Svg>
);

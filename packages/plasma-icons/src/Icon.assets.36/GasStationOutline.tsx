import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const GasStationOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4575 3H18.7925C19.8065 2.99999 20.6282 2.99998 21.2944 3.05441C21.9816 3.11056 22.5909 3.22956 23.1565 3.51772C24.0502 3.97312 24.7769 4.69978 25.2323 5.59355C25.5204 6.1591 25.6394 6.76841 25.6956 7.45558C25.75 8.12178 25.75 8.94346 25.75 9.95748V32.75H6.5L6.5 9.9575C6.49999 8.94347 6.49998 8.12178 6.55441 7.45558C6.61056 6.76841 6.72956 6.1591 7.01772 5.59355C7.47312 4.69978 8.19977 3.97312 9.09354 3.51772C9.6591 3.22956 10.2684 3.11056 10.9556 3.05441C11.6218 2.99998 12.4435 2.99999 13.4575 3ZM11.1184 5.04777C10.555 5.09381 10.2381 5.17917 10.0015 5.29973C9.48408 5.56338 9.06338 5.98408 8.79973 6.50153C8.67917 6.73814 8.59381 7.05496 8.54777 7.61844C8.50078 8.19359 8.5 8.9334 8.5 10V30.75H23.75V10C23.75 8.9334 23.7492 8.19359 23.7022 7.61844C23.6562 7.05496 23.5708 6.73814 23.4503 6.50153C23.1866 5.98408 22.7659 5.56338 22.2485 5.29973C22.0119 5.17917 21.695 5.09381 21.1316 5.04777C20.5564 5.00078 19.8166 5 18.75 5H13.5C12.4334 5 11.6936 5.00078 11.1184 5.04777Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.1989 7.92142C28.7255 7.75511 29.2873 8.04722 29.4536 8.57387L31.1814 14.0453C31.5582 15.2386 31.75 16.4827 31.75 17.7341V24.25C31.75 26.4591 29.9591 28.25 27.75 28.25C25.5409 28.25 23.75 26.4591 23.75 24.25V16H25.75V24.25C25.75 25.3546 26.6454 26.25 27.75 26.25C28.8546 26.25 29.75 25.3546 29.75 24.25V17.7341C29.75 16.687 29.5895 15.646 29.2742 14.6475L27.5464 9.17613C27.3801 8.64948 27.6722 8.08773 28.1989 7.92142Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1715 9C13.1811 9 13.1905 9 13.2 9H19.05C19.0595 9 19.0689 9 19.0785 9C19.2635 8.99996 19.4574 8.99992 19.624 9.01354C19.8109 9.02881 20.0498 9.06607 20.2945 9.19074C20.6238 9.35852 20.8915 9.62623 21.0593 9.95552C21.1839 10.2002 21.2212 10.4391 21.2365 10.626C21.2501 10.7926 21.25 10.9865 21.25 11.1716C21.25 11.1811 21.25 11.1905 21.25 11.2V15.55C21.25 15.5595 21.25 15.5689 21.25 15.5784C21.25 15.7635 21.2501 15.9574 21.2365 16.124C21.2212 16.3109 21.1839 16.5498 21.0593 16.7945C20.8915 17.1238 20.6238 17.3915 20.2945 17.5593C20.0498 17.6839 19.8109 17.7212 19.624 17.7365C19.4574 17.7501 19.2635 17.75 19.0785 17.75C19.0689 17.75 19.0595 17.75 19.05 17.75H13.2C13.1905 17.75 13.1811 17.75 13.1715 17.75C12.9865 17.75 12.7926 17.7501 12.626 17.7365C12.4391 17.7212 12.2002 17.6839 11.9555 17.5593C11.6262 17.3915 11.3585 17.1238 11.1907 16.7945C11.0661 16.5498 11.0288 16.3109 11.0135 16.124C10.9999 15.9574 11 15.7635 11 15.5785C11 15.5689 11 15.5595 11 15.55V11.2C11 11.1905 11 11.1811 11 11.1715C11 10.9865 10.9999 10.7926 11.0135 10.626C11.0288 10.4391 11.0661 10.2002 11.1907 9.95552C11.3585 9.62623 11.6262 9.35852 11.9555 9.19074C12.2002 9.06607 12.4391 9.02881 12.626 9.01354C12.7926 8.99992 12.9865 8.99996 13.1715 9ZM13.0004 11.0004C13 11.0576 13 11.1226 13 11.2V15.55C13 15.6274 13 15.6924 13.0004 15.7496C13.0576 15.75 13.1226 15.75 13.2 15.75H19.05C19.1274 15.75 19.1924 15.75 19.2496 15.7496C19.25 15.6924 19.25 15.6274 19.25 15.55V11.2C19.25 11.1226 19.25 11.0576 19.2496 11.0004C19.1924 11 19.1274 11 19.05 11H13.2C13.1226 11 13.0576 11 13.0004 11.0004Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 31.75C5 31.1977 5.44772 30.75 6 30.75H26.25C26.8023 30.75 27.25 31.1977 27.25 31.75C27.25 32.3023 26.8023 32.75 26.25 32.75H6C5.44772 32.75 5 32.3023 5 31.75Z"
            fill="currentColor"
        />
    </s.Svg>
);

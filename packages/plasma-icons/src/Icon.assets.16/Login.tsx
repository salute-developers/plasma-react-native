import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Login: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.975 1.75C11.4471 1.74999 11.8318 1.74999 12.144 1.7755C12.4668 1.80187 12.756 1.85797 13.0254 1.99524C13.4488 2.21095 13.793 2.55516 14.0087 2.97852C14.146 3.24793 14.2021 3.53715 14.2284 3.85989C14.2539 4.17215 14.2539 4.55677 14.2539 5.02892V10.9751C14.2539 11.4472 14.2539 11.8318 14.2284 12.1441C14.2021 12.4668 14.146 12.7561 14.0087 13.0255C13.793 13.4488 13.4488 13.793 13.0254 14.0087C12.756 14.146 12.4668 14.2021 12.144 14.2285C11.8318 14.254 11.4472 14.254 10.9751 14.254H9.08162C8.11292 14.254 7.32764 13.4687 7.32764 12.5C7.32764 12.2239 7.55149 12 7.82764 12C8.10378 12 8.32764 12.2239 8.32764 12.5C8.32764 12.9164 8.66521 13.254 9.08162 13.254H10.9539C11.4522 13.254 11.7959 13.2536 12.0626 13.2318C12.3235 13.2105 12.4665 13.1712 12.5714 13.1177C12.8066 12.9979 12.9978 12.8067 13.1177 12.5715C13.1712 12.4665 13.2104 12.3236 13.2317 12.0627C13.2535 11.7959 13.2539 11.4523 13.2539 10.954V5.05C13.2539 4.5517 13.2535 4.20805 13.2317 3.94132C13.2104 3.68042 13.1712 3.53745 13.1177 3.43251C12.9978 3.19731 12.8066 3.00608 12.5714 2.88624C12.4665 2.83277 12.3235 2.7935 12.0626 2.77218C11.7959 2.75039 11.4522 2.75 10.9539 2.75H9.07764C8.66342 2.75 8.32764 3.08579 8.32764 3.5C8.32764 3.77614 8.10378 4 7.82764 4C7.55149 4 7.32764 3.77614 7.32764 3.5C7.32764 2.5335 8.11114 1.75 9.07764 1.75H10.975ZM9.35222 7.64807C9.4465 7.74191 9.49951 7.86945 9.49951 8.00247C9.49951 8.1355 9.4465 8.26304 9.35222 8.35687L7.23457 10.4644C7.03884 10.6592 6.72226 10.6584 6.52747 10.4627C6.33267 10.267 6.33343 9.9504 6.52916 9.7556L7.7883 8.50247H2.99951C2.72337 8.50247 2.49951 8.27862 2.49951 8.00247C2.49951 7.72633 2.72337 7.50247 2.99951 7.50247H7.7883L6.52916 6.24935C6.33343 6.05455 6.33267 5.73797 6.52747 5.54224C6.72226 5.34651 7.03884 5.34575 7.23457 5.54055L9.35222 7.64807Z"
            fill="currentColor"
        />
    </s.Svg>
);
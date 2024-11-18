import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WatchRoundOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.0922 3C12.9314 3 11.9233 3.79899 11.6582 4.92909L10.421 10.2038L10.4654 10.2142C8.33779 12.1295 7 14.9089 7 18.0001C7 21.0908 8.33738 23.8698 10.4644 25.7851L10.421 25.7953L11.6582 31.07C11.9233 32.2001 12.9314 32.9991 14.0922 32.9991H20.7669C21.9277 32.9991 22.9358 32.2001 23.2009 31.07L24.4381 25.7953L24.3949 25.7851C25.9857 24.3528 27.1347 22.4374 27.6131 20.2699H29.1239C29.331 20.2699 29.4989 20.102 29.4989 19.8949V16.1045C29.4989 15.8974 29.331 15.7295 29.1239 15.7295H27.6129C27.1344 13.5618 25.985 11.6464 24.394 10.2142L24.4381 10.2038L23.2009 4.92909C22.9358 3.79898 21.9277 3 20.7669 3H14.0922ZM17.4297 7.54102C15.787 7.54102 14.2333 7.92172 12.8515 8.5998L13.6054 5.38582C13.6584 5.1598 13.86 5 14.0922 5H20.7669C20.9991 5 21.2007 5.1598 21.2537 5.38582L22.0076 8.59962C20.6258 7.92165 19.0723 7.54102 17.4297 7.54102ZM13.6054 30.6133L12.8518 27.4005C14.2336 28.0785 15.7871 28.4592 17.4297 28.4592C19.0722 28.4592 20.6256 28.0786 22.0073 27.4007L21.2537 30.6133C21.2007 30.8393 20.9991 30.9991 20.7669 30.9991H14.0922C13.86 30.9991 13.6584 30.8393 13.6054 30.6133ZM17.4297 9.54102C12.777 9.54102 9 13.3253 9 18.0001C9 22.6749 12.777 26.4592 17.4297 26.4592C22.0824 26.4592 25.8594 22.6749 25.8594 18.0001C25.8594 13.3253 22.0824 9.54102 17.4297 9.54102Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LineLinkToto: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.0303 3.46967L21.7803 6.21967C21.921 6.36032 22 6.55109 22 6.75C22 6.94892 21.921 7.13968 21.7803 7.28033L19.0303 10.0303C18.7374 10.3232 18.2626 10.3232 17.9697 10.0303C17.6768 9.73744 17.6768 9.26257 17.9697 8.96967L19.4393 7.5L15 7.5C13.7574 7.5 12.75 8.50736 12.75 9.75V14.25C12.75 16.3211 11.0711 18 9 18L4.56066 18L6.03033 19.4697C6.32322 19.7626 6.32322 20.2374 6.03033 20.5303C5.73744 20.8232 5.26256 20.8232 4.96967 20.5303L2.21967 17.7803C1.92678 17.4874 1.92678 17.0126 2.21967 16.7197L4.96967 13.9697C5.26256 13.6768 5.73744 13.6768 6.03033 13.9697C6.32322 14.2626 6.32322 14.7374 6.03033 15.0303L4.56066 16.5L9 16.5C10.2426 16.5 11.25 15.4926 11.25 14.25V9.75C11.25 7.67893 12.9289 6 15 6L19.4393 6L17.9697 4.53033C17.6768 4.23744 17.6768 3.76256 17.9697 3.46967C18.2626 3.17678 18.7374 3.17678 19.0303 3.46967Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RepeatCircleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9697 2.71967C12.2626 2.42678 12.7374 2.42678 13.0303 2.71967L15.5303 5.21967C15.8232 5.51256 15.8232 5.98744 15.5303 6.28033L13.0303 8.78033C12.7374 9.07322 12.2626 9.07322 11.9697 8.78033C11.6768 8.48744 11.6768 8.01256 11.9697 7.71967L13.1893 6.5H9C5.96243 6.5 3.5 8.96243 3.5 12C3.5 15.0376 5.96243 17.5 9 17.5H15C18.0376 17.5 20.5 15.0376 20.5 12C20.5 10.7607 20.091 9.61915 19.4004 8.6999C19.1516 8.36874 19.2183 7.89858 19.5495 7.64977C19.8807 7.40096 20.3508 7.46772 20.5996 7.79888C21.4787 8.969 22 10.4247 22 12C22 15.866 18.866 19 15 19H9C5.13401 19 2 15.866 2 12C2 8.13401 5.13401 5 9 5H13.1893L11.9697 3.78033C11.6768 3.48744 11.6768 3.01256 11.9697 2.71967Z"
            fill="currentColor"
        />
    </s.Svg>
);

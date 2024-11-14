import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Battery80Fill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V4.10819C15.2884 4.15982 15.5316 4.2361 15.7528 4.34878C16.3549 4.65557 16.8444 5.14511 17.1512 5.74723C17.5 6.43175 17.5 7.32783 17.5 9.12V16.88C17.5 18.6722 17.5 19.5683 17.1512 20.2528C16.8444 20.8549 16.3549 21.3444 15.7528 21.6512C15.0683 22 14.1722 22 12.38 22H11.62C9.82783 22 8.93175 22 8.24723 21.6512C7.64511 21.3444 7.15557 20.8549 6.84878 20.2528C6.5 19.5683 6.5 18.6722 6.5 16.88V9.12C6.5 7.32783 6.5 6.43175 6.84878 5.74723C7.15557 5.14511 7.64511 4.65557 8.24723 4.34878C8.46838 4.2361 8.71161 4.15982 9 4.10819V3ZM8 19.5C8 20.0523 8.44772 20.5 9 20.5H15C15.5523 20.5 16 20.0523 16 19.5V19C16 18.7239 15.7761 18.5 15.5 18.5H8.5C8.22386 18.5 8 18.7239 8 19V19.5ZM8.5 17.8999C8.22386 17.8999 8 17.676 8 17.3999V16.3999C8 16.1238 8.22386 15.8999 8.5 15.8999H15.5C15.7761 15.8999 16 16.1238 16 16.3999V17.3999C16 17.676 15.7761 17.8999 15.5 17.8999H8.5ZM8 14.7998C8 15.0759 8.22386 15.2998 8.5 15.2998H15.5C15.7761 15.2998 16 15.0759 16 14.7998V13.7998C16 13.5237 15.7761 13.2998 15.5 13.2998H8.5C8.22386 13.2998 8 13.5237 8 13.7998V14.7998ZM8.5 12.7002C8.22386 12.7002 8 12.4763 8 12.2002V11.2002C8 10.9241 8.22386 10.7002 8.5 10.7002H15.5C15.7761 10.7002 16 10.9241 16 11.2002V12.2002C16 12.4763 15.7761 12.7002 15.5 12.7002H8.5ZM8 9.6001C8 9.87624 8.22386 10.1001 8.5 10.1001H15.5C15.7761 10.1001 16 9.87624 16 9.6001V8.6001C16 8.32396 15.7761 8.1001 15.5 8.1001H8.5C8.22386 8.1001 8 8.32396 8 8.6001V9.6001Z"
            fill="currentColor"
        />
    </s.Svg>
);
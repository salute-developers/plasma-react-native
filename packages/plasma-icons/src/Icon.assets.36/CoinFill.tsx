import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CoinFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.3293 26.3534C30.7781 24.1977 31.623 21.6054 31.623 18.8165C31.623 11.3239 25.5246 5.25 18.0019 5.25C10.4792 5.25 4.38086 11.3239 4.38086 18.8165C4.38086 21.6054 5.22578 24.1977 6.67457 26.3534H29.3293ZM17.0023 10.9023C17.0023 10.3501 17.45 9.90234 18.0023 9.90234C19.1765 9.90234 20.3393 10.1327 21.4243 10.5803C22.5093 11.028 23.4955 11.6842 24.3264 12.5117C25.1572 13.3393 25.8165 14.3219 26.2664 15.4037C26.7163 16.4854 26.9479 17.645 26.9479 18.8161C26.9479 19.3684 26.5002 19.8161 25.9479 19.8161C25.3956 19.8161 24.9479 19.3684 24.9479 18.8161C24.9479 17.9088 24.7685 17.0102 24.4197 16.1717C24.071 15.3331 23.5598 14.571 22.915 13.9288C22.2702 13.2866 21.5045 12.7769 20.6616 12.4292C19.8186 12.0814 18.9149 11.9023 18.0023 11.9023C17.45 11.9023 17.0023 11.4546 17.0023 10.9023ZM4 28.7451C3.44772 28.7451 3 29.1928 3 29.7451C3 30.2974 3.44772 30.7451 4 30.7451H31.9989C32.5512 30.7451 32.9989 30.2974 32.9989 29.7451C32.9989 29.1928 32.5512 28.7451 31.9989 28.7451H4Z"
            fill="currentColor"
        />
    </s.Svg>
);
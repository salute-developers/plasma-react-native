import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MessageChatFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.47042 17.8898C5.47042 10.909 11.1294 5.25 18.1102 5.25C25.091 5.25 30.75 10.909 30.75 17.8898C30.75 24.8706 25.091 30.5296 18.1102 30.5296C16.6084 30.5296 15.1656 30.2672 13.8267 29.785C13.023 29.4956 12.2336 29.4122 11.5389 29.6068L7.72118 30.6757C6.26096 31.0846 4.91544 29.739 5.3243 28.2788L6.39325 24.4612C6.58779 23.7664 6.50443 22.977 6.21498 22.1733C5.73278 20.8344 5.47042 19.3917 5.47042 17.8898ZM25.0983 16.9503C24.7417 16.5335 24.2118 16.2693 23.6202 16.2693C22.5462 16.2693 21.6756 17.1399 21.6756 18.2139C21.6756 18.6953 21.8506 19.1359 22.1404 19.4755C22.497 19.8936 23.0277 20.1587 23.6204 20.1587C24.6943 20.1587 25.5649 19.2881 25.5649 18.2141C25.5649 17.7316 25.3892 17.2902 25.0983 16.9503ZM19.731 18.2141C19.731 18.2308 19.7307 18.2475 19.7303 18.2641L19.731 18.2141ZM19.7303 18.2641C19.7038 19.315 18.8436 20.1587 17.7864 20.1587C16.7331 20.1587 15.8754 19.3212 15.8428 18.2759C15.8424 18.2636 15.8421 18.2513 15.842 18.239C15.8419 18.2307 15.8418 18.2223 15.8418 18.2139C15.8418 17.1399 16.7124 16.2693 17.7864 16.2693C18.8603 16.2693 19.731 17.1399 19.731 18.2139C19.731 18.2139 19.731 18.214 19.731 18.214M13.4286 19.48C13.7207 19.1398 13.8972 18.6974 13.8972 18.2139C13.8972 17.1399 13.0266 16.2693 11.9526 16.2693C11.3621 16.2693 10.833 16.5325 10.4764 16.948C10.1843 17.2882 10.0078 17.7306 10.0078 18.2141C10.0078 19.2881 10.8784 20.1587 11.9524 20.1587C12.5429 20.1587 13.072 19.8955 13.4286 19.48Z"
            fill="currentColor"
        />
    </s.Svg>
);
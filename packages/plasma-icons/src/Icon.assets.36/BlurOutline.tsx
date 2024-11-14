import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BlurOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.9433 4.19038C20.1972 4.44422 20.1972 4.85578 19.9433 5.10962L5.10962 19.9433C4.85578 20.1971 4.44422 20.1971 4.19038 19.9433C3.93654 19.6895 3.93654 19.2779 4.19038 19.0241L19.0241 4.19038C19.2779 3.93654 19.6895 3.93654 19.9433 4.19038ZM24.6414 5.42654C25.0319 5.81706 25.0319 6.45023 24.6414 6.84075L6.84099 24.6412C6.45047 25.0317 5.8173 25.0317 5.42678 24.6412C5.03626 24.2507 5.03626 23.6175 5.42678 23.227L23.2272 5.42654C23.6177 5.03601 24.2509 5.03601 24.6414 5.42654ZM30.5745 11.3597C30.9651 11.7502 30.9651 12.3833 30.5745 12.7739L12.7741 30.5743C12.3836 30.9648 11.7504 30.9648 11.3599 30.5743C10.9694 30.1838 10.9694 29.5506 11.3599 29.1601L29.1603 11.3597C29.5508 10.9691 30.184 10.9691 30.5745 11.3597ZM31.8105 16.9768C32.0643 16.723 32.0643 16.3114 31.8105 16.0576C31.5567 15.8037 31.1451 15.8037 30.8913 16.0576L16.0576 30.8913C15.8037 31.1451 15.8037 31.5567 16.0576 31.8105C16.3114 32.0644 16.723 32.0644 16.9768 31.8105L31.8105 16.9768ZM28.3494 9.06573C28.7399 8.67521 28.7399 8.04204 28.3494 7.65152C27.9589 7.26099 27.3257 7.26099 26.9352 7.65152L7.65139 26.9353C7.26087 27.3258 7.26087 27.959 7.65139 28.3495C8.04191 28.74 8.67508 28.74 9.0656 28.3495L28.3494 9.06573ZM29.9562 23.1034C30.21 23.3573 30.21 23.7688 29.9562 24.0227L24.0227 29.9562C23.7689 30.21 23.3573 30.21 23.1035 29.9562C22.8496 29.7023 22.8496 29.2908 23.1035 29.0369L29.0369 23.1034C29.2908 22.8496 29.7023 22.8496 29.9562 23.1034ZM12.8971 6.96369C13.1509 6.70985 13.1509 6.29829 12.8971 6.04445C12.6433 5.79061 12.2317 5.79061 11.9779 6.04445L6.04438 11.9779C5.79054 12.2318 5.79054 12.6433 6.04438 12.8972C6.29823 13.151 6.70978 13.151 6.96362 12.8972L12.8971 6.96369Z"
            fill="currentColor"
        />
    </s.Svg>
);
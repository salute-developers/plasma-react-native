import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HummerOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6177 4.05758L12.0557 5.49554C12.0653 5.50516 12.0748 5.51463 12.0841 5.52396C12.2604 5.70021 12.3868 5.82653 12.488 5.94966C13.4471 7.11674 13.4727 8.78534 12.5649 9.97924L14.0213 11.4357C15.2153 10.5279 16.8839 10.5535 18.0509 11.5126C18.1741 11.6138 18.3004 11.7402 18.4766 11.9165L19 12.4398L20.9396 10.5002L14.9703 4.53094C13.7882 3.34887 11.9697 3.19107 10.6177 4.05758ZM12.9396 12.4752L11.5254 11.061L4.04533 18.541C3.65481 18.9316 3.65481 19.5647 4.04533 19.9553C4.43586 20.3458 5.06902 20.3458 5.45955 19.9553L12.9396 12.4752ZM10.995 9.47002L2.98467 17.4804C2.00836 18.4567 2.00836 20.0396 2.98467 21.0159C3.96098 21.9922 5.5439 21.9922 6.52021 21.0159L14.5306 13.0055C14.7469 12.7892 14.8175 12.7198 14.8764 12.6715C15.5221 12.1409 16.4529 12.1409 17.0986 12.6715C17.1574 12.7198 17.228 12.7892 17.4444 13.0056L18.4697 14.0308C18.6103 14.1715 18.8011 14.2505 19 14.2505C19.1989 14.2505 19.3897 14.1715 19.5303 14.0308L22.5306 11.0306C22.8234 10.7377 22.8234 10.2628 22.5306 9.96991L16.0309 3.47028C14.081 1.52038 10.9196 1.52031 8.96967 3.47013C8.82901 3.61078 8.74999 3.80155 8.74998 4.00047C8.74998 4.19938 8.829 4.39016 8.96965 4.53081L10.995 6.5562C11.2114 6.77255 11.2807 6.84318 11.3291 6.90202C11.8597 7.54771 11.8597 8.4785 11.3291 9.1242C11.2807 9.18304 11.2114 9.25367 10.995 9.47002Z"
            fill="currentColor"
        />
    </s.Svg>
);

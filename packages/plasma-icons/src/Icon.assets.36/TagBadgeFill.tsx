import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TagBadgeFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.017 3C20.027 3 19.0775 3.39584 18.3774 4.10044L5.2027 17.3605C3.5991 18.9745 3.5991 21.5913 5.2027 23.2052L12.7382 30.7895C14.3418 32.4035 16.9417 32.4035 18.5453 30.7895L31.9066 17.3416C32.6067 16.637 33 15.6814 33 14.6849V6.75714C33 4.68213 31.3287 3 29.267 3H21.017ZM25.5347 12.7686C26.7717 12.7686 27.7745 11.7593 27.7745 10.5143C27.7745 9.26928 26.7717 8.26 25.5347 8.26C24.2977 8.26 23.2949 9.26928 23.2949 10.5143C23.2949 11.7593 24.2977 12.7686 25.5347 12.7686Z"
            fill="currentColor"
        />
    </s.Svg>
);

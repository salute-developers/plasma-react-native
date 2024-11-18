import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Percent: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.424 6.5C8.25682 6.5 6.5 8.25682 6.5 10.424C6.5 12.5911 8.25682 14.3479 10.424 14.3479C12.5911 14.3479 14.3479 12.5911 14.3479 10.424C14.3479 8.25682 12.5911 6.5 10.424 6.5ZM4.5 10.424C4.5 7.15225 7.15225 4.5 10.424 4.5C13.6957 4.5 16.3479 7.15225 16.3479 10.424C16.3479 13.6957 13.6957 16.3479 10.424 16.3479C7.15225 16.3479 4.5 13.6957 4.5 10.424ZM29.7071 6.29289C30.0976 6.68342 30.0976 7.31658 29.7071 7.70711L7.70711 29.7071C7.31658 30.0976 6.68342 30.0976 6.29289 29.7071C5.90237 29.3166 5.90237 28.6834 6.29289 28.2929L28.2929 6.29289C28.6834 5.90237 29.3166 5.90237 29.7071 6.29289ZM21.6504 25.5753C21.6504 23.4082 23.4072 21.6514 25.5744 21.6514C27.7415 21.6514 29.4983 23.4082 29.4983 25.5753C29.4983 27.7425 27.7415 29.4993 25.5744 29.4993C23.4072 29.4993 21.6504 27.7425 21.6504 25.5753ZM25.5744 19.6514C22.3026 19.6514 19.6504 22.3036 19.6504 25.5753C19.6504 28.8471 22.3026 31.4993 25.5744 31.4993C28.8461 31.4993 31.4983 28.8471 31.4983 25.5753C31.4983 22.3036 28.8461 19.6514 25.5744 19.6514Z"
            fill="currentColor"
        />
    </s.Svg>
);

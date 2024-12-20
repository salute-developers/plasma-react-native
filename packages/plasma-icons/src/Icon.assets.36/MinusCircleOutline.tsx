import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MinusCircleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 17.9994C5 10.82 10.82 5 17.9994 5C25.1788 5 30.9989 10.82 30.9989 17.9994C30.9989 25.1788 25.1788 30.9989 17.9994 30.9989C10.82 30.9989 5 25.1788 5 17.9994ZM17.9994 3C9.71548 3 3 9.71548 3 17.9994C3 26.2834 9.71548 32.9989 17.9994 32.9989C26.2834 32.9989 32.9989 26.2834 32.9989 17.9994C32.9989 9.71548 26.2834 3 17.9994 3ZM8.91797 16.9995C8.36568 16.9995 7.91797 17.4473 7.91797 17.9995C7.91797 18.5518 8.36568 18.9995 8.91797 18.9995H27.0794C27.6317 18.9995 28.0794 18.5518 28.0794 17.9995C28.0794 17.4473 27.6317 16.9995 27.0794 16.9995H8.91797Z"
            fill="currentColor"
        />
    </s.Svg>
);

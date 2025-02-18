import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LightningFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1512 1.07199C10.3615 1.19739 10.4569 1.45561 10.3798 1.69104L8.88726 6.25002H12.9844C13.1885 6.25002 13.3733 6.37259 13.4559 6.56263C13.5385 6.75267 13.5032 6.97441 13.3659 7.12817L6.49091 14.8282C6.32696 15.0118 6.05913 15.0535 5.84881 14.9281C5.63849 14.8026 5.54314 14.5444 5.62021 14.309L7.11274 9.75002H3.01563C2.81154 9.75002 2.62666 9.62745 2.54409 9.43741C2.46152 9.24737 2.49682 9.02563 2.6341 8.87187L9.50909 1.17187C9.67304 0.988242 9.94087 0.946581 10.1512 1.07199Z"
            fill="currentColor"
        />
    </s.Svg>
);

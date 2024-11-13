import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RombFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.G clipPath="url(#clip0_40914_231)">
            <s.Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.95091 1.05264C8.95506 1.05679 8.95922 1.06094 8.96338 1.06511L14.7438 6.84555C14.8545 6.95622 14.9588 7.06048 15.0393 7.15529C15.1268 7.25835 15.2166 7.38426 15.2693 7.54644C15.3435 7.77507 15.3435 8.02134 15.2693 8.24996C15.2166 8.41215 15.1268 8.53805 15.0393 8.64111C14.9588 8.73592 14.8545 8.84017 14.7438 8.95084L8.95091 14.7438C8.84023 14.8545 8.73599 14.9587 8.64117 15.0392C8.53811 15.1267 8.41221 15.2165 8.25002 15.2692C8.0214 15.3435 7.77513 15.3435 7.5465 15.2692C7.38432 15.2165 7.25841 15.1267 7.15535 15.0392C7.06054 14.9587 6.95629 14.8545 6.84562 14.7438L1.05269 8.95084C0.942001 8.84017 0.837734 8.73592 0.757243 8.64111C0.669752 8.53805 0.579968 8.41215 0.527271 8.24996C0.452987 8.02134 0.452986 7.77507 0.527271 7.54644C0.579968 7.38426 0.669752 7.25835 0.757243 7.15529C0.837736 7.06048 0.942005 6.95623 1.0527 6.84555L6.83314 1.06511C6.83731 1.06095 6.84146 1.05679 6.84561 1.05264C6.95629 0.941944 7.06054 0.837675 7.15535 0.757182C7.25841 0.669691 7.38432 0.579907 7.5465 0.52721C7.77513 0.452925 8.0214 0.452925 8.25002 0.52721C8.41221 0.579907 8.53811 0.669691 8.64117 0.757181C8.73599 0.837675 8.84024 0.941944 8.95091 1.05264Z"
                fill="currentColor"
            />
        </s.G>
        <s.Defs>
            <s.ClipPath id="clip0_40914_231">
                <s.Rect width="16" height="16" fill="currentColor" />
            </s.ClipPath>
        </s.Defs>
    </s.Svg>
);
import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BulbDiodeFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M12 2C7.58172 2 4 5.58172 4 10C4 12.3144 4.98377 14.4002 6.55376 15.8599C7.04148 16.3134 7.67184 16.5 8.26377 16.5H15.7362C16.3282 16.5 16.9585 16.3134 17.4462 15.8599C19.0162 14.4002 20 12.3144 20 10C20 5.58172 16.4183 2 12 2Z"
            fill="currentColor"
        />
        <s.Path
            d="M7.75 18.5C7.75 18.0858 8.08579 17.75 8.5 17.75H15.5C15.9142 17.75 16.25 18.0858 16.25 18.5C16.25 18.9142 15.9142 19.25 15.5 19.25H8.5C8.08579 19.25 7.75 18.9142 7.75 18.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M8.75 21.25C8.75 20.8358 9.08579 20.5 9.5 20.5H14.5C14.9142 20.5 15.25 20.8358 15.25 21.25C15.25 21.6642 14.9142 22 14.5 22H9.5C9.08579 22 8.75 21.6642 8.75 21.25Z"
            fill="currentColor"
        />
    </s.Svg>
);

import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Mindmap: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5 7.74707H16.0964C16.4285 9.04248 17.6038 10 19.0027 10C20.6595 10 22.0027 8.65685 22.0027 7C22.0027 5.34315 20.6595 4 19.0027 4C17.6059 4 16.432 4.95464 16.098 6.24707H13.5C12.2574 6.24707 11.25 7.25443 11.25 8.49707V11.25H7.90549C7.57245 9.95608 6.39788 9 5 9C3.34315 9 2 10.3431 2 12C2 13.6569 3.34315 15 5 15C6.39788 15 7.57245 14.0439 7.90549 12.75H11.25V15.501C11.25 16.7437 12.2574 17.751 13.5 17.751H16.0971C16.4299 19.0452 17.6046 20.0016 19.0027 20.0016C20.6595 20.0016 22.0027 18.6584 22.0027 17.0016C22.0027 15.3447 20.6595 14.0016 19.0027 14.0016C17.605 14.0016 16.4306 14.9574 16.0973 16.251H13.5C13.0858 16.251 12.75 15.9152 12.75 15.501V8.49707C12.75 8.08286 13.0858 7.74707 13.5 7.74707ZM19.0027 5.5C18.1743 5.5 17.5027 6.17157 17.5027 7C17.5027 7.82843 18.1743 8.5 19.0027 8.5C19.8311 8.5 20.5027 7.82843 20.5027 7C20.5027 6.17157 19.8311 5.5 19.0027 5.5ZM6.5 12C6.5 11.1716 5.82843 10.5 5 10.5C4.17157 10.5 3.5 11.1716 3.5 12C3.5 12.8284 4.17157 13.5 5 13.5C5.82843 13.5 6.5 12.8284 6.5 12ZM17.5027 17.0016C17.5027 16.1732 18.1743 15.5016 19.0027 15.5016C19.8311 15.5016 20.5027 16.1732 20.5027 17.0016C20.5027 17.83 19.8311 18.5016 19.0027 18.5016C18.1743 18.5016 17.5027 17.83 17.5027 17.0016Z"
            fill="currentColor"
        />
    </s.Svg>
);
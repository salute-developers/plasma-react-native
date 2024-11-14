import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const NoteFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.5843 7.97548L18.6211 4V11.946L30.0004 16.4865V10.0653C30.0004 9.14453 29.4394 8.31671 28.5843 7.97548ZM13.3103 32C16.2432 32 18.6207 29.6283 18.6207 26.7027C18.6207 23.7771 16.2432 21.4054 13.3103 21.4054C10.3775 21.4054 8 23.7771 8 26.7027C8 29.6283 10.3775 32 13.3103 32Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.0601 3.17218C18.3347 2.98611 18.6836 2.94829 18.9917 3.07121L28.9549 7.04669C30.1901 7.53957 31.0004 8.73531 31.0004 10.0653V16.4865C31.0004 16.8182 30.836 17.1283 30.5614 17.3143C30.2868 17.5004 29.9379 17.5382 29.6298 17.4153L19.6211 13.4216V26.7027C19.6211 30.1829 16.7931 33 13.3103 33C9.82756 33 7 30.1829 7 26.7027C7 23.2225 9.82756 20.4054 13.3103 20.4054C14.9765 20.4054 16.4927 21.0501 17.6211 22.1038V4C17.6211 3.66833 17.7855 3.35824 18.0601 3.17218ZM19.6211 11.2683L29.0004 15.0108V10.0653C29.0004 9.55374 28.6888 9.09384 28.2137 8.90427L19.6211 5.47569V11.2683ZM13.3103 22.4054C10.9275 22.4054 9 24.3317 9 26.7027C9 29.0737 10.9275 31 13.3103 31C15.6932 31 17.6207 29.0737 17.6207 26.7027C17.6207 24.3317 15.6932 22.4054 13.3103 22.4054Z"
            fill="currentColor"
        />
    </s.Svg>
);
import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Link: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.9097 28.3303C5.51773 25.9384 5.51773 22.0602 7.9097 19.6683L10.8265 16.7514C11.217 16.3609 11.217 15.7278 10.8265 15.3372C10.436 14.9467 9.80282 14.9467 9.4123 15.3372L6.49548 18.254C3.32247 21.4271 3.32247 26.5715 6.49548 29.7445C9.66849 32.9175 14.813 32.9175 17.986 29.7445L20.9028 26.8277C21.2933 26.4372 21.2933 25.804 20.9028 25.4135C20.5123 25.023 19.8791 25.023 19.4886 25.4135L16.5718 28.3303C14.1798 30.7223 10.3017 30.7223 7.9097 28.3303ZM15.2459 9.5036C14.8554 9.89413 14.8554 10.5273 15.2459 10.9178C15.6365 11.3083 16.2696 11.3083 16.6601 10.9178L19.577 8.001C21.9689 5.60904 25.8471 5.60904 28.239 8.001C30.631 10.393 30.631 14.2711 28.239 16.6631L25.3222 19.5799C24.9317 19.9704 24.9317 20.6036 25.3222 20.9941C25.7127 21.3846 26.3459 21.3846 26.7364 20.9941L29.6532 18.0773C32.8263 14.9043 32.8263 9.7598 29.6532 6.58679C26.4802 3.41378 21.3358 3.41378 18.1628 6.58679L15.2459 9.5036ZM11.5336 23.2922C11.1431 23.6827 11.1431 24.3159 11.5336 24.7064C11.9241 25.0969 12.5573 25.0969 12.9478 24.7064L24.6151 13.0391C25.0056 12.6486 25.0056 12.0154 24.6151 11.6249C24.2246 11.2344 23.5914 11.2344 23.2009 11.6249L11.5336 23.2922Z"
            fill="currentColor"
        />
    </s.Svg>
);

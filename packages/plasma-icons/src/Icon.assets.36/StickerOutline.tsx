import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const StickerOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.909 5.33252C15.8639 5.34053 15.8159 5.34912 15.7649 5.35831C9.78619 6.43401 5.25 11.6646 5.25 17.9527C5.25 25.0203 10.9795 30.7498 18.0471 30.7498C24.3352 30.7498 29.5658 26.2136 30.6415 20.2349C30.6507 20.1838 30.6593 20.1359 30.6673 20.0908C29.7296 20.3218 28.7498 20.4443 27.7424 20.4443C21.0118 20.4443 15.5555 14.988 15.5555 8.25742C15.5555 7.25004 15.678 6.27023 15.909 5.33252ZM17.9089 5.58697C17.6786 6.43723 17.5555 7.33234 17.5555 8.25742C17.5555 13.8835 22.1163 18.4443 27.7424 18.4443C28.6675 18.4443 29.5626 18.3212 30.4128 18.0909C30.2381 17.7715 30.036 17.5586 29.3896 16.9123L19.0875 6.61017C18.4411 5.96382 18.2283 5.76174 17.9089 5.58697ZM15.4378 3.38505C16.0222 3.27986 16.4386 3.20489 17.1229 3.28116C17.2405 3.29427 17.3606 3.31518 17.4759 3.33956C17.9135 3.43215 18.4691 3.61587 18.8511 3.82276C19.4577 4.15131 19.8679 4.56177 20.4374 5.13162C20.4586 5.15284 20.48 5.17429 20.5017 5.19596L30.8038 15.4981C30.8255 15.5197 30.8469 15.5412 30.8682 15.5624C31.438 16.1319 31.8485 16.5421 32.177 17.1487C32.3839 17.5307 32.5676 18.0863 32.6602 18.5239C32.6846 18.6392 32.7055 18.7593 32.7186 18.8769C32.7949 19.5612 32.7199 19.9776 32.6147 20.562L32.6099 20.5891C31.3658 27.5035 25.3202 32.7498 18.0471 32.7498C9.87489 32.7498 3.25 26.1249 3.25 17.9527C3.25 10.6796 8.49624 4.63399 15.4107 3.38992L15.4378 3.38505Z"
            fill="currentColor"
        />
    </s.Svg>
);
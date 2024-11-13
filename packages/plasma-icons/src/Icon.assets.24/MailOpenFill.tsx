import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MailOpenFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7385 2.48359C12.2511 2.38568 11.749 2.38568 11.2616 2.48359C10.7091 2.59456 10.1982 2.87097 9.4593 3.27073L4.8023 5.78802C3.99171 6.22576 3.43155 6.52826 3.01307 6.97507C2.64413 7.36898 2.36457 7.83789 2.19348 8.34975C1.99941 8.93037 1.99966 9.56697 2.00003 10.4882L2.00006 16.482C2.00006 17.2949 2.00005 17.9505 2.04343 18.4814C2.08809 19.028 2.18245 19.5082 2.40879 19.9524C2.76831 20.658 3.34199 21.2317 4.0476 21.5912C4.49182 21.8175 4.97196 21.9119 5.5186 21.9566C6.0495 21.9999 6.70511 21.9999 7.51794 21.9999H16.4822C17.295 21.9999 17.9506 21.9999 18.4815 21.9566C19.0282 21.9119 19.5083 21.8175 19.9525 21.5912C20.6581 21.2317 21.2318 20.658 21.5913 19.9524C21.8177 19.5082 21.912 19.028 21.9567 18.4814C22.0001 17.9505 22.0001 17.2949 22.0001 16.4821L22.0001 10.4882C22.0005 9.56697 22.0007 8.93037 21.8067 8.34975C21.6356 7.83789 21.356 7.36898 20.9871 6.97507C20.5686 6.52826 20.0084 6.22576 19.1978 5.78802L14.5408 3.27072C13.8019 2.87097 13.291 2.59456 12.7385 2.48359ZM5.89313 9.86126C5.54037 9.64417 5.07841 9.75416 4.86132 10.1069C4.64423 10.4597 4.75422 10.9217 5.10699 11.1387L10.0347 14.1712C11.24 14.9129 12.7602 14.9129 13.9654 14.1712L18.8931 11.1387C19.2459 10.9217 19.3559 10.4597 19.1388 10.1069C18.9217 9.75416 18.4598 9.64417 18.107 9.86126L13.1793 12.8937C12.4561 13.3387 11.544 13.3387 10.8208 12.8937L5.89313 9.86126Z"
            fill="currentColor"
        />
    </s.Svg>
);
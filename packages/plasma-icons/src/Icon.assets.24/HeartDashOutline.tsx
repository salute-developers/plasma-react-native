import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HeartDashOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.0155 4.0401C21.3084 3.7472 21.3084 3.27233 21.0155 2.97944C20.7226 2.68654 20.2477 2.68654 19.9548 2.97944L18.554 4.38024C17.8819 4.0889 17.1227 3.91992 16.2866 3.91992C15.2259 3.91992 14.2823 4.33652 13.4856 4.88714C12.939 5.26493 12.442 5.71929 12 6.18115C11.558 5.71929 11.061 5.26493 10.5144 4.88714C9.71774 4.33652 8.77411 3.91992 7.71342 3.91992C4.16377 3.91992 2 6.96576 2 9.48967C2 11.6599 3.02813 13.6965 4.42451 15.4906C4.85681 16.046 5.32992 16.5853 5.8285 17.1057L2.98425 19.95C2.69135 20.2429 2.69135 20.7178 2.98425 21.0107C3.27714 21.3036 3.75201 21.3036 4.04491 21.0107L21.0155 4.0401ZM6.88939 16.0449L17.3751 5.55915C17.0353 5.46923 16.6718 5.41992 16.2866 5.41992C15.6294 5.41992 14.9804 5.67742 14.3385 6.12108C13.6953 6.56563 13.1014 7.16826 12.5687 7.78784L12 8.44927L11.4313 7.78784C10.8986 7.16826 10.3047 6.56563 9.66151 6.12108C9.01962 5.67742 8.37056 5.41992 7.71342 5.41992C5.11129 5.41992 3.5 7.66986 3.5 9.48967C3.5 11.1851 4.30895 12.9 5.60823 14.5693C6.0001 15.0728 6.43137 15.5654 6.88939 16.0449ZM19.8222 7.35455L20.8985 6.27825C21.6132 7.26228 22 8.42262 22 9.48967C22 11.6599 20.9719 13.6965 19.5755 15.4906C18.1738 17.2915 16.343 18.9224 14.6064 20.2945L14.5116 20.3694C13.8863 20.8642 13.4127 21.239 12.8094 21.4043C12.3046 21.5427 11.6954 21.5427 11.1906 21.4043C10.5874 21.239 10.1137 20.8642 9.4884 20.3694L9.48837 20.3694L9.39357 20.2945C8.93748 19.9341 8.4749 19.5559 8.0153 19.1615L9.0792 18.0976C9.49105 18.4489 9.90802 18.7892 10.3235 19.1175C11.0861 19.72 11.3135 19.8827 11.5871 19.9577C11.8324 20.0249 12.1676 20.0249 12.4129 19.9577C12.6865 19.8827 12.9139 19.72 13.6765 19.1175C15.3743 17.7761 17.0978 16.2318 18.3918 14.5693C19.6911 12.9 20.5 11.1851 20.5 9.48967C20.5 8.7908 20.2624 8.02849 19.8222 7.35455Z"
            fill="currentColor"
        />
    </s.Svg>
);
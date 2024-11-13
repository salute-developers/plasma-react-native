import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BulbDiodeOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.9991 3C11.3745 3 6 8.35793 6 14.9724C6 18.4419 7.48039 21.5675 9.84158 23.7525C10.5453 24.4037 11.456 24.6748 12.3174 24.6748H23.6809C24.5422 24.6748 25.4529 24.4037 26.1567 23.7525C28.5179 21.5675 29.9982 18.4419 29.9982 14.9724C29.9982 8.35793 24.6238 3 17.9991 3ZM8 14.9724C8 9.46708 12.4745 5 17.9991 5C23.5238 5 27.9982 9.46708 27.9982 14.9724C27.9982 17.8608 26.7682 20.4617 24.7983 22.2845C24.5326 22.5304 24.1403 22.6748 23.6809 22.6748H12.3174C11.858 22.6748 11.4656 22.5304 11.1999 22.2845C9.23005 20.4617 8 17.8608 8 14.9724Z"
            fill="currentColor"
        />
        <s.Path
            d="M11.6892 27.8379C11.6892 27.2856 12.1369 26.8379 12.6892 26.8379H23.309C23.8613 26.8379 24.309 27.2856 24.309 27.8379C24.309 28.3902 23.8613 28.8379 23.309 28.8379H12.6892C12.1369 28.8379 11.6892 28.3902 11.6892 27.8379Z"
            fill="currentColor"
        />
        <s.Path
            d="M13.2063 31.999C13.2063 31.4467 13.654 30.999 14.2063 30.999H21.7919C22.3442 30.999 22.7919 31.4467 22.7919 31.999C22.7919 32.5513 22.3442 32.999 21.7919 32.999H14.2063C13.654 32.999 13.2063 32.5513 13.2063 31.999Z"
            fill="currentColor"
        />
    </s.Svg>
);

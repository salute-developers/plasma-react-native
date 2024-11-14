import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WindowFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.0424 6C27.0564 5.99999 27.8781 5.99998 28.5443 6.05441C29.2315 6.11056 29.8408 6.22956 30.4064 6.51772C31.3001 6.97312 32.0268 7.69978 32.4822 8.59355C32.7704 9.1591 32.8894 9.76842 32.9455 10.4556C32.9999 11.1218 32.9999 11.9435 32.9999 12.9575V23.0407C32.9999 24.0548 32.9999 24.8765 32.9455 25.5427C32.8894 26.2298 32.7704 26.8391 32.4822 27.4047C32.0268 28.2985 31.3001 29.0251 30.4064 29.4805C29.8408 29.7687 29.2315 29.8877 28.5443 29.9438C27.8781 29.9983 27.0565 29.9983 26.0424 29.9982H9.95748C8.94346 29.9983 8.12178 29.9983 7.45558 29.9438C6.76841 29.8877 6.1591 29.7687 5.59355 29.4805C4.69978 29.0251 3.97312 28.2985 3.51772 27.4047C3.22956 26.8391 3.11056 26.2298 3.05441 25.5427C2.99998 24.8765 2.99999 24.0548 3 23.0408V12.9575C2.99999 11.9435 2.99998 11.1218 3.05441 10.4556C3.11056 9.76841 3.22956 9.1591 3.51772 8.59355C3.97312 7.69978 4.69978 6.97312 5.59355 6.51772C6.1591 6.22956 6.76841 6.11056 7.45558 6.05441C8.12178 5.99998 8.94348 5.99999 9.9575 6H26.0424ZM29.4984 8.29973C29.2618 8.17917 28.945 8.09381 28.3815 8.04777C27.8063 8.00078 27.0665 8 25.9999 8H10C8.9334 8 8.19359 8.00078 7.61844 8.04777C7.05496 8.09381 6.73814 8.17917 6.50153 8.29973C5.98408 8.56338 5.56338 8.98408 5.29973 9.50153C5.17917 9.73814 5.09381 10.055 5.04777 10.6184C5.00078 11.1936 5 11.9334 5 13V22.9982C5 24.0648 5.00078 24.8046 5.04777 25.3798C5.09381 25.9433 5.17917 26.2601 5.29973 26.4967C5.56338 27.0142 5.98408 27.4349 6.50153 27.6985C6.73814 27.8191 7.05496 27.9044 7.61844 27.9505C8.19359 27.9975 8.9334 27.9982 10 27.9982H13.4596V21.882C13.4596 19.9918 13.4596 19.0467 13.8274 18.3247C14.151 17.6897 14.6673 17.1734 15.3024 16.8498C16.0243 16.482 16.9694 16.482 18.8596 16.482H30.9999V13C30.9999 11.9334 30.9991 11.1936 30.9522 10.6184C30.9061 10.055 30.8208 9.73814 30.7002 9.50153C30.4365 8.98408 30.0158 8.56338 29.4984 8.29973Z"
            fill="currentColor"
        />
    </s.Svg>
);
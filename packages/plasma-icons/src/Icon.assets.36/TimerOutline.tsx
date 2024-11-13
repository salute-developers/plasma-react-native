import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TimerOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.875 3.5C13.2537 3.5 12.75 4.00368 12.75 4.625C12.75 5.24632 13.2537 5.75 13.875 5.75H22.125C22.7463 5.75 23.25 5.24632 23.25 4.625C23.25 4.00368 22.7463 3.5 22.125 3.5H13.875ZM13.9852 10.3412C15.2584 9.80895 16.6226 9.53516 18 9.53516C19.3774 9.53516 20.7416 9.80895 22.0148 10.3412C23.288 10.8734 24.4455 11.6538 25.421 12.6382C26.3965 13.6227 27.1709 14.792 27.6994 16.0797L27.6998 16.0808C28.228 17.3682 28.5 18.7482 28.5 20.1422C28.5 21.5365 28.2279 22.917 27.6994 24.2046C27.1709 25.4923 26.3965 26.6616 25.421 27.6461C24.4455 28.6306 23.288 29.4109 22.0148 29.9432C20.7416 30.4754 19.3774 30.7492 18 30.7492C16.6226 30.7492 15.2584 30.4754 13.9852 29.9432C12.712 29.4109 11.5545 28.6306 10.579 27.6461C9.6035 26.6616 8.82914 25.4923 8.30065 24.2046C7.77215 22.917 7.5 21.5365 7.5 20.1422C7.5 18.7478 7.77215 17.3673 8.30065 16.0797C8.82915 14.792 9.6035 13.6227 10.579 12.6382C11.5545 11.6538 12.712 10.8734 13.9852 10.3412ZM27.3345 11.3842C28.3698 12.5063 29.1984 13.8066 29.7803 15.2241L29.7808 15.2254C30.4208 16.7845 30.75 18.4552 30.75 20.1422C30.75 21.8291 30.4208 23.4998 29.7808 25.059C29.1409 26.6181 28.2027 28.0354 27.0192 29.2298C25.8358 30.4242 24.4302 31.3721 22.8826 32.0191C21.3349 32.666 19.6758 32.9992 18 32.9992C16.3242 32.9992 14.6651 32.666 13.1174 32.0191C11.5698 31.3721 10.1642 30.4242 8.98075 29.2298C7.7973 28.0354 6.85908 26.6181 6.21915 25.059C5.57923 23.4998 5.25 21.8291 5.25 20.1422C5.25 18.4552 5.57923 16.7845 6.21915 15.2254C6.85908 13.6662 7.7973 12.2489 8.98075 11.0545C10.1642 9.86017 11.5698 8.9122 13.1174 8.26524C14.6651 7.61828 16.3242 7.28516 18 7.28516C19.6758 7.28516 21.3349 7.61828 22.8826 8.26524C23.9543 8.71323 24.9578 9.30556 25.8667 10.0241L27.0399 8.84083C27.4287 8.44865 28.0619 8.44595 28.4541 8.83481C28.8463 9.22367 28.849 9.85683 28.4601 10.249L27.3345 11.3842ZM23.5789 13.7545C23.9712 14.1432 23.9741 14.7764 23.5853 15.1687L18.7103 20.0886C18.3216 20.4809 17.6884 20.4838 17.2961 20.0951C16.9038 19.7063 16.9009 19.0732 17.2897 18.6809L22.1647 13.761C22.5534 13.3687 23.1866 13.3658 23.5789 13.7545Z"
            fill="currentColor"
        />
    </s.Svg>
);

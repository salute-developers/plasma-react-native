import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BlankPngOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M23.509 24.6281V25.719H24.4615V26.7273C24.2815 26.7769 24.0565 26.8347 23.719 26.8347C22.6915 26.8347 22.2265 26.3223 22.2265 24.9752C22.2265 23.686 22.6615 23.1653 23.824 23.1653C24.3715 23.1653 24.8215 23.3141 25.1815 23.5537V22.2562C24.9415 22.1405 24.4765 22 23.7415 22C21.7465 22 20.959 22.9669 20.959 25.0496C20.959 27.1074 21.7915 28 23.6215 28C24.5065 28 25.204 27.7521 25.534 27.562V24.6281H23.509Z"
            fill="currentColor"
        />
        <s.Path
            d="M15.4199 27.8906V22.1055H16.7474L18.4799 25.1303C18.5918 25.3298 18.6885 25.5377 18.7808 25.7362C18.8185 25.8171 18.8555 25.8966 18.8924 25.9732C18.8699 25.684 18.8549 25.3617 18.8549 25.0394V22.1055H20.0549V27.8906H18.7724L17.0249 24.8327C16.9114 24.6422 16.8019 24.4045 16.6962 24.1752C16.6552 24.0862 16.6147 23.9985 16.5749 23.9154C16.578 23.9744 16.5814 24.0349 16.5848 24.0963C16.5982 24.3359 16.6124 24.5911 16.6124 24.841V27.8906H15.4199Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4932 22.1243V27.8929H11.7232V26.2482C11.9182 26.2648 12.0682 26.273 12.2632 26.273C13.8532 26.273 14.5507 25.5871 14.5507 24.0912C14.5507 22.6201 13.9357 22.0664 12.2782 22.0664C11.6068 22.0664 11.2469 22.0851 10.7359 22.1117C10.6589 22.1157 10.5785 22.1199 10.4932 22.1243ZM12.2632 25.1573C12.0532 25.1573 11.9257 25.1491 11.7232 25.1325V23.2069C11.9182 23.1821 12.0532 23.1821 12.2557 23.1821C13.0657 23.1821 13.2832 23.4962 13.2832 24.1573C13.2832 24.8267 13.0282 25.1573 12.2632 25.1573Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.8966 3H12.9575C11.9435 2.99999 11.1218 2.99998 10.4556 3.05441C9.76842 3.11056 9.1591 3.22956 8.59355 3.51772C7.69978 3.97312 6.97312 4.69978 6.51772 5.59355C6.22956 6.1591 6.11056 6.76842 6.05441 7.45558C5.99998 8.12178 5.99999 8.94348 6 9.9575V26.0425C5.99999 27.0565 5.99998 27.8782 6.05441 28.5444C6.11056 29.2316 6.22956 29.8409 6.51772 30.4065C6.97312 31.3002 7.69978 32.0269 8.59355 32.4823C9.1591 32.7704 9.76841 32.8894 10.4556 32.9456C11.1218 33 11.9435 33 12.9575 33H23.0425C24.0565 33 24.8782 33 25.5444 32.9456C26.2316 32.8894 26.8409 32.7704 27.4065 32.4823C28.3002 32.0269 29.0269 31.3002 29.4823 30.4065C29.7704 29.8409 29.8894 29.2316 29.9456 28.5444C30 27.8782 30 27.0565 30 26.0425V13.0811C30 12.8154 29.8943 12.5607 29.7062 12.3731L20.6028 3.29203C20.4153 3.10502 20.1613 3 19.8966 3ZM9.50153 5.29973C9.73814 5.17917 10.055 5.09381 10.6184 5.04777C11.1936 5.00078 11.9334 5 13 5H18.8966V8.32236C18.8965 9.12734 18.8965 9.79171 18.9407 10.3329C18.9867 10.895 19.0852 11.4117 19.3325 11.897C19.716 12.6497 20.3279 13.2616 21.0806 13.6451C21.5659 13.8924 22.0826 13.991 22.6447 14.0369C23.1859 14.0811 23.8503 14.0811 24.6553 14.0811H28V26C28 27.0666 27.9992 27.8064 27.9522 28.3816C27.9062 28.945 27.8208 29.2619 27.7003 29.4985C27.4366 30.0159 27.0159 30.4366 26.4985 30.7003C26.2619 30.8208 25.945 30.9062 25.3816 30.9522C24.8064 30.9992 24.0666 31 23 31H13C11.9334 31 11.1936 30.9992 10.6184 30.9522C10.055 30.9062 9.73814 30.8208 9.50153 30.7003C8.98408 30.4366 8.56338 30.0159 8.29973 29.4985C8.17917 29.2619 8.09381 28.945 8.04777 28.3816C8.00078 27.8064 8 27.0666 8 26V10C8 8.9334 8.00078 8.19359 8.04777 7.61844C8.09381 7.05496 8.17917 6.73814 8.29973 6.50153C8.56338 5.98408 8.98408 5.56339 9.50153 5.29973ZM26.5816 12.0811L20.8966 6.41002V8.28108C20.8966 9.13766 20.8973 9.71996 20.9341 10.17C20.9699 10.6085 21.0349 10.8327 21.1145 10.9891C21.3063 11.3654 21.6122 11.6713 21.9886 11.8631C22.145 11.9428 22.3692 12.0077 22.8076 12.0435C23.2577 12.0803 23.84 12.0811 24.6966 12.0811H26.5816Z"
            fill="currentColor"
        />
    </s.Svg>
);
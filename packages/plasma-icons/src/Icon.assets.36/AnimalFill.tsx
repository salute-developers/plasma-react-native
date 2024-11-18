import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const AnimalFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.07336 3.56559C8.08381 3.11949 9.18647 2.93239 10.2853 3.02173C11.384 3.11107 12.4431 3.4739 13.3709 4.07663C13.8036 4.35778 14.2016 4.68705 14.5581 5.05696C15.6436 4.70272 16.8 4.51156 18 4.51156C19.2 4.51156 20.3564 4.70272 21.4418 5.05696C21.8584 4.62478 22.331 4.24863 22.8485 3.93999C23.7901 3.37852 24.852 3.05781 25.9436 3.00711C27.0352 2.95642 28.1216 3.17739 29.1098 3.64978C30.0978 4.1221 30.9569 4.83102 31.6159 5.71362C32.2747 6.59607 32.7145 7.62662 32.9001 8.7171C33.0857 9.80754 33.0119 10.9279 32.6847 11.9836C32.3575 13.0393 31.7858 14.0011 31.0157 14.7858C30.7 15.1075 30.3548 15.3956 29.9855 15.6464C31.6056 17.154 32.625 19.3318 32.625 21.7543C32.625 26.3087 29.0237 30.0008 24.5812 30.0008C24.4575 30.0008 24.3344 29.9979 24.2119 29.9922C22.738 31.8269 20.5027 32.9995 18 32.9995C15.4973 32.9995 13.262 31.8269 11.788 29.9922C11.6656 29.9979 11.5424 30.0008 11.4187 30.0008C6.9763 30.0008 3.37499 26.3087 3.37499 21.7543C3.37499 19.3318 4.39434 17.154 6.01444 15.6463C5.6208 15.379 5.25461 15.0694 4.92245 14.722C4.15591 13.9202 3.59349 12.9412 3.2813 11.8707C2.96914 10.8003 2.91593 9.6686 3.12595 8.57289C3.33598 7.47712 3.80342 6.44803 4.49017 5.57526C5.17703 4.70234 6.06307 4.01163 7.07336 3.56559ZM6.949 13.5385C7.65645 10.3568 9.63735 7.67209 12.3129 6.0779C12.2579 6.03848 12.2019 6.0003 12.1451 5.96339C11.5278 5.56237 10.8269 5.32317 10.1029 5.26431C9.37905 5.20545 8.6513 5.32845 7.98208 5.6239C7.3127 5.91942 6.72045 6.37937 6.25838 6.9666C5.79619 7.55398 5.47868 8.25051 5.3357 8.99645C5.19271 9.74244 5.22907 10.513 5.4413 11.2408C5.65351 11.9685 6.0345 12.6293 6.54872 13.1671C6.6753 13.2995 6.80901 13.4235 6.949 13.5385ZM29.051 13.5385C29.1758 13.436 29.2956 13.3263 29.4098 13.2099C29.9262 12.6837 30.3133 12.0349 30.5356 11.3175C30.758 10.6 30.8084 9.83712 30.682 9.09456C30.5557 8.35204 30.2568 7.6541 29.813 7.05971C29.3693 6.46546 28.7945 5.99292 28.1393 5.67972C27.4844 5.36661 26.7671 5.22127 26.048 5.25467C25.3289 5.28806 24.6266 5.49934 24.0009 5.87248C23.8934 5.93655 23.7887 6.0051 23.6871 6.0779C26.3626 7.67209 28.3435 10.3568 29.051 13.5385ZM13.5 19.1401C13.5 20.4158 12.8284 21.45 12 21.45C11.1716 21.45 10.5 20.4158 10.5 19.1401C10.5 17.8644 11.1716 16.8303 12 16.8303C12.8284 16.8303 13.5 17.8644 13.5 19.1401ZM25.5 19.1401C25.5 20.4158 24.8284 21.45 24 21.45C23.1716 21.45 22.5 20.4158 22.5 19.1401C22.5 17.8644 23.1716 16.8303 24 16.8303C24.8284 16.8303 25.5 17.8644 25.5 19.1401ZM15.286 20.986C15.409 20.863 15.5759 20.7938 15.75 20.7938H20.25C20.6124 20.7938 20.9062 21.0876 20.9062 21.4501C20.9062 21.8752 20.8364 22.2983 20.6989 22.6958C20.5614 23.0933 20.3577 23.4612 20.0947 23.7762C19.8316 24.0913 19.5128 24.349 19.1527 24.5276C19.0222 24.5923 18.8876 24.646 18.75 24.6882V26.0701C18.75 26.1766 18.7704 26.2815 18.8097 26.3788C18.8489 26.4761 18.906 26.5632 18.9766 26.6357C19.0471 26.7081 19.1299 26.7645 19.2194 26.8026C19.309 26.8407 19.4043 26.86 19.5 26.86C19.5957 26.86 19.691 26.8407 19.7805 26.8026C19.8701 26.7645 19.9528 26.7081 20.0234 26.6357C20.094 26.5632 20.1511 26.4761 20.1903 26.3788C20.2296 26.2815 20.25 26.1766 20.25 26.0702C20.25 25.6559 20.5858 25.3202 21 25.3202C21.4142 25.3202 21.75 25.6559 21.75 26.0702C21.75 26.3682 21.6928 26.6637 21.5813 26.9401C21.4698 27.2165 21.3058 27.4688 21.0979 27.6823C20.8899 27.8959 20.6419 28.0663 20.3675 28.183C20.0931 28.2997 19.7982 28.36 19.5 28.36C19.2017 28.36 18.9069 28.2997 18.6325 28.183C18.3999 28.0841 18.1863 27.9466 18 27.777C17.8136 27.9466 17.6 28.0841 17.3675 28.183C17.0931 28.2997 16.7982 28.36 16.5 28.36C16.2017 28.36 15.9069 28.2997 15.6325 28.183C15.3581 28.0663 15.1101 27.8959 14.9021 27.6823C14.6941 27.4688 14.5302 27.2165 14.4187 26.9401C14.3072 26.6637 14.25 26.3682 14.25 26.0701C14.25 25.6559 14.5858 25.3202 15 25.3202C15.4142 25.3202 15.75 25.6559 15.75 26.0701C15.75 26.1766 15.7704 26.2815 15.8097 26.3788C15.8489 26.4761 15.906 26.5632 15.9766 26.6357C16.0471 26.7081 16.1299 26.7645 16.2194 26.8026C16.309 26.8407 16.4043 26.86 16.5 26.86C16.5957 26.86 16.691 26.8407 16.7805 26.8026C16.8701 26.7645 16.9528 26.7081 17.0234 26.6357C17.094 26.5632 17.1511 26.4761 17.1903 26.3788C17.2296 26.2815 17.25 26.1766 17.25 26.0701V24.6882C17.1124 24.646 16.9778 24.5923 16.8473 24.5276C16.4872 24.349 16.1684 24.0913 15.9053 23.7762C15.6423 23.4612 15.4385 23.0933 15.3011 22.6958C15.1636 22.2983 15.0937 21.8752 15.0937 21.4501C15.0937 21.276 15.1629 21.1091 15.286 20.986ZM16.4922 22.1063C16.5068 22.1606 16.5233 22.2142 16.5415 22.2668C16.6301 22.5232 16.7579 22.7495 16.9127 22.935C17.0675 23.1203 17.2447 23.2597 17.4306 23.3519C17.6159 23.4438 17.8089 23.4886 18 23.4886C18.1911 23.4886 18.3841 23.4438 18.5694 23.3519C18.7552 23.2597 18.9325 23.1203 19.0872 22.935C19.2421 22.7495 19.3698 22.5232 19.4585 22.2668C19.4767 22.2142 19.4932 22.1606 19.5078 22.1063L16.4922 22.1063Z"
            fill="currentColor"
        />
    </s.Svg>
);

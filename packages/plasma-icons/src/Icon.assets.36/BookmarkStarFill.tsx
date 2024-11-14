import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BookmarkStarFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.1777 4.5H14.8223C13.8844 4.49999 13.1173 4.49998 12.4939 4.55508C11.8487 4.61211 11.2659 4.73375 10.7217 5.03374C9.8699 5.50322 9.17739 6.25236 8.74339 7.17377C8.46609 7.76252 8.35363 8.39294 8.30091 9.09096C8.24998 9.76533 8.24999 10.5951 8.25 11.6097L8.25 27.0357C8.24998 27.7929 8.24996 28.4379 8.29232 28.9424C8.33393 29.4379 8.42869 30.0287 8.78249 30.5082C9.24559 31.1358 9.94782 31.5009 10.6901 31.5C11.2573 31.4993 11.7429 31.2103 12.1266 30.9359C12.5172 30.6566 12.9828 30.2536 13.5293 29.7806L15.1721 28.3589C15.805 27.8112 16.2365 27.4387 16.5942 27.173C16.9411 26.9155 17.1604 26.8038 17.3501 26.747C17.7754 26.6197 18.2246 26.6197 18.6499 26.747C18.8396 26.8038 19.0589 26.9155 19.4058 27.173C19.7635 27.4387 20.195 27.8112 20.8279 28.3589L22.4707 29.7806C23.0172 30.2536 23.4828 30.6566 23.8734 30.9359C24.2571 31.2103 24.7427 31.4993 25.3099 31.5C26.0522 31.5009 26.7544 31.1358 27.2175 30.5082C27.5713 30.0287 27.6661 29.4379 27.7077 28.9424C27.75 28.4379 27.75 27.7929 27.75 27.0357V11.6097C27.75 10.5951 27.75 9.7653 27.6991 9.09096C27.6464 8.39294 27.5339 7.76252 27.2566 7.17377C26.8226 6.25236 26.1301 5.50322 25.2783 5.03374C24.7341 4.73375 24.1513 4.61211 23.5061 4.55508C22.8827 4.49998 22.1156 4.49999 21.1777 4.5ZM18.4995 10.5645C18.3428 10.08 17.6572 10.08 17.5005 10.5645L16.4337 13.8625C16.3636 14.0792 16.1619 14.2259 15.9342 14.2259H12.477C11.969 14.2259 11.7572 14.8755 12.1675 15.175L14.9685 17.2192C15.1517 17.3529 15.2283 17.5891 15.1585 17.8048L14.0896 21.1094C13.933 21.5935 14.4876 21.995 14.8986 21.6951L17.6905 19.6575C17.8749 19.5229 18.1251 19.5229 18.3095 19.6575L21.1014 21.6951C21.5124 21.995 22.067 21.5935 21.9104 21.1094L20.8415 17.8048C20.7717 17.5891 20.8483 17.3529 21.0315 17.2192L23.8325 15.175C24.2428 14.8755 24.031 14.2259 23.523 14.2259H20.0658C19.8381 14.2259 19.6364 14.0792 19.5663 13.8625L18.4995 10.5645Z"
            fill="currentColor"
        />
    </s.Svg>
);
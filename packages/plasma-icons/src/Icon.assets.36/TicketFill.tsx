import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TicketFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.10826 19.1363C2.90795 19.3366 2.71287 19.5316 2.56118 19.7103C2.39459 19.9065 2.2155 20.1556 2.10986 20.4807C1.96338 20.9315 1.96338 21.4171 2.10986 21.8679C2.2155 22.1931 2.39459 22.4421 2.56118 22.6383C2.71287 22.817 2.90795 23.0121 3.10826 23.2123L4.31373 24.4178C4.48498 24.5891 4.63896 24.743 4.76969 24.8627C4.89862 24.9807 5.07405 25.1312 5.29052 25.2423L5.30087 25.2477C5.34449 25.2701 5.40213 25.2997 5.45597 25.3247C5.52277 25.3557 5.61142 25.393 5.72014 25.4228C5.82885 25.4525 5.92413 25.4655 5.99742 25.4729C6.05648 25.4788 6.12117 25.4826 6.17013 25.4855L6.18175 25.4862C6.35774 25.4968 6.52486 25.4724 6.62642 25.4555C6.74651 25.4356 6.88142 25.4069 7.02403 25.374C7.30552 25.3091 7.68528 25.2116 8.16337 25.089L8.18052 25.0846C8.9271 24.893 9.74777 25.0903 10.3287 25.6713C10.9097 26.2522 11.107 27.0729 10.9154 27.8195L10.9112 27.8362C10.7885 28.3143 10.6909 28.6945 10.626 28.976C10.5931 29.1186 10.5644 29.2535 10.5445 29.3736C10.5276 29.4751 10.5032 29.6423 10.5138 29.8183L10.5145 29.8299C10.5174 29.8788 10.5212 29.9435 10.5271 30.0026C10.5345 30.0759 10.5475 30.1711 10.5772 30.2799C10.607 30.3886 10.6443 30.4772 10.6753 30.544C10.7003 30.5979 10.7299 30.6555 10.7523 30.6991L10.7577 30.7095C10.8688 30.926 11.0193 31.1014 11.1373 31.2303C11.257 31.361 11.4109 31.515 11.5821 31.6862L12.7877 32.8917C12.9879 33.092 13.183 33.2871 13.3617 33.4388C13.5579 33.6054 13.8069 33.7845 14.1321 33.8901C14.5829 34.0366 15.0685 34.0366 15.5193 33.8901C15.8444 33.7845 16.0935 33.6054 16.2897 33.4388C16.4684 33.2871 16.6634 33.0921 16.8636 32.8918L32.8918 16.8637C33.0921 16.6634 33.2871 16.4684 33.4388 16.2897C33.6054 16.0935 33.7845 15.8444 33.8901 15.5193C34.0366 15.0685 34.0366 14.5829 33.8901 14.1321C33.7845 13.8069 33.6054 13.5579 33.4388 13.3617C33.2872 13.183 33.0921 12.988 32.8918 12.7878L31.6863 11.5822C31.515 11.4109 31.3611 11.257 31.2303 11.1373C31.1014 11.0193 30.926 10.8688 30.7095 10.7577L30.699 10.7523C30.6554 10.7299 30.5978 10.7002 30.544 10.6753C30.4772 10.6443 30.3886 10.607 30.2799 10.5772C30.1711 10.5475 30.0759 10.5345 30.0026 10.5271C29.9435 10.5212 29.8787 10.5174 29.8298 10.5144L29.8183 10.5138C29.6423 10.5032 29.4751 10.5277 29.3736 10.5445C29.2535 10.5644 29.1186 10.5931 28.976 10.626C28.6944 10.691 28.3146 10.7884 27.8364 10.9111L27.8195 10.9154C27.0729 11.107 26.2522 10.9097 25.6713 10.3287C25.0903 9.74777 24.893 8.92709 25.0846 8.18052L25.0888 8.16394C25.2115 7.68569 25.309 7.30558 25.374 7.02403C25.4069 6.88142 25.4356 6.74651 25.4555 6.62642C25.4723 6.52487 25.4968 6.35774 25.4862 6.18175L25.4856 6.17025C25.4826 6.12127 25.4788 6.05653 25.4729 5.99742C25.4655 5.92413 25.4525 5.82885 25.4228 5.72013C25.393 5.61142 25.3557 5.52277 25.3247 5.45597C25.2997 5.40219 25.2702 5.34463 25.2477 5.30102L25.2423 5.29052C25.1312 5.07405 24.9807 4.89862 24.8627 4.76969C24.743 4.63895 24.5891 4.48501 24.4178 4.31375L23.2123 3.10825C23.0121 2.90797 22.817 2.71285 22.6383 2.56117C22.4421 2.39459 22.1931 2.2155 21.8679 2.10986C21.4171 1.96338 20.9315 1.96338 20.4807 2.10986C20.1556 2.21551 19.9065 2.39459 19.7103 2.56118C19.5316 2.71287 19.3366 2.90795 19.1363 3.10826L3.10826 19.1363ZM14.2976 13.7618C13.9739 13.5969 13.6283 13.9425 13.7932 14.2662L15.3666 17.3542C15.4404 17.499 15.4126 17.6748 15.2977 17.7897L12.847 20.2403C12.5901 20.4972 12.812 20.9327 13.1708 20.8759L16.5939 20.3337C16.7544 20.3083 16.913 20.3891 16.9867 20.5339L18.5602 23.6219C18.7251 23.9456 19.2078 23.8691 19.2647 23.5103L19.8068 20.0872C19.8323 19.9267 19.9581 19.8009 20.1186 19.7755L23.5417 19.2333C23.9005 19.1765 23.9769 18.6937 23.6533 18.5288L20.5652 16.9554C20.4205 16.8816 20.3397 16.723 20.3651 16.5626L20.9072 13.1395C20.9641 12.7807 20.5286 12.5588 20.2717 12.8156L17.821 15.2663C17.7061 15.3812 17.5304 15.409 17.3856 15.3353L14.2976 13.7618Z"
            fill="currentColor"
        />
    </s.Svg>
);
import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const GlassesOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0215 8.50003C13.0539 8.50004 13.0868 8.50006 13.1201 8.50006H13.4634C14.0157 8.50006 14.4634 8.94777 14.4634 9.50006C14.4634 10.0523 14.0157 10.5001 13.4634 10.5001H13.1201C12.363 10.5001 12.1424 10.5061 11.9446 10.5522C11.7461 10.5984 11.5558 10.6747 11.3804 10.7785C11.2055 10.8819 11.0418 11.0299 10.4945 11.5531L5.6281 16.2046C6.533 16.1161 7.62714 16.0556 8.92683 16.0556C11.3698 16.0556 13.1403 16.6679 14.3201 17.3109C14.9071 17.6309 15.3422 17.9553 15.6379 18.2086C15.6843 18.2483 15.7273 18.2863 15.7669 18.3223H20.2331C20.2727 18.2863 20.3157 18.2483 20.3621 18.2086C20.6578 17.9553 21.0929 17.6309 21.6799 17.3109C22.8597 16.6679 24.6302 16.0556 27.0732 16.0556C28.3729 16.0556 29.467 16.1161 30.3719 16.2046L25.5055 11.5531C24.9582 11.0299 24.7945 10.8819 24.6196 10.7785C24.4442 10.6747 24.2539 10.5984 24.0554 10.5522C23.8576 10.5061 23.637 10.5001 22.8799 10.5001H22.5366C21.9843 10.5001 21.5366 10.0523 21.5366 9.50006C21.5366 8.94777 21.9843 8.50006 22.5366 8.50006H22.8799C22.9132 8.50006 22.9461 8.50004 22.9785 8.50003C23.594 8.49974 24.0592 8.49953 24.5092 8.60434C24.9062 8.69681 25.2867 8.84942 25.6376 9.05689C26.0353 9.29204 26.3714 9.61359 26.8161 10.0391C26.8396 10.0615 26.8633 10.0843 26.8874 10.1073L34.191 17.0883C34.3883 17.2769 34.5 17.5381 34.5 17.8112V18.9445C34.5 19.0104 34.4935 19.0761 34.4806 19.1408L33.8026 22.5283C33.6984 23.049 33.6292 23.3949 33.5291 23.7025C32.8648 25.7434 31.0738 27.2115 28.9421 27.4624C28.6209 27.5002 28.2681 27.5001 27.7371 27.5001H27.5804C26.7149 27.5001 26.1774 27.5002 25.711 27.4373C22.5872 27.0162 20.1302 24.5592 19.7091 21.4354C19.6669 21.1223 19.653 20.7772 19.6485 20.3223H16.3515C16.347 20.7772 16.3331 21.1223 16.2909 21.4354C15.8698 24.5592 13.4128 27.0162 10.289 27.4373C9.8226 27.5002 9.28507 27.5001 8.41959 27.5001H8.26286C7.73187 27.5001 7.37913 27.5002 7.05786 27.4624C4.9262 27.2115 3.13524 25.7434 2.47089 23.7025C2.37077 23.3949 2.30158 23.049 2.19744 22.5283C2.1931 22.5066 2.18871 22.4847 2.18425 22.4624L1.51945 19.1408C1.50651 19.0761 1.5 19.0104 1.5 18.9445V17.8112C1.5 17.5381 1.61165 17.2769 1.80904 17.0883L9.1126 10.1073C9.13667 10.0843 9.16042 10.0615 9.18387 10.0391C9.62864 9.61359 9.96473 9.29204 10.3624 9.05689C10.7133 8.84942 11.0938 8.69681 11.4908 8.60434C11.9408 8.49953 12.406 8.49974 13.0215 8.50003ZM21.6464 19.742C21.6471 20.534 21.6527 20.8825 21.6912 21.1682C21.992 23.3994 23.747 25.1544 25.9782 25.4552C26.294 25.4978 26.6865 25.5001 27.6699 25.5001C28.2921 25.5001 28.5188 25.4984 28.7084 25.4761C30.0649 25.3164 31.2046 24.3822 31.6273 23.0834C31.6864 22.902 31.7325 22.68 31.8546 22.0699L32.5 18.8454V18.5612C32.3132 18.5165 32.0836 18.4672 31.809 18.4173C30.8325 18.2399 29.2859 18.0556 27.0732 18.0556C24.9796 18.0556 23.5366 18.5767 22.6371 19.067C22.1845 19.3137 21.8636 19.5559 21.6631 19.7276C21.6574 19.7324 21.6519 19.7372 21.6464 19.742ZM33.1315 18.7408L33.1335 18.7416L33.1353 18.7423C33.1353 18.7423 33.1349 18.7421 33.1315 18.7408ZM14.3536 19.742C14.3481 19.7372 14.3426 19.7324 14.3369 19.7276C14.1364 19.5559 13.8155 19.3137 13.3629 19.067C12.4634 18.5767 11.0204 18.0556 8.92683 18.0556C6.71414 18.0556 5.16748 18.2399 4.19096 18.4173C3.91637 18.4672 3.68676 18.5165 3.5 18.5612V18.8454L4.14536 22.0699C4.26747 22.68 4.31361 22.902 4.37268 23.0834C4.79544 24.3822 5.93513 25.3164 7.29163 25.4761C7.48117 25.4984 7.70788 25.5001 8.33006 25.5001C9.31349 25.5001 9.70604 25.4978 10.0218 25.4552C12.253 25.1544 14.008 23.3994 14.3088 21.1682C14.3473 20.8825 14.3529 20.534 14.3536 19.742ZM2.86943 18.7405L2.86654 18.7416L2.86473 18.7423M2.86473 18.7423C2.86473 18.7423 2.86662 18.7416 2.86943 18.7405L2.86473 18.7423Z"
            fill="currentColor"
        />
    </s.Svg>
);
import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BlankPngFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 2.00608C12.3449 1.99982 12.1794 1.99992 11.997 2.00003L8.71858 2.00005C8.0452 2.00005 7.4945 2.00004 7.04693 2.03661C6.58367 2.07446 6.16527 2.15519 5.77453 2.35428C5.163 2.66587 4.66582 3.16306 4.35423 3.77459C4.15514 4.16533 4.0744 4.58372 4.03655 5.04699C3.99998 5.49455 3.99999 6.04526 4 6.71863V17.2815C3.99999 17.9549 3.99998 18.5056 4.03655 18.9531C4.0744 19.4164 4.15514 19.8348 4.35423 20.2255C4.66582 20.8371 5.163 21.3342 5.77453 21.6458C6.16527 21.8449 6.58367 21.9257 7.04693 21.9635C7.49449 22.0001 8.04519 22.0001 8.71856 22.0001H15.2814C15.9548 22.0001 16.5055 22.0001 16.9531 21.9635C17.4163 21.9257 17.8347 21.8449 18.2255 21.6458C18.837 21.3342 19.3342 20.8371 19.6458 20.2255C19.8449 19.8348 19.9256 19.4164 19.9634 18.9531C20 18.5056 20 17.955 20 17.2817L20 10.0031C20.0001 9.82073 20.0002 9.65504 19.994 9.50006H16.4196C15.8854 9.50007 15.4396 9.50008 15.0753 9.47032C14.6954 9.43928 14.3388 9.37217 14.0015 9.20033C13.4841 8.93668 13.0634 8.51598 12.7997 7.99854C12.6279 7.66127 12.5608 7.30462 12.5297 6.92473C12.5 6.5605 12.5 6.11465 12.5 5.5805V2.00608ZM14 5.55006V2.49984C14.2203 2.65909 14.4218 2.86086 14.6664 3.10571L18.8943 7.33369C19.1392 7.57826 19.341 7.7798 19.5002 8.00006H16.45C15.8776 8.00006 15.4934 7.99948 15.1975 7.9753C14.9104 7.95184 14.7731 7.90996 14.6825 7.86382C14.4473 7.74398 14.2561 7.55275 14.1362 7.31755C14.0901 7.22699 14.0482 7.08971 14.0248 6.80258C14.0006 6.5067 14 6.12249 14 5.55006ZM15.6775 16.0408V16.7427H16.3125V17.3913C16.1925 17.4232 16.0425 17.4604 15.8175 17.4604C15.1325 17.4604 14.8225 17.1308 14.8225 16.2641C14.8225 15.4347 15.1125 15.0998 15.8875 15.0998C16.2525 15.0998 16.5525 15.1955 16.7925 15.3497V14.5149C16.6325 14.4405 16.3225 14.3501 15.8325 14.3501C14.5025 14.3501 13.9775 14.9722 13.9775 16.312C13.9775 17.6359 14.5325 18.2101 15.7525 18.2101C16.3425 18.2101 16.8075 18.0506 17.0275 17.9283V16.0408H15.6775ZM10.2842 18.1407V14.4189H11.1692L12.3242 16.3649C12.3987 16.4933 12.4632 16.627 12.5248 16.7547C12.5499 16.8067 12.5746 16.8579 12.5992 16.9072C12.5842 16.7211 12.5742 16.5138 12.5742 16.3064V14.4189H13.3742V18.1407H12.5192L11.3542 16.1735C11.2785 16.0509 11.2055 15.898 11.135 15.7505C11.1077 15.6932 11.0807 15.6368 11.0542 15.5833C11.0562 15.6213 11.0585 15.6601 11.0608 15.6997C11.0697 15.8538 11.0792 16.018 11.0792 16.1788V18.1407H10.2842ZM7 14.4298V18.1409H7.82V17.0829C7.95 17.0935 8.05 17.0988 8.18 17.0988C9.24 17.0988 9.705 16.6575 9.705 15.6952C9.705 14.7488 9.295 14.3926 8.19 14.3926C7.74238 14.3926 7.5025 14.4046 7.16177 14.4217C7.11048 14.4243 7.05691 14.427 7 14.4298ZM8.18 16.3811C8.04 16.3811 7.955 16.3757 7.82 16.3651V15.1263C7.95 15.1103 8.04 15.1103 8.175 15.1103C8.715 15.1103 8.86 15.3124 8.86 15.7377C8.86 16.1684 8.69 16.3811 8.18 16.3811Z"
            fill="currentColor"
        />
    </s.Svg>
);
import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BlankFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M12.5 2.00608V5.5805C12.5 6.11465 12.5 6.5605 12.5297 6.92473C12.5608 7.30462 12.6279 7.66127 12.7997 7.99854C13.0634 8.51598 13.4841 8.93668 14.0015 9.20033C14.3388 9.37217 14.6954 9.43928 15.0753 9.47032C15.4396 9.50008 15.8854 9.50007 16.4196 9.50006H19.994C20.0002 9.6551 20.0001 9.82061 20 10.003L20 17.2815C20 17.9548 20 18.5056 19.9634 18.9531C19.9256 19.4164 19.8449 19.8348 19.6458 20.2255C19.3342 20.8371 18.837 21.3342 18.2255 21.6458C17.8347 21.8449 17.4163 21.9257 16.9531 21.9635C16.5055 22.0001 15.9548 22.0001 15.2814 22.0001H8.71856C8.04519 22.0001 7.49449 22.0001 7.04693 21.9635C6.58367 21.9257 6.16527 21.8449 5.77453 21.6458C5.163 21.3342 4.66582 20.8371 4.35423 20.2255C4.15514 19.8348 4.0744 19.4164 4.03655 18.9531C3.99998 18.5056 3.99999 17.9549 4 17.2815V6.71864C3.99999 6.04526 3.99998 5.49455 4.03655 5.04699C4.0744 4.58372 4.15514 4.16533 4.35423 3.77459C4.66582 3.16306 5.163 2.66587 5.77453 2.35428C6.16527 2.15519 6.58367 2.07446 7.04693 2.03661C7.4945 2.00004 8.0452 2.00005 8.71858 2.00005L11.997 2.00003C12.1794 1.99992 12.3449 1.99982 12.5 2.00608Z"
            fill="currentColor"
        />
        <s.Path
            d="M14 2.49984V5.55006C14 6.12249 14.0006 6.5067 14.0248 6.80258C14.0482 7.08971 14.0901 7.22699 14.1362 7.31755C14.2561 7.55275 14.4473 7.74398 14.6825 7.86382C14.7731 7.90996 14.9104 7.95184 15.1975 7.9753C15.4934 7.99948 15.8776 8.00006 16.45 8.00006H19.5002C19.341 7.7798 19.1392 7.57826 18.8943 7.33369L14.6664 3.10572C14.4218 2.86087 14.2203 2.65909 14 2.49984Z"
            fill="currentColor"
        />
    </s.Svg>
);

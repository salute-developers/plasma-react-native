import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const FileErrorFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 5.5805V2.00608C12.3449 1.99982 12.1794 1.99992 11.997 2.00003L8.71858 2.00005C8.0452 2.00005 7.4945 2.00004 7.04693 2.03661C6.58367 2.07446 6.16527 2.15519 5.77453 2.35428C5.163 2.66587 4.66582 3.16306 4.35423 3.77459C4.15514 4.16533 4.0744 4.58372 4.03655 5.04699C3.99998 5.49455 3.99999 6.04526 4 6.71863V17.2815C3.99999 17.9549 3.99998 18.5056 4.03655 18.9531C4.0744 19.4164 4.15514 19.8348 4.35423 20.2255C4.66582 20.8371 5.163 21.3342 5.77453 21.6458C6.16527 21.8449 6.58367 21.9257 7.04693 21.9635C7.49449 22.0001 8.04519 22.0001 8.71856 22.0001H15.2814C15.9548 22.0001 16.5055 22.0001 16.9531 21.9635C17.4163 21.9257 17.8347 21.8449 18.2255 21.6458C18.837 21.3342 19.3342 20.8371 19.6458 20.2255C19.8449 19.8348 19.9256 19.4164 19.9634 18.9531C20 18.5056 20 17.9548 20 17.2815L20 10.003C20.0001 9.82069 20.0002 9.65504 19.994 9.50006H16.4196C15.8854 9.50007 15.4396 9.50008 15.0753 9.47032C14.6954 9.43928 14.3388 9.37217 14.0015 9.20033C13.4841 8.93668 13.0634 8.51598 12.7997 7.99854C12.6279 7.66127 12.5608 7.30462 12.5297 6.92473C12.5 6.5605 12.5 6.11465 12.5 5.5805ZM8.21968 12.2197C8.51257 11.9268 8.98744 11.9268 9.28034 12.2197L11.75 14.6894L14.2197 12.2197C14.5126 11.9268 14.9874 11.9268 15.2803 12.2197C15.5732 12.5126 15.5732 12.9875 15.2803 13.2804L12.8107 15.75L15.2803 18.2197C15.5732 18.5126 15.5732 18.9874 15.2803 19.2803C14.9874 19.5732 14.5126 19.5732 14.2197 19.2803L11.75 16.8107L9.28033 19.2804C8.98744 19.5733 8.51256 19.5733 8.21967 19.2804C7.92678 18.9875 7.92678 18.5126 8.21967 18.2197L10.6894 15.75L8.21968 13.2803C7.92678 12.9874 7.92678 12.5126 8.21968 12.2197Z"
            fill="currentColor"
        />
        <s.Path
            d="M14 5.55006V2.49984C14.2203 2.65909 14.4218 2.86087 14.6664 3.10572L18.8943 7.33369C19.1392 7.57826 19.341 7.7798 19.5002 8.00006H16.45C15.8776 8.00006 15.4934 7.99948 15.1975 7.9753C14.9104 7.95184 14.7731 7.90996 14.6825 7.86382C14.4473 7.74398 14.2561 7.55275 14.1362 7.31755C14.0901 7.22699 14.0482 7.08971 14.0248 6.80258C14.0006 6.5067 14 6.12249 14 5.55006Z"
            fill="currentColor"
        />
    </s.Svg>
);

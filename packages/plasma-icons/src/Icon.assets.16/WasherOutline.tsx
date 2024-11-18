import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WasherOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.02893 1H10.9677C11.4399 0.999995 11.8245 0.99999 12.1368 1.0255C12.4595 1.05187 12.7487 1.10797 13.0181 1.24524C13.4415 1.46095 13.7857 1.80516 14.0014 2.22852C14.1387 2.49793 14.1948 2.78715 14.2212 3.10989C14.2467 3.42215 14.2467 3.80677 14.2467 4.27891V11.7175C14.2467 12.1896 14.2467 12.5743 14.2212 12.8865C14.1948 13.2093 14.1387 13.4985 14.0014 13.7679C13.7857 14.1913 13.4415 14.5355 13.0181 14.7512C12.7487 14.8885 12.4595 14.9445 12.1368 14.9709C11.8245 14.9964 11.4399 14.9964 10.9677 14.9964H5.02892C4.55677 14.9964 4.17215 14.9964 3.85989 14.9709C3.53715 14.9445 3.24793 14.8885 2.97852 14.7512C2.55516 14.5355 2.21095 14.1913 1.99524 13.7679C1.85797 13.4985 1.80187 13.2093 1.7755 12.8865C1.74999 12.5743 1.74999 12.1896 1.75 11.7175V4.27892C1.74999 3.80678 1.74999 3.42215 1.7755 3.10989C1.80187 2.78715 1.85797 2.49793 1.99524 2.22852C2.21095 1.80516 2.55516 1.46095 2.97852 1.24524C3.24793 1.10797 3.53715 1.05187 3.85989 1.0255C4.17215 0.99999 4.55678 0.999995 5.02893 1ZM3.94132 2.02218C3.68042 2.0435 3.53745 2.08277 3.43251 2.13624C3.19731 2.25608 3.00608 2.44731 2.88624 2.68251C2.83277 2.78745 2.7935 2.93042 2.77218 3.19132C2.75039 3.45805 2.75 3.8017 2.75 4.3V11.6964C2.75 12.1947 2.75039 12.5384 2.77218 12.8051C2.7935 13.066 2.83277 13.209 2.88624 13.3139C3.00608 13.5491 3.19731 13.7403 3.43251 13.8602C3.53745 13.9136 3.68042 13.9529 3.94132 13.9742C4.20805 13.996 4.55171 13.9964 5.05 13.9964H10.9467C11.445 13.9964 11.7886 13.996 12.0553 13.9742C12.3162 13.9529 12.4592 13.9136 12.5641 13.8602C12.7993 13.7403 12.9906 13.5491 13.1104 13.3139C13.1639 13.209 13.2032 13.066 13.2245 12.8051C13.2463 12.5384 13.2467 12.1947 13.2467 11.6964V4.3C13.2467 3.8017 13.2463 3.45805 13.2245 3.19132C13.2032 2.93042 13.1639 2.78745 13.1104 2.68251C12.9906 2.44731 12.7993 2.25608 12.5641 2.13624C12.4592 2.08277 12.3162 2.0435 12.0553 2.02218C11.7886 2.00039 11.4449 2 10.9467 2H5.05C4.5517 2 4.20805 2.00039 3.94132 2.02218ZM5.21189 3.78237C5.21189 4.17036 4.89994 4.48488 4.51513 4.48488C4.13031 4.48488 3.81836 4.17036 3.81836 3.78237C3.81836 3.39439 4.13031 3.07986 4.51513 3.07986C4.89994 3.07986 5.21189 3.39439 5.21189 3.78237ZM8.51953 3.28223C8.24339 3.28223 8.01953 3.50608 8.01953 3.78223C8.01953 4.05837 8.24339 4.28223 8.51953 4.28223H11.655C11.9311 4.28223 12.155 4.05837 12.155 3.78223C12.155 3.50608 11.9311 3.28223 11.655 3.28223H8.51953ZM7.99678 6.21387C6.54512 6.21387 5.36133 7.40149 5.36133 8.87516C5.36133 8.90887 5.36195 8.94243 5.36318 8.97583C5.66743 8.82872 6.00854 8.7002 6.6046 8.7002C7.30137 8.7002 7.64975 8.87582 7.99813 9.05145C8.34652 9.22708 8.6949 9.4027 9.39167 9.4027C9.91802 9.4027 10.258 9.24611 10.6169 9.08078C10.6195 9.07957 10.6221 9.07837 10.6248 9.07716C10.6297 9.01049 10.6322 8.94313 10.6322 8.87516C10.6322 7.40149 9.44844 6.21387 7.99678 6.21387ZM11.6298 8.74134C11.56 6.78483 9.9638 5.21387 7.99678 5.21387C5.98511 5.21387 4.36133 6.85696 4.36133 8.87516C4.36133 9.0375 4.37184 9.19742 4.39221 9.35425C4.38521 9.35555 4.37818 9.35683 4.37109 9.35808C4.60541 11.1671 6.13998 12.564 7.99813 12.564C10.0184 12.564 11.6562 10.9127 11.6562 8.87582C11.6562 8.82956 11.6553 8.7835 11.6536 8.73765C11.6457 8.73885 11.6377 8.74009 11.6298 8.74134Z"
            fill="currentColor"
        />
    </s.Svg>
);

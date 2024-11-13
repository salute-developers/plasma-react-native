import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Scene3dOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M7.99976 13.9987C5.7053 13.9987 3.83612 12.1928 3.75838 9.93598C2.49905 10.1363 1.60969 10.3835 1.13889 10.533C0.999426 10.5773 0.929693 10.5994 0.88069 10.5866C0.836143 10.575 0.801652 10.5497 0.777056 10.5108C0.75 10.468 0.75 10.3969 0.75 10.2547V2.36804C0.75 2.20281 0.75 2.1202 0.778221 2.07673C0.80486 2.0357 0.83792 2.01254 0.885584 2.00153C0.936078 1.98985 1.01788 2.01959 1.18149 2.07906C2.0091 2.3799 4.09366 2.95047 8 2.95047C11.9063 2.95047 13.9909 2.3799 14.8185 2.07906C14.9821 2.01959 15.0639 1.98985 15.1144 2.00152C15.1621 2.01254 15.1951 2.0357 15.2218 2.07673C15.25 2.1202 15.25 2.20281 15.25 2.36804V10.2547C15.25 10.3969 15.25 10.468 15.2229 10.5108C15.1983 10.5497 15.1639 10.575 15.1193 10.5866C15.0703 10.5994 15.0006 10.5773 14.8611 10.533C14.3903 10.3835 13.5007 10.1362 12.2411 9.9359C12.1635 12.1928 10.2943 13.9987 7.99976 13.9987ZM7.99976 13.9987C10.3436 13.9987 12.2437 12.1145 12.2437 9.78991C12.2437 7.46534 10.3436 5.5809 7.99976 5.5809C5.65592 5.5809 3.75586 7.46534 3.75586 9.78991C3.75586 12.1145 5.65592 13.9987 7.99976 13.9987Z"
            stroke="currentColor"
        />
    </s.Svg>
);
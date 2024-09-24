import React from 'react';
import { Path, Svg } from 'react-native-svg';

interface IconSvgProps {
    size?: number;
    color?: string;
}

export const DisclosureRight: React.FC<IconSvgProps> = ({ size = 16, color }) => (
    <Svg viewBox="0 0 16 16" fill="none" width={size} height={size} color={color}>
        <Path
            d="M9.88298 4.70711C9.49246 4.31658 9.49246 3.68342 9.88298 3.29289C10.2735 2.90237 10.9067 2.90237 11.2972 3.29289L16.0043 8L11.2972 12.7071C10.9067 13.0976 10.2735 13.0976 9.88298 12.7071C9.49246 12.3166 9.49246 11.6834 9.88298 11.2929L13.1759 8L9.88298 4.70711Z"
            fill="currentColor"
        />
    </Svg>
);

import { Path, Svg } from 'react-native-svg';

interface IconSvgProps {
    size?: number;
    color?: string;
}

export const Done: React.FC<IconSvgProps> = ({ size = 18, color = 'black' }) => (
    <Svg viewBox="0 0 18 18" fill="none" width={size} height={size}>
        <Path
            fill={color}
            d="m5.70711,8.15582c-0.39053,-0.39052 -1.02369,-0.39052 -1.41422,0c-0.39052,0.39053 -0.39052,1.02369 0,1.41422l3.70666,3.70666l6.71095,-6.70248c0.3908,-0.39027 0.3912,-1.02344 0.0009,-1.41421c-0.3903,-0.39077 -1.02344,-0.39117 -1.41421,-0.00089l-5.29674,5.29004l-2.29334,-2.29334z"
        />
    </Svg>
);

export const Indeterminate: React.FC<IconSvgProps> = ({ size = 18, color = 'black' }) => (
    <Svg viewBox="0 0 18 18" fill="none" width={size} height={size}>
        <Path strokeLinecap="round" strokeWidth="2" stroke={color} d="m5.09449,9.0315l8,0" />
    </Svg>
);

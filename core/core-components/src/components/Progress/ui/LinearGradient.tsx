import { LinearGradient as LinearGradientNative, Stop } from 'react-native-svg';

import { Gradient } from '../../ThemeProvider';
import { getLinearVectorPoints } from '../../../utils';

interface LinearGradientProps {
    id: string;
    data: Gradient[string][string][number];
}

export const LinearGradient = (props: LinearGradientProps) => {
    const { data, id } = props;

    if (data.kind !== 'linear') {
        return null;
    }

    const { angle, colors, locations } = data;

    const { startPoint, endPoint } = getLinearVectorPoints(angle);

    return (
        <LinearGradientNative id={id} x1={startPoint.x} y1={startPoint.y} x2={endPoint.x} y2={endPoint.y}>
            <Stop offset={locations[0]} stopColor={colors[0]} stopOpacity="1" />
            <Stop offset={locations[1]} stopColor={colors[1]} stopOpacity="1" />
        </LinearGradientNative>
    );
};

import { LinearGradient as LinearGradientNative, Stop } from 'react-native-svg';

import { Gradient } from '../../../ThemeProvider';
import { getLinearVectorPoints } from '../../../../utils';
import { extractAlphaFromHex } from '../../utils';

interface LinearGradientProps {
    id: string;
    data?: Gradient[string][string][number];
}

export const LinearGradient = (props: LinearGradientProps) => {
    const { data, id } = props;

    if (!data || data.kind !== 'linear') {
        return null;
    }

    const { angle, colors, locations } = data;

    const { startPoint, endPoint } = getLinearVectorPoints(angle);

    const alphas = colors.map(extractAlphaFromHex);

    return (
        <LinearGradientNative id={id} x1={startPoint.x} y1={startPoint.y} x2={endPoint.x} y2={endPoint.y}>
            {locations.map((_, index) => (
                <Stop
                    offset={locations[index]}
                    stopColor={colors[index]}
                    stopOpacity={alphas[index]}
                    key={`data_${index}`}
                />
            ))}
        </LinearGradientNative>
    );
};

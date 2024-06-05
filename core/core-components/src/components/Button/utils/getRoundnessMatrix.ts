export const pins = {
    'square-square': 'r r r r',
    'square-clear': 'r 0 0 r',
    'clear-square': '0 r r 0',
    'clear-clear': '0 0 0 0',
    'clear-circle': '0 h h 0',
    'circle-clear': 'h 0 0 h',
    'circle-circle': 'h h h h',
};

export type Pin = keyof typeof pins;
export interface PinProps {
    /**
     * Границы компонента
     */
    pin: Pin;
}

const getValue = (char: string, r: number, h: number) => {
    if (char === 'r') {
        return r;
    }

    if (char === 'h') {
        return h;
    }

    return 0;
};

export const getRoundnessMatrix = (matrixKey: Pin, r: number, h: number) => {
    const [topLeft, topRight, bottomRight, bottomLeft] = pins[matrixKey].split(' ');

    return {
        borderTopLeftRadius: getValue(topLeft, r, h),
        borderTopRightRadius: getValue(topRight, r, h),
        borderBottomRightRadius: getValue(bottomRight, r, h),
        borderBottomLeftRadius: getValue(bottomLeft, r, h),
    };
};

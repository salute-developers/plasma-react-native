import { Config } from '../types';

export const getIntersectionStyles = <T extends object>(
    props: Record<string, any>,
    styles?: T,
    config?: Config,
): Required<T> => {
    let newStyles = { ...styles };

    const intersections = config?.intersections;

    if (!intersections) {
        return newStyles as Required<T>;
    }

    intersections.forEach((item) => {
        const hasMatchStyle = Object.entries(item)
            .filter(([key]) => key !== 'style')
            .every(([key, value]) => props[key] === value);

        if (hasMatchStyle) {
            newStyles = { ...newStyles, ...item.style };
        }
    });

    return newStyles as Required<T>;
};

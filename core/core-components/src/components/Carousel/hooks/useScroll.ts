import { FlatList } from 'react-native';
import { useCallback, useMemo } from 'react';

import { AlignProp, Sizes } from '../Carousel.types';

const getOffset = (
    index: number,
    align: AlignProp,
    sizes: Sizes,
    effectiveVisibleItems: number,
    fullItemWidth: number,
) => {
    // TODO: Подумать о том, нужно ли делать это пропсом
    const sideSpacing = sizes.paddingHorizontal * 4;

    if (align === 'left') {
        return fullItemWidth * index - sideSpacing;
    }

    if (align === 'center') {
        return (
            (effectiveVisibleItems * fullItemWidth - sizes.carouselWidth) / 2 +
            fullItemWidth * (index - Math.floor(effectiveVisibleItems / 2))
        );
    }

    if (align === 'right') {
        return (index + 1) * fullItemWidth - sizes.carouselWidth + sideSpacing;
    }

    return 0;
};

export const useScroll = ({
    carouselRef,
    sizes,
    align,
    withAnim = true,
}: {
    carouselRef: React.RefObject<FlatList>;
    sizes: Sizes;
    align: AlignProp;
    withAnim?: boolean;
}) => {
    const fullItemWidth = sizes.itemWidth + 2 * sizes.paddingHorizontal;

    const effectiveVisibleItems = useMemo(() => {
        if (align !== 'center') {
            return 0;
        }

        const visibleItems = Math.floor(sizes.carouselWidth / fullItemWidth);
        const oddVisibleItems = visibleItems % 2 === 0 ? visibleItems - 1 : visibleItems;
        return Math.max(1, oddVisibleItems);
    }, [align, sizes.carouselWidth, fullItemWidth]);

    const offset = useCallback(
        (targetIndex: number) => getOffset(targetIndex, align, sizes, effectiveVisibleItems, fullItemWidth),
        [align, sizes, effectiveVisibleItems, fullItemWidth],
    );

    const scrollToIndex = (index: number) => {
        carouselRef.current?.scrollToOffset({
            offset: offset(index),
            animated: withAnim,
        });
    };

    return { scrollToIndex };
};

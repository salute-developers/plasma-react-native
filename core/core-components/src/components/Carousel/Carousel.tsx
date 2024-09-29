import { Dimensions, FlatList, LayoutChangeEvent, Platform, View } from 'react-native';
import { ReactNode, useCallback, useMemo, useRef, useState } from 'react';

import { PropsType } from '../../types';
import { Theme, withTheme } from '../ThemeProvider';

import { CarouselItem } from './ui/CarouselItem';
import { CarouselConfig, CarouselProps, Sizes } from './Carousel.types';
import { getStyle } from './Carousel.styles';
import { useScroll } from './hooks';

export const defaultItemSize: Sizes = {
    itemWidth: 300,
    itemHeight: 150,
    paddingHorizontal: 8,
    paddingVertical: 8,
    carouselWidth: Dimensions.get('screen').width,
};

// INFO: на Apple TV есть особенности управления пультом - если долго держать кнопку,
// она может "залипнуть", и будет влиять на фокус. Для того, чтобы вернуть управление, нужно
// ещё раз нажать на ту же кнопку, которая "залипла"
export const carouselCore = <T extends CarouselConfig, K>(_?: T, theme?: Theme) => (
    props: CarouselProps<K> & PropsType<T['variations']>,
) => {
    const {
        items,
        align = 'center',
        itemsGap,
        itemsOverflow = 'hidden',
        defaultFocusedItemIndex,
        renderItem,
        style: externalStyle,
        onItemFocus,
        onItemPress,
        ...rest
    } = props;

    const carouselRef = useRef<FlatList>(null);
    const carouselItemRef = useRef<View>(null);
    const [sizes, setSizes] = useState(defaultItemSize);

    const { scrollToIndex } = useScroll({ carouselRef, sizes, align, withAnim: false });

    const style = useMemo(() => getStyle(theme, sizes, itemsOverflow, externalStyle), [
        itemsOverflow,
        sizes,
        theme?.mode,
    ]);

    const flatListRenderItem = useCallback(
        ({ item, index }: { item: K; index: number }) => {
            return (
                <CarouselItem
                    ref={carouselItemRef}
                    carouselRef={carouselRef}
                    item={item}
                    align={align}
                    sizes={sizes}
                    index={index}
                    autoFocused={index === defaultFocusedItemIndex}
                    renderItem={renderItem}
                    onFocus={onItemFocus}
                    onPress={onItemPress}
                />
            );
        },
        [sizes, defaultFocusedItemIndex, align, onItemFocus, renderItem],
    );

    const onLayout = useCallback(
        (event: LayoutChangeEvent) => {
            const { width: carouselWidth } = event.nativeEvent.layout;

            const measureMethod = Platform.OS === 'android' ? 'measureInWindow' : 'measure';

            carouselItemRef.current?.[measureMethod]((_, __, width, height) => {
                if (!width || !height) {
                    return;
                }

                const size = {
                    itemWidth: width,
                    itemHeight: height,
                    paddingHorizontal: itemsGap ?? defaultItemSize.paddingHorizontal,
                    paddingVertical: Math.round((width * defaultItemSize.paddingVertical) / defaultItemSize.itemHeight),
                    carouselWidth,
                };

                setSizes(size);

                if (defaultFocusedItemIndex === undefined) {
                    return undefined;
                }

                const itemsCount = items.length - 1;
                const actualIndex = Math.min(Math.max(defaultFocusedItemIndex, 0), itemsCount);

                scrollToIndex(actualIndex);
            });
        },
        [sizes, defaultFocusedItemIndex, itemsGap],
    );

    const defaultOptimizationProps = {
        windowSize: 2,
        scrollEventThrottle: 16,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        keyExtractor: useCallback((_: any, index: number) => String(index), []),
        getItemLayout: useCallback(
            (_: any, index: number) => ({
                index,
                length: sizes.itemWidth,
                offset: index * (sizes.itemWidth + sizes.paddingHorizontal * 2),
            }),
            [sizes],
        ),
    };

    return (
        <FlatList
            ref={carouselRef}
            data={items}
            style={style.root}
            renderItem={flatListRenderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEnabled={false}
            onLayout={onLayout}
            {...defaultOptimizationProps}
            {...rest}
        />
    );
};

// TODO: Подумать, получится ли перенести на уровень withTheme или сделать универсальную утилиту
type GenericCarouselProps = <T extends CarouselConfig>(
    getConfig: (theme: Theme<any>) => T,
) => <U>(props: CarouselProps<U> & PropsType<T['variations']>) => ReactNode;

export const carouselComponent = (withTheme(carouselCore) as unknown) as GenericCarouselProps;

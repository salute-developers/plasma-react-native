import { Pressable, PressableStateCallbackType, View } from 'react-native';
import { forwardRef, ReactNode, useCallback, useMemo } from 'react';

import { FocusableWrapper } from '../../../FocusableWrapper';
import { useScroll } from '../../hooks';

import { CarouselItemProps } from './CarouselItem.types';
import { getStyle } from './CarouselItem.styles';

export const CarouselItem = forwardRef((props, ref) => {
    const { item, autoFocused, index, align, sizes, carouselRef, renderItem, onFocus, onPress } = props;

    const { scrollToIndex } = useScroll({ align, carouselRef, sizes });
    const style = useMemo(() => getStyle(sizes), [sizes.paddingHorizontal]);

    const handleFocus = useCallback(() => {
        scrollToIndex(index);

        if (onFocus) {
            onFocus(index, item);
        }
    }, [index, item, sizes, align]);

    const handlePress = useCallback(() => {
        if (onPress) {
            onPress(index, item);
        }
    }, [index, item]);

    return (
        <Pressable
            ref={ref}
            style={style.root}
            hasTVPreferredFocus={autoFocused}
            onFocus={handleFocus}
            onPress={handlePress}
        >
            {({ focused }: PressableStateCallbackType & { focused?: boolean }) => (
                <FocusableWrapper focused={focused}>{renderItem(item)}</FocusableWrapper>
            )}
        </Pressable>
    );
}) as <U>(props: CarouselItemProps<U> & { ref?: React.ForwardedRef<View> }) => ReactNode;

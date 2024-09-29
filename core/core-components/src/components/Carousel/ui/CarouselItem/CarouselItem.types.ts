import { FlatList } from 'react-native';
import { ReactNode } from 'react';

import { AlignProp, Sizes } from '../../Carousel.types';

export interface CarouselItemProps<T> {
    index: number;
    align: AlignProp;
    sizes: Sizes;
    carouselRef: React.RefObject<FlatList>;
    autoFocused?: boolean;
    item: T;
    renderItem: (item: T) => ReactNode;
    onPress?: (index: number, item: T) => void;
    onFocus?: (index: number, item: T) => void;
}

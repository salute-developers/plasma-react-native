import { ReactNode } from 'react';
import { FlatListProps } from 'react-native';

import { Style } from './Carousel.styles';

export type AlignProp = 'left' | 'center' | 'right';

export type ItemsOverflow = 'hidden' | 'visible';

export interface Sizes {
    itemWidth: number;
    itemHeight: number;
    paddingHorizontal: number;
    paddingVertical: number;
    carouselWidth: number;
}

export interface CarouselProps<T> extends Omit<FlatListProps<T>, 'style' | 'data' | 'renderItem'> {
    /**
     * Объект для стилизации компонента
     */
    style?: Style;
    /**
     * Позиционирование активного элемента при скролле
     */
    align?: AlignProp;
    /**
     * Индекс элемента, на котором будем с позиционирован фокус
     */
    defaultFocusedItemIndex?: number;
    /**
     * Отображение элементов за пределами контейнера
     */
    itemsOverflow?: ItemsOverflow;
    /**
     * Отступ между элементами
     */
    itemsGap?: number;
    /**
     * Список элементов
     */
    items: T[];
    /**
     * Функция для отображения элемента
     */
    renderItem: (item: T) => ReactNode;
    /**
     * Обработчик фокуса на элемент
     */
    onItemFocus?: (index: number, item: T) => void;
    /**
     * Обработчик нажатия на элемент
     */
    onItemPress?: (index: number, item: T) => void;
}

export interface CarouselConfig {
    defaults: {
        view: string;
        size: string;
    };
    variations: {
        view: undefined;
        size: undefined;
    };
}

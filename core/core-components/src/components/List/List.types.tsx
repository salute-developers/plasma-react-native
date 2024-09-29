import { ReactNode } from 'react';

import { Style } from './List.styles';

export interface Item {
    contentLeft?: ReactNode;
    contentRight?: ReactNode;
    title?: string;
    subtitle?: string;
    label?: string;
    hasDisclosure?: boolean;
    disclosureText?: string;
    onItemPress?: () => void;
}

export interface ListProps<T extends Item = Item> {
    /**
     * Индекс выбранного элемента
     */
    selectedItemIndex?: number;
    /**
     * Объект для стилизации компонента
     */
    style?: Style;
    /**
     * Вид ячейки
     */
    view?: string;
    /**
     * Размер ячейки
     */
    size?: string;
    /**
     * Список элементов
     */
    items: T[];
    /**
     * Функция для отображения элемента
     */
    renderItem: (item: T) => ReactNode;
    /**
     * Обработчик выбора элемента
     */
    onItemSelect?: (index: number, item: T) => void;
    /**
     * Обработчик фокуса на элемент
     */
    onItemFocus?: (index: number, item: T) => void;
}

export interface ListConfig {
    defaults: {
        view: string;
        size: string;
    };
    variations: {
        view: {
            [x: string]: {
                itemBackgroundColorFocus: string;
                itemBackgroundColorSelect: string;
                itemScale: number;
            };
        };
        size: {
            [x: string]: {
                itemPaddingTop: number;
                itemPaddingRight: number;
                itemPaddingBottom: number;
                itemPaddingLeft: number;
                itemBorderRadius: number;
            };
        };
    };
}

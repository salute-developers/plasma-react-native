import { ReactNode } from 'react';

import { Item, ListConfig } from '../../List.types';

import { Style } from './ListItem.styles';

export interface ListItemProps<T extends Item> {
    style?: Style;
    index: number;
    selected?: boolean;
    viewStyle?: ListConfig['variations']['view'][string];
    sizeStyle?: ListConfig['variations']['size'][string];
    item: T;
    renderItem: (item: T) => ReactNode;
    onPress?: (index: number, item: T) => void;
    onFocus: (index: number, item: T) => void;
}

import { View } from 'react-native';
import React, { ReactNode, useMemo } from 'react';

import { PropsType } from '../../types';
import { Theme, withTheme } from '../ThemeProvider';

import { ListItem } from './ui/ListItem';
import { Item, ListConfig, ListProps } from './List.types';
import { getStyle } from './List.styles';

export const listCore = <T extends ListConfig, K extends Item>(config?: T, theme?: Theme) => (
    props: ListProps<K> & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
) => {
    const {
        view = '',
        size = '',
        selectedItemIndex,
        items,
        renderItem,
        style: externalStyle,
        onItemSelect,
        onItemFocus,
    } = props;
    const viewStyle = config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];

    const style = useMemo(() => getStyle(theme, viewStyle, sizeStyle, externalStyle), [
        view,
        size,
        selectedItemIndex,
        theme?.mode,
    ]);

    const handlePress = (index: number, item: K) => {
        if (onItemSelect) {
            onItemSelect(index, item);
        }

        if (item.onItemPress) {
            item.onItemPress();
        }
    };

    const handleFocus = (index: number, item: K) => {
        if (onItemFocus) {
            onItemFocus(index, item);
        }
    };

    return (
        <View ref={externalRef} style={style.root}>
            {items?.map((item, index) => (
                <ListItem
                    key={`cell-${index}`}
                    index={index}
                    item={item}
                    selected={index === selectedItemIndex}
                    viewStyle={viewStyle}
                    sizeStyle={sizeStyle}
                    renderItem={renderItem}
                    onPress={handlePress}
                    onFocus={handleFocus}
                />
            ))}
        </View>
    );
};

// TODO: Подумать, получится ли перенести на уровень withTheme или сделать универсальную утилиту
type GenericListProps = <T extends ListConfig>(
    getConfig: (theme: Theme<any>) => T,
) => <U extends Item>(
    props: ListProps<U> & PropsType<T['variations']> & { ref?: React.ForwardedRef<View> },
) => ReactNode;

export const listComponent = (withTheme(listCore) as unknown) as GenericListProps;

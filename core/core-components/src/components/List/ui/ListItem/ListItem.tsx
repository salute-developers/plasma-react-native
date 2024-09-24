import { Pressable, View } from 'react-native';
import { useMemo } from 'react';

import { FocusableWrapper } from '../../../FocusableWrapper';
import { Item } from '../../List.types';

import { ListItemProps } from './ListItem.types';
import { getStyle } from './ListItem.styles';

export const ListItem = <T extends Item>(props: ListItemProps<T>) => {
    const {
        viewStyle,
        sizeStyle,
        focused,
        selected,
        index,
        item,
        renderItem,
        onPress,
        onFocus,
        onBlur,
        style: externalStyle,
    } = props;

    const style = useMemo(() => getStyle(viewStyle, sizeStyle, focused, selected, externalStyle), [
        viewStyle,
        sizeStyle,
        focused,
        selected,
    ]);

    const handlePress = () => {
        if (onPress) {
            onPress(index, item);
        }
    };

    const handleFocus = () => {
        onFocus(index);
    };

    const handleBlur = () => {
        onBlur(index);
    };

    return (
        <Pressable onFocus={handleFocus} onBlur={handleBlur} onPress={handlePress} style={style.root}>
            <View style={style.background} />
            <FocusableWrapper focused={focused}>{renderItem(item)}</FocusableWrapper>
        </Pressable>
    );
};

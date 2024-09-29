import { Pressable, PressableStateCallbackType, View, ViewProps } from 'react-native';
import { useMemo } from 'react';

import { FocusableWrapper } from '../../../FocusableWrapper';
import { Item } from '../../List.types';

import { ListItemProps } from './ListItem.types';
import { getStyle } from './ListItem.styles';

export const ListItem = <T extends Item>(props: ListItemProps<T>) => {
    const { viewStyle, sizeStyle, selected, index, item, renderItem, onPress, style: externalStyle } = props;

    const style = useMemo(() => getStyle(viewStyle, sizeStyle, externalStyle), [viewStyle, sizeStyle]);

    const handlePress = () => {
        if (onPress) {
            onPress(index, item);
        }
    };

    const getFocusedStyle = (focused?: boolean) => {
        const backgroundColor = selected ? viewStyle?.itemBackgroundColorSelect : 'transparent';

        return {
            backgroundColor: focused ? viewStyle?.itemBackgroundColorFocus : backgroundColor,
            transform: [
                {
                    scale: focused ? viewStyle?.itemScale : 1,
                },
            ],
        } as ViewProps;
    };

    return (
        <Pressable onPress={handlePress} style={style.root}>
            {({ focused }: PressableStateCallbackType & { focused?: boolean }) => (
                <>
                    <View style={[style.background, getFocusedStyle(focused)]} />
                    <FocusableWrapper focused={focused}>{renderItem(item)}</FocusableWrapper>
                </>
            )}
        </Pressable>
    );
};

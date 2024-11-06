import { Pressable, PressableStateCallbackType, View } from 'react-native';

import { withTheme } from '../ThemeProvider';
import { PropsType } from '../../types';

import { FocusContainerConfig, FocusContainerProps } from './FocusContainer.types';

export const focusContainerCore = <T extends FocusContainerConfig>(config?: T) => (
    props: FocusContainerProps & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
) => {
    const { children, unfocusedBackgroundColor, unfocusedTextColor, ...rest } = props;

    const data = (focused?: boolean, pressed?: boolean) => {
        if (!config) {
            return {
                focusedTextColor: 'transparent',
                focusedBackgroundColor: 'transparent',
                focusedScale: 1,
                focused,
                pressed,
            };
        }

        const { focusedBackgroundColor, focusedScale, focusedTextColor } = config?.variations.focused.true;

        return {
            focusedTextColor: focused ? focusedTextColor : unfocusedTextColor,
            focusedBackgroundColor: focused ? focusedBackgroundColor : unfocusedBackgroundColor,
            focusedScale: focused ? focusedScale : 1,
            focused,
            pressed,
        };
    };

    return (
        <Pressable {...rest} ref={externalRef}>
            {
                ({ focused, pressed }: PressableStateCallbackType & { focused?: boolean }) =>
                    children(data(focused, pressed))
                // eslint-disable-next-line react/jsx-curly-newline
            }
        </Pressable>
    );
};

export const focusContainerComponent = withTheme(focusContainerCore);

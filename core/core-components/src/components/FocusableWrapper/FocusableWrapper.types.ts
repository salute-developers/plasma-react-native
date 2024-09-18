import { ReactNode } from 'react';
import { PressableProps } from 'react-native';

export interface Focusable {
    focusable?: PressableProps['focusable'];
    hasTVPreferredFocus?: PressableProps['hasTVPreferredFocus'];
    /**
     * Данное свойство работает только на TV
     */
    nextFocusUp?: number;
    /**
     * Данное свойство работает только на TV
     */
    nextFocusDown?: number;
    /**
     * Данное свойство работает только на TV
     */
    nextFocusRight?: number;
    /**
     * Данное свойство работает только на TV
     */
    nextFocusLeft?: number;
    /**
     * Данное свойство работает только на TV
     */
    nextFocusForward?: number;
    onFocus?: PressableProps['onFocus'];
    onBlur?: PressableProps['onBlur'];
    onPress?: PressableProps['onPress'];
    onLongPress?: PressableProps['onLongPress'];
}

export interface FocusStyle {
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
}

export interface FocusableWrapperProps extends Omit<PressableProps, 'style'>, Focusable {
    style?: {
        root?: PressableProps['style'];
        focus?: FocusStyle;
    };
    focused?: boolean;
    hasFocus?: boolean;
    children?: ReactNode;
}

import { PressableProps } from 'react-native';

export interface CustomFocusContainerProps extends Omit<PressableProps, 'children'> {
    children: (state: {
        focusedTextColor: string;
        focusedBackgroundColor: string;
        focusedScale: number;
        focused?: boolean;
        pressed?: boolean;
    }) => React.ReactNode;
    unfocusedBackgroundColor: string;
    unfocusedTextColor: string;
}

export interface FocusContainerProps extends CustomFocusContainerProps {}

export interface FocusContainerConfig {
    variations: {
        focused: {
            true: {
                focusedTextColor: string;
                focusedBackgroundColor: string;
                focusedScale: number;
            };
        };
    };
}

import { PressableProps } from 'react-native';

interface FocusProps {
    /**
     * Цвет текста компонента в фокусе
     */
    focusedTextColor?: string;
    /**
     * Бэкграунд компонента в фокусе
     */
    focusedBackgroundColor?: string;
    /**
     * Размер зума компонента в фокусе
     */
    focusedScale: number;
    /**
     * Находится ли компонент в фокусе
     */
    focused?: boolean;
    /**
     * Нажат ли компонент
     */
    pressed?: boolean;
}

export interface CustomFocusContainerProps extends Omit<PressableProps, 'children'> {
    /**
     * Функция, которая возвращает компонент, на который нужно сфокусироваться
     */
    children: (state: FocusProps) => React.ReactNode;
    /**
     * Бэкграунд компонента вне фокуса
     */
    unfocusedBackgroundColor?: string;
    /**
     * Цвет текста компонента вне фокуса
     */
    unfocusedTextColor?: string;
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

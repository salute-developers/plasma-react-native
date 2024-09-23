import { ReactNode } from 'react';

export interface FocusableWrapperProps {
    children: ReactNode;
    /**
     * Установить цвет для children иконки
     */
    iconColor?: string;
    /**
     * Установить`focused=true` для поддерживающего это свойство children компонента
     */
    focused?: boolean;
    /**
     * Применить любой стиль children компоненту
     */
    style?: any;
}

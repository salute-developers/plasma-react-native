import { PressableProps } from 'react-native';
import { ReactNode } from 'react';

import { Style } from '../Button/Button.styles';
import { Pin } from '../Button/utils';

interface CustomIconButtonProps extends Omit<PressableProps, 'style'> {
    /**
     * Объект для стилизации компонента
     */
    style?: Style;
    /**
     * Контент кнопки
     */
    children?: ReactNode;
    /**
     * Состояние загрузки
     */
    isLoading?: boolean;
    /**
     * Слот для контента загрузки
     */
    loader?: ReactNode;
    /**
     * Кнопка неактивна
     */
    disabled?: boolean;
    /**
     * Скругление border-radius
     */
    pin?: Pin;
    /**
     * Вид кнопки
     */
    view?: string;
    /**
     * Размер кнопки
     */
    size?: string;
}

export interface IconButtonProps extends CustomIconButtonProps {}

export interface IconButtonConfig {
    defaults: {
        view: string;
        size: string;
    };
    variations: {
        view: {
            [x: string]: {
                color: string;
                backgroundColor: string;
                colorActive: string;
                backgroundColorActive: string;
                spinnerColor: string;
                scale?: number;
            };
        };
        size: {
            [x: string]: {
                height: number;
                width: number;
                padding: number;
                radius: number;
                spinnerSize: number;
            };
        };
        disabled: {
            [x: string]: {
                disabledOpacity: number;
            };
        };
        focused: {
            true: {
                color: string;
                backgroundColor: string;
                colorActive: string;
                backgroundColorActive: string;
                spinnerColor: string;
                scale: number;
            };
        };
    };
}

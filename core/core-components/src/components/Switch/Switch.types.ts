import { PressableProps } from 'react-native';
import { ReactNode } from 'react';

import { Shadow } from '../ThemeProvider';

import { Style } from './Switch.styles';

interface CustomSwitchProps extends Omit<PressableProps, 'style'> {
    /**
     * Объект для стилизации компонента
     */
    style?: Style;
    /**
     * Определяет уникальное имя элемента формы
     */
    name?: string;
    /**
     * Помечен ли такой элемент формы, как флажок или переключатель
     */
    checked?: boolean;
    /**
     * Значение компонента свитч
     */
    value?: string;
    /**
     * Метка-подпись к элементу
     */
    label?: string;
    /**
     * Описание элемента
     */
    description?: ReactNode;
    /**
     * Свитч неактивен
     */
    disabled?: boolean;
    /**
     * Компонент находится в фокусе
     */
    focused?: boolean;
    /**
     * Вид свитча
     */
    view?: string;
    /**
     * Размер свитча
     */
    size?: string;
    /**
     * Обработчик изменения состояния свитча
     */
    onValueChange?: (value: boolean) => void;
}

export interface SwitchProps extends CustomSwitchProps {}

export interface SwitchConfig {
    defaults: {
        view: string;
        size: string;
    };
    variations: {
        view: {
            [x: string]: {
                thumbBackgroundColor: string;
                thumbShadow: Shadow[string][string];
                trackBackgroundColorOn: string;
                trackBackgroundColorOff: string;
                labelColor: string;
                descriptionColor: string;
            };
        };
        size: {
            [x: string]: {
                trackWidth: number;
                trackHeight: number;
                trackBorderRadius: number;
                thumbOffset: number;
                thumbPressScale: number;
                thumbSize: number;
                thumbBorderRadius: number;
                labelOffset: number;
                labelFontFamilyRef: string;
                labelFontSize: number;
                labelFontStyle: string;
                labelFontWeight: string;
                labelLetterSpacing: number;
                labelLineHeight: number;
                descriptionMarginTop: number;
                descriptionFontFamilyRef: string;
                descriptionFontSize: number;
                descriptionFontStyle: string;
                descriptionFontWeight: string;
                descriptionLetterSpacing: number;
                descriptionLineHeight: number;
            };
        };
        disabled: {
            [x: string]: {
                disabledOpacity: number;
            };
        };
        focused: {
            true: {
                thumbBackgroundColor: string;
                thumbShadow: Shadow[string][string];
                trackBackgroundColorOn: string;
                trackBackgroundColorOff: string;
                labelColor: string;
                descriptionColor: string;
            };
        };
    };
}

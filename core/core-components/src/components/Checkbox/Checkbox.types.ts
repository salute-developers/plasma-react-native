import { ViewProps } from 'react-native';

import { Focusable } from '../FocusableWrapper';

import { Style } from './Checkbox.styles';

interface CustomCheckboxProps extends Omit<ViewProps, 'style'>, Focusable {
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
     * Значение компонента чекбокс
     */
    value?: string;
    /**
     * Уникальный идентификатор контрола
     */
    id?: string;
    /**
     * Метка-подпись к элементу
     */
    label?: React.ReactNode;
    /**
     * Описание элемента
     */
    description?: React.ReactNode;
    /**
     * Label и description в одну строку или с переносом строк
     */
    singleLine?: boolean;
    /**
     * Неопределенное состояние компонента - когда часть потомков не выбрана.
     */
    indeterminate?: boolean;
    /**
     * Чекбокс неактивен
     */
    disabled?: boolean;
    /**
     * Вид чекбокса
     */
    view?: string;
    /**
     * Размер чекбокса
     */
    size?: string;
    /**
     * Обработчик изменения состояния чекбокса
     */
    onValueChange?: (value: boolean) => void;
}

export interface CheckboxProps extends CustomCheckboxProps {}

export interface CheckboxConfig {
    defaults: {
        view: string;
        size: string;
    };
    variations: {
        view: {
            [x: string]: {
                fillColor: string;
                iconColor: string;
                labelColor: string;
                descriptionColor: string;
                triggerBorderColor: string;
            };
        };
        size: {
            [x: string]: {
                margin: number;
                triggerMargin: number;
                triggerSize: number;
                triggerBorderRadius: number;
                triggerBorderWidth: number;
                triggerEllipseBorderWidth?: number;
                contentTopOffset: number;
                contentLeftOffset: number;
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
    };
}

import { ButtonProps as ButtonPropsNative } from 'react-native';
import { ReactNode } from 'react';

import { Focusable } from '../FocusableWrapper';

import { Pin } from './utils';
import { Style } from './Button.styles';

export type Stretching = 'fixed' | 'filled' | 'auto';

interface CustomButtonProps extends Omit<ButtonPropsNative, 'onPress' | 'title'>, Focusable {
    /**
     * Объект для стилизации компонента
     */
    style?: Style;
    /**
     * Контент кнопки
     */
    children?: ReactNode;
    /**
     * Текстовая надпись
     */
    text?: string;
    /**
     * Слот для контента слева, например `Icon`
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа, например `Icon`
     */
    contentRight?: ReactNode;
    /**
     * Состояние загрузки
     */
    isLoading?: boolean;
    /**
     * Слот для контента загрузки
     */
    loader?: ReactNode;
    /**
     * Поведение ширины кнопки
     * @description
     * Может принимать три значения:
     * fixed - кнопка фиксированной ширины;
     * filled - кнопка занимает всю доступную ширину
     * auto - кнопка растягивается в зависимости от контента
     */
    stretching?: Stretching;
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

export interface ButtonProps extends CustomButtonProps {}

export interface ButtonConfig {
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
            };
        };
        size: {
            [x: string]: {
                height: number;
                width: number;
                padding: number;
                radius: number;
                contentGap: number;
                fontFamilyRef: string;
                fontWeight: string;
                fontStyle: string;
                fontSize: number;
                letterSpacing: number;
                lineHeight: number;
                spinnerSize: number;
            };
        };
        disabled: {
            [x: string]: {
                disabledOpacity: number;
            };
        };
    };
}

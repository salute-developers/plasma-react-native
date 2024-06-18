import { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

import { Style } from './TextField.styles';

export type LabelPlacement = 'inner' | 'outer';

interface CustomTextFieldProps extends Omit<TextInputProps, 'style'> {
    /**
     * Объект для стилизации компонента
     */
    style?: Style;
    /**
     * Метка-подпись к элементу
     */
    label?: string;
    /**
     * Расположение лейбла
     */
    labelPlacement?: LabelPlacement;
    /**
     * Вспомогательный текст снизу слева для поля ввода
     */
    captionLeft?: string;
    /**
     * Слот для контента слева.
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа.
     */
    contentRight?: ReactNode;
    /**
     * Слот для вспомогательного текста справа
     */
    textBefore?: string;
    /**
     * Слот для вспомогательного текста слева
     */
    textAfter?: string;
    /**
     * Компонент доступен только для чтения
     */
    readOnly?: boolean;
    /**
     * Может ли фокусироваться текстовое поле
     */
    focused?: boolean;
    /**
     * Текстовое поле неактивно
     */
    disabled?: boolean;
    /**
     * Вид текстового поля
     */
    view?: string;
    /**
     * Размер текстового поля
     */
    size?: string;
    /**
     * Обработчик изменения значение текстового поля
     */
    onValueChange?: (value: string) => void;
}

export interface TextFieldProps extends CustomTextFieldProps {}

export interface TextFieldConfig {
    defaults: {
        view: string;
        size: string;
        focused: string;
    };
    variations: {
        view: {
            [x: string]: {
                color: string;
                backgroundColor?: string;
                backgroundColorFocus?: string;
                borderColor?: string;
                borderColorFocus?: string;
                colorReadOnly: string;
                backgroundColorReadOnly?: string;
                borderColorReadOnly?: string;
                placeholderColorReadOnly: string;
                caretColor: string;
                placeholderColor: string;
                labelColor: string;
                labelColorReadOnly: string;
                captionLeftColor: string;
                captionLeftColorReadOnly: string;
                textBeforeColor: string;
                textAfterColor: string;
            };
        };
        size: {
            [x: string]: {
                height: number;
                borderWidth?: number;
                borderRadius: number;
                paddingRight: number;
                paddingLeft: number;
                contentLeftMarginTop: number;
                contentLeftMarginRight: number;
                contentLeftMarginBottom: number;
                contentLeftMarginLeft: number;
                contentRightMarginTop: number;
                contentRightMarginRight: number;
                contentRightMarginBottom: number;
                contentRightMarginLeft: number;
                fontFamilyRef: string;
                fontStyle: string;
                fontSize: number;
                fontWeight: string;
                letterSpacing: number;
                lineHeight: number;
                labelOffset: number;
                labelFontFamilyRef: string;
                labelFontStyle: string;
                labelFontSize: number;
                labelFontWeight: string;
                labelLetterSpacing: number;
                labelLineHeight: number;
                labelInnerTop: number;
                labelInnerFontFamilyRef: string;
                labelInnerFontStyle: string;
                labelInnerFontSize: number;
                labelInnerFontWeight: string;
                labelInnerLetterSpacing: number;
                labelInnerLineHeight: number;
                contentLabelInnerPaddingTop: number;
                contentLabelInnerPaddingRight: number;
                contentLabelInnerPaddingBottom: number;
                contentLabelInnerPaddingLeft: number;
                captionLeftOffset: number;
                captionLeftFontFamilyRef: string;
                captionLeftFontStyle: string;
                captionLeftFontSize: number;
                captionLeftFontWeight: string;
                captionLeftLetterSpacing: number;
                captionLeftLineHeight: number;
                textBeforeMargin: number;
                textAfterMargin: number;
            };
        };
        disabled: {
            [x: string]: {
                disabledOpacity: number;
            };
        };
        focused: {
            [x: string]: {
                focusColor: string;
            };
        };
    };
}

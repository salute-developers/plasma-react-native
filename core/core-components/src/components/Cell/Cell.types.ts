import { ReactNode } from 'react';

import { Stretching } from '../../utils';

import { Style } from './Cell.styles';

export type AlignProp = 'center' | 'top' | 'bottom';

export type CellWithContentRight = {
    /**
     * Вертикальное выравнивание контента справа.
     */
    alignContentRight?: AlignProp;
    /**
     * Слот для контента спарва, например `Icon`
     */
    contentRight?: ReactNode;
    /**
     * Отображать стрелку
     */
    hasDisclosure?: never;
    /**
     * Поясняющий текст
     */
    disclosureText?: never;
};

export type CellWithDisclosure = {
    /**
     * Вертикальное выравнивание контента справа.
     */
    alignContentRight?: never;
    /**
     * Слот для контента спарва, например `Icon`
     */
    contentRight?: never;
    /**
     * Отображать стрелку
     */
    hasDisclosure?: true;
    /**
     * Поясняющий текст
     */
    disclosureText?: string;
};

export interface CellPropsBase {
    /**
     * Объект для стилизации компонента
     */
    style?: Style;
    /**
     * Слот для контента слева, например `Icon`
     */
    contentLeft?: ReactNode;
    /**
     * Текст для Title
     */
    title?: string;
    /**
     * Текст для Subtitle
     */
    subtitle?: string;
    /**
     * Текст для Label
     */
    label?: string;
    /**
     * Вертикальное выравнивание контента слева
     */
    alignContentLeft?: AlignProp;
    /**
     * Ширина ячейки
     * @description
     * Может принимать три значения:
     * fixed - ячейка фиксированной ширины;
     * filled - ячейка занимает всю доступную ширину
     * auto - ячейка растягивается в зависимости от контента
     */
    stretching?: Stretching;
    /**
     * Компонент находится в фокусе
     */
    focused?: boolean;
    /**
     * Вид ячейки
     */
    view?: string;
    /**
     * Размер ячейки
     */
    size?: string;
}

export type CellProps = CellPropsBase & (CellWithContentRight | CellWithDisclosure);

export interface CellConfig {
    defaults: {
        view: string;
        size: string;
    };
    variations: {
        view: {
            [x: string]: {
                color: string;
                labelColor: string;
                titleColor: string;
                subtitleColor: string;
                contentIconColor: string;
                contentRightTextColor: string;
                backgroundColor: string;
            };
        };
        size: {
            [x: string]: {
                width: number;
                padding: number;
                paddingLeftContent: number;
                paddingContent: number;
                paddingRightContent: number;
                textBoxGap: number;
                gap: number;
                labelFontFamilyRef: string;
                labelFontSize: number;
                labelFontStyle: string;
                labelFontWeight: string;
                labelLetterSpacing: number;
                labelLineHeight: number;
                titleFontFamilyRef: string;
                titleFontSize: number;
                titleFontStyle: string;
                titleFontWeight: string;
                titleLetterSpacing: number;
                titleLineHeight: number;
                subtitleFontFamilyRef: string;
                subtitleFontSize: number;
                subtitleFontStyle: string;
                subtitleFontWeight: string;
                subtitleLetterSpacing: number;
                subtitleLineHeight: number;
                contentRightTextGap: number;
                contentRightTextFontFamilyRef: string;
                contentRightTextFontSize: number;
                contentRightTextFontStyle: string;
                contentRightTextFontWeight: string;
                contentRightTextLetterSpacing: number;
                contentRightTextLineHeight: number;
            };
        };
        focused: {
            true: {
                color: string;
                labelColor: string;
                titleColor: string;
                subtitleColor: string;
                contentIconColor: string;
                contentRightTextColor: string;
                backgroundColor: string;
            };
        };
    };
}

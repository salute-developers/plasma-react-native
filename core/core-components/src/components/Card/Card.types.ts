import { PressableProps } from 'react-native';
import { ReactNode } from 'react';

import { Config } from '../../types';

import { Style } from './Card.styles';

export type AlignProp = 'center' | 'left' | 'right';

interface CustomCardProps extends Omit<PressableProps, 'style'> {
    /**
     * Объект для стилизации компонента
     */
    style?: Style;
    /**
     * Слот для контента слева сверху, например `Icon`
     */
    contentTopLeft?: ReactNode;
    /**
     * Слот для контента справа сверху, например `Icon`
     */
    contentTopRight?: ReactNode;
    /**
     * Слот для контента справа снизу, например `Icon`
     */
    contentBottomRight?: ReactNode;
    /**
     * Слот для контента слева снизу, например `Icon`
     */
    contentBottomLeft?: ReactNode;
    /**
     * Горизонтальное выравнивание текстового блока
     */
    alignTextBox?: AlignProp;
    /**
     * Текст для Title
     */
    title?: string;
    /**
     * Текст для Subtitle
     */
    subtitle?: string;
    /**
     * Слот для компонента изображения
     */
    image?: ReactNode;
    /**
     * Значение прогресса в процентах
     */
    timelineValue?: number;
    /**
     * Карточка неактивна
     */
    disabled?: boolean;
    /**
     * Вид карточки
     */
    view?: string;
    /**
     * Размер карточки
     */
    size?: string;
}

export interface CardProps extends CustomCardProps {}

export interface CardConfig extends Config {
    defaults: {
        view: string;
        size: string;
    };
    variations: {
        view: {
            [x: string]: {
                titleColor: string;
                subtitleColor: string;
                contentTopLeftColor: string;
                contentTopRightColor: string;
                contentBottomRightColor: string;
                contentBottomLeftColor: string;
                timelineBarColor: string;
                timelineProgressColor: string;
            };
        };
        size: {
            [x: string]: {
                height: number;
                width: number;
                borderRadius: number;
                borderWidth: number;
                contentPadding: number;
                textBoxGap: number;
                scale: number;
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
            };
        };
        disabled: {
            [x: string]: {
                disabledOpacity: number;
            };
        };
        focused: {
            true: {
                titleColor: string;
                subtitleColor: string;
                contentTopLeftColor: string;
                contentTopRightColor: string;
                contentBottomRightColor: string;
                contentBottomLeftColor: string;
                timelineBarColor: string;
                timelineProgressColor: string;
            };
        };
    };
}

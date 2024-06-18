import { TextProps } from 'react-native';
import { ReactNode } from 'react';

import { Style } from './Typography.styles';

export interface TypographyProps extends Omit<TextProps, 'style'> {
    /**
     * Объект для стилизации компонента
     */
    style?: Style;
    /**
     * Контент компонента
     */
    children?: ReactNode;
    /**
     * Полужирное начертание
     */
    bold?: boolean;
    /**
     * Вид компонента
     */
    view?: string;
    /**
     * Размер компонента
     */
    size?: string;
}

export interface TypographyConfig {
    defaults: {
        view: string;
        size: string;
    };
    variations: {
        view: {
            [x: string]: {
                color: string;
            };
        };
        size: {
            [x: string]: {
                fontFamilyRef: string;
                fontWeight: string;
                fontWeightBold: string;
                fontStyle: string;
                fontSize: number;
                letterSpacing: number;
                lineHeight: number;
            };
        };
    };
}

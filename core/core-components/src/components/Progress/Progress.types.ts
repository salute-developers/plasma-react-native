import { Gradient } from '../ThemeProvider';

import { Style } from './Progress.styles';

export interface ProgressProps {
    /**
     * Объект для стилизации компонента
     */
    style?: Style;
    /**
     * Значение прогресса в процентах
     */
    value: number;
    /**
     * Отображать числовое значение прогресса
     * @default 'true'
     */
    displayValue?: boolean;
    /**
     * Вид прогресса
     */
    view?: string;
    /**
     * Размер прогресса
     */
    size?: string;
}

export interface ProgressConfig {
    defaults: {
        view: string;
        size: string;
    };
    variations: {
        view: {
            [x: string]: {
                trackBackgroundColor: string;
                progressFilledBackgroundColor: string | Gradient[string][string];
                valueColor: string;
            };
        };
        size: {
            [x: string]: {
                trackHeight: number;
                trackBorderRadius: number;
                progressFilledHeight: number;
                progressFilledBorderRadius: number;
                valueMarginLeft: number;
                fontFamilyRef: string;
                fontWeight: string;
                fontStyle: string;
                fontSize: number;
                letterSpacing: number;
                lineHeight: number;
            };
        };
    };
}

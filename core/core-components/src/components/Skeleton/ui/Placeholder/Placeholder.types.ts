import { ViewProps } from 'react-native';

import { Gradient, Theme } from '../../../ThemeProvider';

import { Style } from './Placeholder.styles';

export type Roundness = 250 | 32 | 28 | 24 | 20 | 18 | 16 | 14 | 12 | 8 | 0;

interface CustomPlaceholderProps extends Omit<ViewProps, 'style'> {
    /**
     * Объект для стилизации компонента
     */
    style?: Style;
    /**
     * Размер скругления скелетона
     */
    roundness?: Roundness;
    /**
     * Применить более светлый градиент
     */
    lighter?: boolean;
    /**
     * Пользовательский цвет градиента
     */
    customGradientColor?: Gradient[string][string][number];
}

export interface PlaceholderInternalProps {
    width?: string | number;
    height?: number;
    margin?: number;
    theme?: Theme;
}

export interface PlaceholderProps extends CustomPlaceholderProps {}

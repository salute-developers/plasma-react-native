export interface SpinnerProps {
    /**
     * Ширина спиннера
     */
    width?: number;
    /**
     * Высота спиннера
     */
    height?: number;
    /**
     * Цвет спиннера
     */
    color?: string;
    /**
     * Вид спиннера
     */
    view?: string;
    /**
     * Размер спиннера
     */
    size?: string;
}

export interface SpinnerConfig {
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
                size: number;
            };
        };
    };
}

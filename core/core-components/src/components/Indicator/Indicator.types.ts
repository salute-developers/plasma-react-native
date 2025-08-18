export interface IndicatorProps {
    /**
     * Вид индикатора
     */
    view?: string;
    /**
     * Размер индикатора
     */
    size?: string;
}

export interface IndicatorConfig {
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

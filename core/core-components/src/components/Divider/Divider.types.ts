export type OrientationProp = 'horizontal' | 'vertical';

export interface DividerProps {
    /**
     * Направление разделителя
     */
    orientation?: OrientationProp;
    /**
     * Размер разделителя в процентах
     */
    length?: number;
    /**
     * Вид разделителя
     */
    view?: string;
    /**
     * Размер разделителя
     */
    size?: string;
}

export interface DividerConfig {
    defaults: {
        view: string;
        size: string;
    };
    variations: {
        view: {
            [x: string]: {
                background: string;
            };
        };
        size: {
            [x: string]: {
                borderRadius: number;
            };
        };
        orientation: {
            [x: string]: {
                baseSideSize: number;
            };
        };
    };
}

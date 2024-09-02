import { PlaceholderProps } from '../ui';

interface CustomTextSkeletonProps extends PlaceholderProps {
    /**
     * Количество линий скелетона
     */
    lines: number;
    /**
     * Заданная ширина линий в процентах; по умолчанию подбирается случайная для заданного кол-ва линий
     */
    width?: number;
    /**
     * Размер скелетона
     */
    size?: string;
}

export interface TextSkeletonProps extends CustomTextSkeletonProps {}

export interface TextSkeletonConfig {
    defaults: {
        size: string;
    };
    variations: {
        size: {
            [x: string]: {
                lineHeight: number;
                visibleLineHeight: number;
            };
        };
    };
}

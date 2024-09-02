import { PlaceholderProps } from '../ui';

interface CustomLineSkeletonProps extends PlaceholderProps {
    /**
     * Размер скелетона
     */
    size?: string;
}

export interface LineSkeletonProps extends CustomLineSkeletonProps {}

export interface LineSkeletonConfig {
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

import { PlaceholderProps } from '../ui';

interface CustomRectSkeletonProps extends PlaceholderProps {
    /**
     * Ширина скелетона
     */
    width: number;
    /**
     * Высота скелетона
     */
    height: number;
}

export interface RectSkeletonProps extends CustomRectSkeletonProps {}

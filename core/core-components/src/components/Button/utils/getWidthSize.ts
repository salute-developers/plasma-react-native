import { ButtonProps } from '../Button.types';

export const getWidthSize = (stretching: ButtonProps['stretching'], width: number) => {
    if (stretching === 'auto') {
        return {
            alignSelf: 'flex-start',
        } as const;
    }

    if (stretching === 'fixed') {
        return {
            width,
        } as const;
    }

    if (stretching === 'filled') {
        return {
            width: 'auto',
        } as const;
    }

    return {};
};

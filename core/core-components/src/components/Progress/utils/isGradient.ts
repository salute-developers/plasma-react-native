import { Gradient } from '../../ThemeProvider';

export const isGradient = (value?: any): value is Gradient[string][string] => {
    return value && typeof value !== 'string';
};

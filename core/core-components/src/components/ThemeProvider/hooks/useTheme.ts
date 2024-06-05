import { useContext } from 'react';

import { ThemeContext } from '../ThemeProvider';

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('Components must be used within a ThemeProvider');
    }

    return context;
};

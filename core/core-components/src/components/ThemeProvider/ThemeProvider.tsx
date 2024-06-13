import { createContext } from 'react';

import { Theme, ThemeProviderProps } from './ThemeProvider.types';

export const ThemeContext = createContext<Theme>(null as any);

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

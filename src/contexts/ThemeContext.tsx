import { createContext, type ReactNode, useContext, useState } from 'react';

interface ThemeContextData {
	darkMode: boolean;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData>(
	{} as ThemeContextData,
);

interface ThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	function toggleTheme(): void {
		setDarkMode(!darkMode);
	}

	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);

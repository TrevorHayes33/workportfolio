'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '../components/ThemeSelector';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('cyberpunk');

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme && ['minimalistic', 'cyberpunk', 'professional'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    
    // Update document body class for global theme styles
    if (typeof document !== 'undefined') {
      document.body.className = document.body.className.replace(/theme-\w+/g, '');
      document.body.classList.add(`theme-${newTheme}`);
    }
  };

  useEffect(() => {
    // Apply theme class to body
    if (typeof document !== 'undefined') {
      document.body.className = document.body.className.replace(/theme-\w+/g, '');
      document.body.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 
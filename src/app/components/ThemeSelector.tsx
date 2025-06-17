'use client';

import { useState, useEffect } from 'react';
import styles from './ThemeSelector.module.css';

export type Theme = 'minimalistic' | 'cyberpunk' | 'professional';

interface ThemeSelectorProps {
  onThemeChange: (theme: Theme) => void;
  currentTheme: Theme;
}

export default function ThemeSelector({ onThemeChange, currentTheme }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'minimalistic', name: 'Minimalistic', icon: '⚪' },
    { id: 'cyberpunk', name: 'Cyberpunk', icon: '⚡' },
    { id: 'professional', name: 'Professional', icon: '💼' }
  ] as const;

  const handleThemeChange = (theme: Theme) => {
    onThemeChange(theme);
    setIsOpen(false);
  };

  const currentThemeData = themes.find(t => t.id === currentTheme);

  return (
    <div className={styles.themeSelector}>
      <button 
        className={styles.selectorButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select theme"
      >
        <span className={styles.themeIcon}>{currentThemeData?.icon}</span>
        <span className={styles.themeName}>{currentThemeData?.name}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          {themes.map((theme) => (
            <button
              key={theme.id}
              className={`${styles.themeOption} ${currentTheme === theme.id ? styles.active : ''}`}
              onClick={() => handleThemeChange(theme.id)}
            >
              <span className={styles.themeIcon}>{theme.icon}</span>
              <span className={styles.themeName}>{theme.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 
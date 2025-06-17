'use client';

import React from 'react';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import Navigation from './Navigation';

function ThemedWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div className={`app-wrapper theme-${theme}`}>
      <Navigation />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemedWrapper>{children}</ThemedWrapper>
    </ThemeProvider>
  );
} 
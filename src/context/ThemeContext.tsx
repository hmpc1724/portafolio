'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyThemeToDOM(targetTheme: Theme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (targetTheme === 'dark') {
    root.classList.add('dark');
    root.style.colorScheme = 'dark';
  } else {
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    let initialTheme: Theme = 'dark';
    if (savedTheme === 'light' || savedTheme === 'dark') {
      initialTheme = savedTheme;
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      initialTheme = prefersDark ? 'dark' : 'light';
    }
    applyThemeToDOM(initialTheme);
    /* eslint-disable react-hooks/set-state-in-effect */
    setThemeState(initialTheme);
    setMounted(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', newTheme);
    }
    applyThemeToDOM(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-theme', nextTheme);
      }
      applyThemeToDOM(nextTheme);
      return nextTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

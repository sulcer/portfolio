'use client';
import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(theme === 'dark');

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button
      onClick={toggleTheme}
      className="relative flex items-center justify-center h-8 w-8 outline-none cursor-pointer bg-transparent border-none focus:outline-none hover:bg-transparent"
    >
      <Sun
        className={`absolute h-[1.2rem] w-[1.2rem] transition-transform text-black dark:text-white ${isDarkMode ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-transform dark:text-white text-black ${isDarkMode ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

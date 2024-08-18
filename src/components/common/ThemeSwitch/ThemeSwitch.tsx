'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { MoonIcon } from '@heroicons/react/20/solid';
import { SunIcon } from '@heroicons/react/16/solid';
import * as styles from './ThemeSwitch.css';

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const handleButtonClick = (currentTheme?: string) => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      className={styles.themeSwitch}
      onClick={() => handleButtonClick(theme)}
    >
      {theme === 'light' ? (
        <SunIcon width={24} height={24} />
      ) : (
        <MoonIcon width={24} height={24} />
      )}
    </button>
  );
}

export default ThemeSwitch;

'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import * as styles from './ThemeSwitch.css';

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const handleButtonClick = (currentTheme?: string) => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      className={styles.themeSwitch}
      onClick={() => handleButtonClick(resolvedTheme)}
    >
      {mounted &&
        (resolvedTheme === 'light' ? (
          <SunIcon width={24} height={24} />
        ) : (
          <MoonIcon width={24} height={24} />
        ))}
    </button>
  );
}

export default ThemeSwitch;

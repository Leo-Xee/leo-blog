'use client';

import { useTheme } from 'next-themes';
import React from 'react';

function ThemeSwitch() {
  const { setTheme } = useTheme();

  const handleButtonClick = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div>
      <button type="button" onClick={() => handleButtonClick('light')}>
        light
      </button>
      <button type="button" onClick={() => handleButtonClick('dark')}>
        dark
      </button>
    </div>
  );
}

export default ThemeSwitch;

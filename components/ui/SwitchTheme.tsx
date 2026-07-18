'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const dark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="
        relative flex h-10 w-20 items-center
        rounded-full
        bg-gray-200 dark:bg-zinc-700
        p-1
        transition-colors duration-300
      "
    >
      <div
        className={`
          absolute flex h-8 w-8 items-center justify-center rounded-full
          bg-white shadow-lg transition-all duration-300
          ${dark ? 'translate-x-10' : 'translate-x-0'}
        `}
      >
        {dark ? (
          <Moon className="h-4 w-4 text-indigo-500" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </div>
    </button>
  );
}
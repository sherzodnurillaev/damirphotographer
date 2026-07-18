'use client';

import { useEffect, useState } from 'react';

const colors = [
  { name: 'purple', color: '#7c3aed' },
  { name: 'blue', color: '#2563eb' },
  { name: 'red', color: '#dc2626' },
  { name: 'green', color: '#16a34a' },
  { name: 'orange', color: '#ea580c' },
  { name: 'pink', color: '#db2777' },
];

export default function ThemeColorPicker() {
  const [active, setActive] = useState('purple');

  useEffect(() => {
    const saved = localStorage.getItem('theme-color') || 'purple';
    document.documentElement.classList.add(`theme-${saved}`);
    setActive(saved);
  }, []);

  function changeTheme(name: string) {
    colors.forEach((c) =>
      document.documentElement.classList.remove(`theme-${c.name}`)
    );

    document.documentElement.classList.add(`theme-${name}`);

    localStorage.setItem('theme-color', name);

    setActive(name);
  }

  return (
    <div className="flex gap-3">
      {colors.map((item) => (
        <button
          key={item.name}
          onClick={() => changeTheme(item.name)}
          className={`h-8 w-8 rounded-full transition-all ${
            active === item.name
              ? 'scale-125 ring-2 ring-offset-2 ring-black dark:ring-white'
              : 'hover:scale-110'
          }`}
          style={{ background: item.color }}
        />
      ))}
    </div>
  );
}
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ColorFilter({
  value,
  onChange,
}: Props) {
  const t = useTranslations('Colors');

  const colors = [
    {
      id: 'blue',
      color: '#3B82F6',
      label: t('blue'),
    },
    {
      id: 'red',
      color: '#EF4444',
      label: t('red'),
    },
    {
      id: 'green',
      color: '#22C55E',
      label: t('green'),
    },
    {
      id: 'pink',
      color: '#EC4899',
      label: t('pink'),
    },
  ];

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      {colors.map((item) => (
        <button
          key={item.id}
          onClick={() => onChange(item.id)}
          className="group"
        >
          <div className="flex flex-col items-center gap-2">
            <motion.div
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: value === item.id ? 1.1 : 1,
              }}
              className={`
                w-14
                h-14
                rounded-full
                border-4
                transition-all
                duration-300
                shadow-lg
                ${
                  value === item.id
                    ? 'border-[rgb(93,87,81)]'
                    : 'border-transparent'
                }
              `}
              style={{
                backgroundColor: item.color,
              }}
            />

            <span
              className={`
                text-sm
                font-medium
                transition
                ${
                  value === item.id
                    ? 'text-[rgb(93,87,81)]'
                    : 'text-neutral-500'
                }
              `}
            >
              {item.label}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
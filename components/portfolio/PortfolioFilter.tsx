'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function PortfolioFilter({
  value,
  onChange,
}: Props) {
  const t = useTranslations('Portfolio');

  const categories = [
    {
      id: 'family',
      label: t('family'),
    },
    {
      id: 'lovestory',
      label: t('lovestory'),
    },
    {
      id: 'meeting',
      label: t('meeting'),
    },
    {
      id: 'individual',
      label: t('individual'),
    },
    {
      id: 'photoday',
      label: t('photoday'),
    },
    {
      id: 'national',
      label: t('national'),
    },
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 min-w-max md:min-w-0 md:flex-wrap justify-center">

        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className="relative"
          >
            {value === item.id && (
              <motion.div
                layoutId="activePortfolio"
                className="absolute inset-0 rounded-full bg-[rgb(93,87,81)]"
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}

            <span
              className={`
                relative
                z-10
                block
                px-6
                py-3
                rounded-full
                font-medium
                whitespace-nowrap
                transition-all
                duration-300
                ${
                  value === item.id
                    ? 'text-white'
                    : 'bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                }
              `}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
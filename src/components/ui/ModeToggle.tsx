import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

import { useTheme } from '@/hooks/useTheme';

const themes = [
  { value: 'light', label: 'header.modeToggle.light', icon: Sun },
  { value: 'dark', label: 'header.modeToggle.dark', icon: Moon },
  { value: 'system', label: 'header.modeToggle.system', icon: Sun },
] as const;

export const ModeToggle = () => {
  const { setTheme } = useTheme();
  const { t } = useTranslation('header');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t('modeToggle.heading')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map(({ value, label }) => (
          <DropdownMenuItem key={value} onClick={() => setTheme(value)}>
            {t(label)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

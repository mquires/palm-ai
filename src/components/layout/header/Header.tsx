import { useTranslation } from 'react-i18next';

import { ModeToggle } from '@/components/ui/ModeToggle';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

import { defaultLanguage } from '@/libs/i18n/i18n';

const languages = {
  ru: 'Русский',
  'en-US': 'English',
};

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <header className="flex h-full items-center gap-x-4 border-b border-border bg-card p-4 justify-end">
      <ModeToggle />
      <Select
        onValueChange={handleLanguageChange}
        defaultValue={i18n.language || defaultLanguage}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t('languagePlaceholder')} />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(languages).map(([code, name]) => (
            <SelectItem key={code} value={code}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </header>
  );
};

export default Header;

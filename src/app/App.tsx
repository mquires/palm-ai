import { useTranslation } from 'react-i18next';

import { ModeToggle } from '@/components/ui/ModeToggle';

import { Button } from '../components/ui/Button';

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="text-5xl text-center p-16">
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <ModeToggle />
      <Button onClick={() => i18n.changeLanguage('en')}>English</Button>
      <Button variant="secondary" onClick={() => i18n.changeLanguage('ru')}>
        Русский
      </Button>
    </div>
  );
};

export default App;

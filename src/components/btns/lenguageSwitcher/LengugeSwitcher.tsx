import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center h-6 rounded-full w-16 bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-gray-500 focus:ring-offset-2"
      aria-label={t('toggle')}
    >
      <span className="sr-only">{t('toggle')}</span>
      <span
        className={`
          absolute flex items-center justify-center w-8 h-6 rounded-full bg-white shadow transform transition-transform duration-300 
          ${i18n.language === 'en' ? 'left-0' : 'translate-x-full'}
        `}
      >
        <span className="font-medium text-xs">
          {i18n.language === 'en' ? 'EN' : 'ES'}
        </span>
      </span>
      <span className="absolute left-2 text-xs font-medium text-gray-700 opacity-60">
        EN
      </span>
      <span className="absolute right-[0.6rem] text-xs font-medium text-gray-700 opacity-60">
        ES
      </span>
    </button>
  );
};

export default LanguageSwitcher;
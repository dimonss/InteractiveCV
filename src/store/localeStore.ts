import { create } from 'zustand';

type Locale = 'en' | 'ru';

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  initLocale: () => void;
}

const detectUserLanguage = (): Locale => {
  const userLang = navigator.language || 'en';
  const shortLang = userLang.split('-')[0].toLowerCase();
  return shortLang === 'ru' ? 'ru' : 'en';
};

export const useLocaleStore = create<LocaleState>((set) => ({
  locale: 'en',
  setLocale: (locale) => {
    set({ locale });
    localStorage.setItem('cv-locale', locale);
  },
  initLocale: () => {
    const saved = localStorage.getItem('cv-locale') as Locale;
    if (saved && (saved === 'en' || saved === 'ru')) {
      set({ locale: saved });
    } else {
      const detected = detectUserLanguage();
      set({ locale: detected });
      localStorage.setItem('cv-locale', detected);
    }
  },
}));

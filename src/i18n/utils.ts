import { ui, defaultLang, type Lang } from './ui';

export type { Lang };
export { defaultLang };

type TranslationKey = keyof typeof ui[typeof defaultLang];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'fr' : 'en';
}

export function getAlternatePath(lang: Lang): string {
  return getLocalizedPath(getAlternateLang(lang));
}

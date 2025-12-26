import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
    const pathname = url.pathname;
    const parts = pathname.split('/');
    const potentialLang = parts[1];

    if (potentialLang && potentialLang in ui) {
        return parts.slice(2).join('/') || undefined;
    }
    return parts.slice(1).join('/') || undefined;
}

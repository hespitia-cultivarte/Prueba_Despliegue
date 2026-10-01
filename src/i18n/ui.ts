import es from './es.json';
import en from './en.json';
import fr from './fr.json';
import de from './de.json';

export const locales = ['es', 'en', 'fr', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

const dictionaries: Record<Locale, Record<string, string>> = { es, en, fr, de };

/** Nombre nativo de cada idioma, tal como debe verse en el propio selector. */
export const nombresLocale: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
};

/** Código de dos letras que muestra el selector de idioma (ES · EN · FR · DE). */
export const codigosLocale: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
  fr: 'FR',
  de: 'DE',
};

/**
 * Devuelve una función t(clave) cerrada sobre un idioma. Cadenas fijas y
 * contenido editorial: sin interpolación, sin plurales, sin sintaxis.
 * DESIGN.md §2 / plan §2.2 — deliberadamente sin librería.
 */
export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale] ?? dictionaries[defaultLocale];
  return function t(key: string): string {
    const value = dict[key];
    if (value === undefined) {
      // Nunca cae en silencio a otro idioma: un hueco de traducción se ve, no se esconde.
      return `[${key}]`;
    }
    return value;
  };
}

/** ES vive en `/`; los demás en `/en/` `/fr/` `/de/`. */
export function rutaLocalizada(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  if (locale === defaultLocale) {
    return `/${clean}`;
  }
  return `/${locale}/${clean}`;
}

/** Deriva el locale desde Astro.currentLocale, con el español como respaldo. */
export function resolverLocale(currentLocale: string | undefined): Locale {
  return (locales as readonly string[]).includes(currentLocale ?? '')
    ? (currentLocale as Locale)
    : defaultLocale;
}

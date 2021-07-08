import { i18n } from './next-i18next.config.js';
import common from './public/locales/en/common.json';
import footer from './public/locales/en/footer.json';

const resources = {
  en: {
    common,
    footer,
  },
} as const;

declare module 'next-i18next' {
  type DefaultResources = typeof resources.en;
  interface Resources extends DefaultResources {}
}

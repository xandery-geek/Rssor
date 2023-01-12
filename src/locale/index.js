import { createI18n } from 'vue-i18n'
import store from '@/store';

import en from './lang/en.js';
import zhCN from './lang/zh-CN.js';

const i18n = createI18n({
  locale: store.state.settings.lang,
  fallbackLocale: 'en',
  messages: {
    en,
    'zh-CN': zhCN,
  },
  silentTranslationWarn: true,
});

export default i18n;

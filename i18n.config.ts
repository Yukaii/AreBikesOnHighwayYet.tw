import en from './locales/en.json'
import zhTW from './locales/zh-TW.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    'zh-TW': zhTW,
  }
}))

import extractStringFromHTML from '../../../utils/extractStringFromHTML'
import normalizeString from '../../../utils/normalizeString'
import multilanglData from '../multiLangData'
import { TLanguage } from '../types'

const translateString = (string: string, lang: TLanguage | undefined) => {
  const multiLang = multilanglData.find((multiLang) =>
    Object.entries(multiLang).find(
      ([, translatedString]) =>
        extractStringFromHTML(
          normalizeString(translatedString as string, {
            toLowerCase: true,
          })
        ) ===
        extractStringFromHTML(normalizeString(string, { toLowerCase: true }))
    )
  )
  return multiLang && lang ? multiLang[lang] : string
}

export default translateString

import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'nie-nif-verifier-ru';
const title = 'Проверка NIE/NIF/CIF Испании: Валидатор налоговых номеров';
const description =
  'Бесплатный инструмент для проверки валидности NIF (DNI Испании), NIE (иностранцы) и CIF (компании) в Испании. Проверяет контрольную цифру и официальный формат.';

const faqData = [
  {
    question: 'Безопасно ли вводить мой NIF или NIE в этом инструменте?',
    answer:
      'Да, это абсолютно безопасно. Проверка выполняется полностью в вашем браузере с помощью JavaScript. Ваши данные никогда не отправляются на сервер и не хранятся в базах данных.',
  },
  {
    question: 'В чем разница между NIF и CIF?',
    answer:
      'NIF (Número de Identificación Fiscal) — это современный термин для всех налоговых идентификаторов. Однако CIF (Código de Identificación Fiscal) по-прежнему часто используется для обозначения NIF юридических лиц.',
  },
  {
    question: 'Как узнать, действителен ли NIF, если у меня нет буквы?',
    answer:
      'Введите 8 цифр в наш верификатор, и он покажет, какая буква должна быть. Алгоритм вычисляет букву, деля число на 23.',
  },
  {
    question: 'Работает ли этот инструмент для номеров NIE, начинающихся с Y или Z?',
    answer:
      'Да, наш верификатор поддерживает все форматы NIE: старые, начинающиеся с X, и новые на Y или Z, применяя официальную числовую конверсию.',
  },
  {
    question: 'Проверяет ли он, существует ли номер в налоговой базе?',
    answer:
      'Нет. Этот инструмент выполняет алгоритмическую и математическую проверку. Он подтверждает, что номер имеет правильную структуру, но не обращается к реальному реестру налоговой службы (Agencia Tributaria).',
  },
];

const howToData = [
  {
    name: 'Найдите идентификатор',
    text: 'Найдите код на документе (DNI, карта резидента или налоговая карточка).',
  },
  {
    name: 'Введите код',
    text: 'Введите NIF, NIE или CIF в поле. Пробелы и дефисы не имеют значения.',
  },
  {
    name: 'Проверьте результат',
    text: 'Инструмент мгновенно проанализирует структуру и контрольный символ.',
  },
  {
    name: 'Скопируйте результат',
    text: 'Если код верен, вы можете скопировать его для использования в документах или счетах.',
  },
];

const bibliography = [
  {
    name: 'Agencia Tributaria: NIF для физических и юридических лиц',
    url: 'https://sede.agenciatributaria.gob.es/Sede/procedimiento-recaudatorio-gestor/nif.html',
  },
  {
    name: 'МВД Испании: Структура DNI и NIE',
    url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_9._2.html?punto=5.2',
  },
  {
    name: 'BOE: Общие положения налогового администрирования',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-14406',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Введите испанский налоговый идентификатор',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: 'Валиден',
    msgInvalidControl: 'Неверная контрольная цифра',
    msgInvalidNIEControl: 'Ошибка контрольного символа',
    msgInvalidCIF: 'Неверная комбинация',
    msgIncomplete: 'Неполный',
  },
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Источники',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Важность проверки NIF, NIE и CIF в Испании',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'В административной и деловой экосистеме Испании налоговая идентификация является краеугольным камнем всех транзакций и контрактов. Будь вы фрилансером, выставляющим счета, или компанией, работающей с поставщиками, надежный <strong>верификатор NIF, NIE и CIF</strong> — незаменимый инструмент для предотвращения ошибок.',
    },
    {
      type: 'title',
      text: 'Что такое NIF, NIE и CIF? Ключевые различия',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF (Número de Identificación Fiscal):</strong> Общий термин для налогового номера. Для испанцев совпадает с DNI (8 цифр + буква).',
        '<strong>NIE (Número de Identidad de Extranjero):</strong> Идентификатор для иностранцев. Начинается на X, Y или Z, далее 7 цифр и буква.',
        '<strong>CIF (Código de Identificación Fiscal):</strong> Традиционное название NIF для компаний и юрлиц.',
      ],
    },
    {
      type: 'title',
      text: 'Советы по проверке',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Если верификатор выдает ошибку, проверьте, не перепутали ли вы 0 (ноль) с буквой O — это частая ошибка в NIE.',
        'Для CIF всегда указывайте начальную букву (например, A для S.A., B для S.L.).',
        'Инструмент проверяет математическую валидность, а не активность номера в реестрах.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Конфиденциальность гарантирована:</strong> Проверка происходит только в вашем браузере. Введенные номера никуда не передаются.',
    },
  ],
};

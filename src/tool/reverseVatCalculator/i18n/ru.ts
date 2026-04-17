import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'kalkulyator-nds-obratno-ispaniya';
const title = 'Калькулятор НДС от обратного: Рассчитать базу (Испания)';
const description =
  'Онлайн-калькулятор обратного НДС (IVA). Выделите НДС из любой общей суммы, чтобы получить налогооблагаемую базу. Незаменимый инструмент для фрилансеров в Испании.';

const faqData = [
  {
    question: 'Что такое обратный НДС или выделение НДС?',
    answer:
      'Это процесс расчета налогооблагаемой базы (суммы без налога) из общей цены, которая уже включает налог. Это важно для фрилансеров, которым нужно выставить счет на основе согласованной итоговой цены.',
  },
  {
    question: 'Как рассчитать обратный НДС вручную?',
    answer:
      'При ставке НДС 21% разделите общую сумму на 1,21. Результат — налогооблагаемая база. Разница между общей суммой и базой составляет сумму НДС.',
  },
  {
    question: 'Какие типы НДС существуют в Испании?',
    answer:
      'Существует три типа: Общий (21%), Льготный (10% для продуктов питания, здравоохранения, жилья) и Сверхльготный (4% для продуктов первой необходимости, книг).',
  },
  {
    question: 'Когда обязательно выделять НДС?',
    answer:
      'Всегда при выставлении профессионального или упрощенного счета. Вы должны отдельно указать базу, применяемую налоговую ставку и общую сумму НДС.',
  },
];

const howToData = [
  {
    name: 'Введите общую сумму',
    text: 'Введите итоговую сумму с учетом НДС, которую вы хотите разбить.',
  },
  {
    name: 'Выберите ставку НДС',
    text: 'Выберите 21%, 10% или 4% в зависимости от категории вашего товара или услуги.',
  },
  {
    name: 'Получите налогооблагаемую базу',
    text: 'Ознакомьтесь с автоматическим расчетом, показывающим чистую сумму до налогов.',
  },
  {
    name: 'Скопируйте данные для чека',
    text: 'Используйте рассчитанные значения для заполнения полей базы и НДС в вашей программе для счетов.',
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

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: 'Общая сумма (с НДС)',
    labelVatType: 'Ставка НДС',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: 'Налогооблагаемая база (Netto)',
    labelVat: 'Сумма НДС',
  },
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Источники',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Проблема расчета НДС от обратного',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Самая распространенная ошибка — думать, что для удаления 21% НДС достаточно вычесть 21% из общей суммы. <strong>Это неверно!</strong> Если вы так сделаете, вы будете терять деньги в каждом налоговом периоде.',
    },
    {
      type: 'title',
      text: 'Математическое объяснение',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'НДС начисляется <strong>сверху</strong> на базу. Таким образом, итоговая цена составляет 121% от базы (при ставке 21%). Чтобы вернуться к базе, мы <strong>делим</strong>: <code>База = Итого / 1,21</code>.',
    },
    {
      type: 'code',
      code: 'Налогооблагаемая база = Общая сумма / (1 + Ставка НДС)\nСумма НДС = Общая сумма - База',
    },
  ],
};

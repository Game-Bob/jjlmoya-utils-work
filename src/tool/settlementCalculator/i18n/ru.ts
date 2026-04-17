import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'raschet-pri-uvolnenii-ispaniya';
const title = 'Калькулятор расчета при увольнении в Испании 2026';
const description =
  'Рассчитайте итоговый расчет (finiquito) пошагово: неиспользованный отпуск, пропорциональные премии и компенсация за увольнение согласно испанскому законодательству.';

const faqData = [
  {
    question: 'Полагается ли мне расчет при увольнении по собственному желанию?',
    answer:
      'Да, безусловно. Расчет (finiquito) включает уже начисленные суммы: отработанные дни в текущем месяце, неиспользованные дни отпуска и пропорциональную часть дополнительных выплат. Но вы не будете иметь права на компенсацию за увольнение или пособие по безработице.',
  },
  {
    question: 'Какая компенсация полагается за незаконное увольнение?',
    answer:
      'Для контрактов, подписанных после 12 февраля 2012 года, компенсация составляет 33 дня зарплаты за каждый отработанный год, но не более 24 месячных зарплат.',
  },
  {
    question: 'Может ли работодатель удержать деньги из расчета за отсутствие уведомления?',
    answer:
      'Да. Если ваш контракт требует уведомления (обычно за 15 дней) и вы его не соблюдаете, компания имеет право вычесть из вашего расчета зарплату за пропущенные дни уведомления.',
  },
  {
    question: 'Что происходит с отпускными и взносами в социальное страхование в расчете?',
    answer:
      'При выплате за неиспользованный отпуск компания должна продолжать отчислять взносы в Social Security за эти дни. В этот период вы еще не можете начать получать пособие по безработице.',
  },
];

const howToData = [
  {
    name: 'Введите зарплату брутто',
    text: 'Укажите вашу годовую зарплату до вычета налогов и выберите количество выплат в год.',
  },
  {
    name: 'Установите даты',
    text: 'Введите точную дату начала работы в компании и предполагаемый последний рабочий день.',
  },
  {
    name: 'Добавьте неиспользованный отпуск',
    text: 'Укажите, сколько дней отпуска у вас осталось в текущем году.',
  },
  {
    name: 'Выберите причину увольнения',
    text: 'Выберите причину завершения работы, чтобы симулятор применил правильный коэффициент компенсации.',
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

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: 'Годовая зарплата (брутто)',
    labelExtraPayments: 'Количество выплат в год',
    labelStartDate: 'Дата начала работы',
    labelEndDate: 'Дата окончания',
    labelVacationDays: 'Неиспользованный отпуск',
    labelDepartureReason: 'Причина увольнения',
    opt12pays: '12 выплат (пропорционально)',
    opt14pays: '14 выплат (стандарт)',
    optImprocedente: 'Незаконное увольнение (33 дня)',
    optObjetivo: 'Объективное увольнение (20 дней)',
    optTemporal: 'Окончание временного контракта (12 дней)',
    optVoluntaria: 'По собственному желанию (без компенсации)',
    labelTotal: 'Ориентировочная сумма расчета',
    labelSeverance: 'Компенсация за увольнение',
    labelVacation: 'Неиспользованный отпуск',
    labelExtras: 'Пропорциональные бонусы',
    labelMonthSalary: 'Месячная зарплата',
    disclaimer:
      'Примечание: Это приблизительный расчет на основе испанского законодательства. Итоговая сумма может зависеть от коллективного договора и налогов.',
    btnCopy: 'Копировать итог',
    copySuccess: 'Скопировано',
    copySummaryTitle: 'Сводка оценки расчета',
    defaultSalary: '24000',
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
      text: 'Руководство по расчету при увольнении в Испании',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Понимание того, какие выплаты вам полагаются при завершении трудового контракта в Испании, необходимо для защиты ваших прав.',
    },
  ],
};

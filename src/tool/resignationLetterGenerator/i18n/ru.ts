import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'resignation-letter-generator-ru';
const title = 'Генератор профессионального заявления об увольнении';
const description =
  'Создайте персональное заявление об увольнении за считанные секунды. Профессиональные шаблоны готовы к копированию или загрузке в PDF.';

const faqData = [
  {
    question: 'За сколько дней я должен предупредить об увольнении?',
    answer:
      'По общему правилу (ТК РФ), работник должен предупредить работодателя об увольнении не позднее чем за две недели. В период испытательного срока этот срок сокращается до 3 дней.',
  },
  {
    question: 'Имею ли я право на выплаты при увольнении по собственному желанию?',
    answer:
      'Да. В последний рабочий день работодатель обязан выплатить заработную плату за отработанное время и компенсацию за все неиспользованные дни отпуска.',
  },
  {
    question: 'Можно ли отозвать заявление об увольнении?',
    answer:
      'Да, работник имеет право отозвать свое заявление в любое время до истечения срока предупреждения, если на его место в письменной форме не приглашен другой работник в порядке перевода.',
  },
  {
    question: 'Обязательно ли писать заявление от руки?',
    answer:
      'Заявление может быть как написано от руки, так и напечатано на компьютере. Главное — наличие вашей живой подписи на бумажном носителе.',
  },
];

const howToData = [
  {
    name: 'Заполните личные данные',
    text: 'Введите ваше имя, имя руководителя (или представителя HR) и название компании.',
  },
  {
    name: 'Укажите дату увольнения',
    text: 'Выберите ваш последний рабочий день, учитывая срок отработки согласно законодательству.',
  },
  {
    name: 'Выберите причину',
    text: 'Выберите подход, который лучше всего соответствует вашей ситуации, для настройки текста.',
  },
  {
    name: 'Скопируйте или скачайте',
    text: 'Нажмите кнопку, чтобы скопировать текст в буфер обмена или сохранить как PDF.',
  },
];

const bibliography = [
  {
    name: 'Трудовой кодекс РФ - Глава 13',
    url: 'https://www.consultant.ru',
  },
  {
    name: 'Роструд - Разъяснения по увольнению',
    url: 'https://rostrud.gov.ru',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'Ваше полное имя',
    labelManagerName: 'Имя руководителя или HR',
    labelManagerGender: 'Обращение',
    labelCompanyName: 'Название компании',
    labelLastDay: 'Последний рабочий день',
    labelReasonType: 'Тип причины',
    labelCity: 'Город',
    optGenderNeutral: 'Уважаемый(ая) (Нейтрально)',
    optGenderM: 'Уважаемый (Мужчина)',
    optGenderF: 'Уважаемая (Женщина)',
    optReasonStandard: 'Стандартный (Профессиональный)',
    optReasonOpportunity: 'Новая возможность развития',
    optReasonPersonal: 'Личные обстоятельства',
    optReasonEducation: 'Учеба / Обучение',
    optReasonGrowth: 'Отсутствие карьерного роста',
    optReasonDirect: 'Прямой и краткий (Без объяснения)',
    btnCopy: 'Копировать текст',
    btnDownload: 'Скачать PDF',
    copyFeedback: 'Скопировано в буфер обмена',
    defaultUserName: 'Иван Иванов',
    defaultManagerName: 'Петр Петров',
    defaultCompanyName: 'ООО "Пример"',
    defaultCity: 'Москва',
    dateLocale: 'ru-RU',
    datePrefix: '',
    managerPrefix: 'Кому:',
    managerFallback: 'Отдел кадров',
    companyFallback: 'Компания',
    salutationNeutral: 'Уважаемый(ая)',
    salutationM: 'Уважаемый',
    salutationF: 'Уважаемая',
    salutationFallback: 'Руководитель',
    signatureFallback: 'Подпись сотрудника',
    thanksParagraph:
      'Я искренне благодарен за возможности профессионального и личностного роста, предоставленные мне за время работы в компании.',
    transitionParagraph:
      'Я готов оказать поддержку в передаче моих обязанностей и текущих задач, чтобы обеспечить плавный переходный период.',
    closingWord: 'С уважением,',
    reasonStandard:
      'Настоящим уведомляю вас о моем решении уволиться с занимаемой должности по собственному желанию. Моим последним рабочим днем будет [DATE].',
    reasonOpportunity:
      'Сообщаю вам о своем увольнении в связи с принятием нового предложения о работе. Моя работа в компании завершится [DATE].',
    reasonPersonal:
      'В связи с личными обстоятельствами я вынужден подать заявление об увольнении. Последний рабочий день — [DATE].',
    reasonEducation:
      'Я принял решение продолжить обучение и в связи с этим увольняюсь по собственному желанию. Последний день работы — [DATE].',
    reasonGrowth:
      'После раздумий я решил сменить место работы для развития навыков в других областях. Дата моего увольнения — [DATE].',
    reasonDirect:
      'Уведомляю вас об окончании моей трудовой деятельности в компании. Последний рабочий день — [DATE].',
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
      text: 'Как правильно написать заявление об увольнении',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Увольнение — это важный этап карьеры. Заявление об увольнении является юридически значимым документом и формирует ваш финальный имидж в компании.',
    },
    {
      type: 'tip',
      html: '<strong>Совет:</strong> Всегда подавайте заявление в письменном виде. Это фиксирует дату начала срока предупреждения и защищает ваши права.',
    },
    {
      type: 'code',
      code: 'Директору ООО "Компания"\nИванову П.П.\nот менеджера Петрова А.А.\n\nЗаявление\n\nПрошу уволить меня по собственному желанию [Дата].\n\n[Подпись]\n[Дата подачи]',
    },
  ],
};

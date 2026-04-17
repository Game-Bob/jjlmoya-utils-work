import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'kalkulator-odprawy-hiszpania';
const title = 'Kalkulator Odprawy i Rozliczenia Hiszpania 2026';
const description =
  'Oblicz swoje rozliczenie (finiquito) krok po kroku: niewykorzystany urlop, proporcjonalne premie i odprawa zgodnie z hiszpańskim prawem pracy.';

const faqData = [
  {
    question: 'Czy po dobrowolnym wypowiedzeniu umowy przysługuje mi rozliczenie?',
    answer:
      'Tak, jak najbardziej. Rozliczenie (finiquito) obejmuje kwoty już wypracowane, takie jak dni przepracowane w bieżącym miesiącu, niewykorzystany urlop oraz proporcjonalną część premii (pagi). Nie przysługuje jednak odprawa (indemnización) ani zasiłek dla bezrobotnych.',
  },
  {
    question: 'Jaka odprawa należy mi się za nieuzasadnione zwolnienie?',
    answer:
      'Dla umów podpisanych po 12 lutego 2012 r. odprawa wynosi 33 dni wynagrodzenia za każdy rok pracy, do maksymalnie 24 miesięcznych pensji.',
  },
  {
    question: 'Czy pracodawca może potrącić pieniądze za brak okresu wypowiedzenia?',
    answer:
      'Tak. Jeśli umowa przewiduje okres wypowiedzenia (zazwyczaj 15 dni), a pracownik go nie dochowa, firma ma prawo potrącić z rozliczenia kwotę odpowiadającą dniom brakującego wypowiedzenia.',
  },
  {
    question: 'Co dzieje się ze składkami przy wypłacie za urlop w rozliczeniu?',
    answer:
      'W przypadku wypłaty ekwiwalentu za niewykorzystany urlop, firma musi kontynuować opłacanie składek na ubezpieczenie społeczne za te dni. W tym okresie nie można zacząć pobierać zasiłku dla bezrobotnych.',
  },
];

const howToData = [
  {
    name: 'Wpisz wynagrodzenie brutto',
    text: 'Wpisz swoje roczne wynagrodzenie brutto i wybierz liczbę wypłat w roku (12 lub 14).',
  },
  {
    name: 'Ustal daty',
    text: 'Wpisz dokładną datę rozpoczęcia pracy w firmie oraz planowany ostatni dzień pracy.',
  },
  {
    name: 'Dodaj niewykorzystany urlop',
    text: 'Określ, ile dni urlopu pozostało Ci do wykorzystania w bieżącym roku.',
  },
  {
    name: 'Wybierz powód odejścia',
    text: 'Wybierz przyczynę zakończenia umowy, aby symulator zastosował odpowiedni przelicznik odprawy.',
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: 'Roczne Wynagrodzenie Brutto',
    labelExtraPayments: 'Liczba wypłat w roku',
    labelStartDate: 'Data rozpoczęcia',
    labelEndDate: 'Data zakończenia',
    labelVacationDays: 'Niewykorzystany urlop (dni)',
    labelDepartureReason: 'Powód odejścia',
    opt12pays: '12 wypłat (Wliczone premie)',
    opt14pays: '14 wypłat (Standard)',
    optImprocedente: 'Zwolnienie Nieuzasadnione (33 dni)',
    optObjetivo: 'Zwolnienie Obiektywne (20 dni)',
    optTemporal: 'Koniec Umowy Czasowej (12 dni)',
    optVoluntaria: 'Wypowiedzenie Dobrowolne (Brak odprawy)',
    labelTotal: 'Szacowana Kwota Rozliczenia',
    labelSeverance: 'Odprawa',
    labelVacation: 'Ekwiwalent za urlop',
    labelExtras: 'Proporcjonalne płatności dodatkowe',
    labelMonthSalary: 'Wynagrodzenie miesięczne',
    disclaimer:
      'Uwaga: Jest to szacunek brutto oparty na hiszpańskim prawie pracy. Kwota końcowa może się różnić w zależności od składek i podatków.',
    btnCopy: 'Skopiuj Podsumowanie',
    copySuccess: 'Skopiowano',
    copySummaryTitle: 'Podsumowanie Szacowanego Rozliczenia',
    defaultSalary: '24000',
  },
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Przewodnik po Odprawach i Finiquito w Hiszpanii',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zrozumienie, jakie kwoty należą Ci się przy zakończeniu umowy o pracę w Hiszpanii, jest kluczowe dla ochrony Twoich praw.',
    },
    {
      type: 'title',
      text: 'Różnica między Finiquito a Indemnización',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finiquito:</strong> Rozliczenie zaległych kwot (urlop, dni pracy, premie proporcjonalne). Przysługuje zawsze.',
        '<strong>Indemnización:</strong> Odszkodowanie płacone przez firmę w przypadku zwolnienia. Nie przysługuje przy rezygnacji pracownika.',
      ],
    },
  ],
};

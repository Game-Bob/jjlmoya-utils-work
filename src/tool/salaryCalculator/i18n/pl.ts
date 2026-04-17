import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'kalkulator-wynagrodzenia-hiszpania';
const title = 'Kalkulator Wynagrodzenia Hiszpania: Symulator Wynagrodzenia Netto IRPF i Ubezpieczenie Społeczne';
const description =
  'Dowiedz się, ile faktycznie zarobisz każdego miesiąca. Dokładne obliczenia zaliczek, podstawy opodatkowania i dochodu netto zgodnie z hiszpańskimi przepisami.';

const faqData = [
  {
    question: 'Jak oblicza się wynagrodzenie netto w Hiszpanii?',
    answer:
      'Wynagrodzenie netto oblicza się, odejmując od kwoty brutto zaliczki na podatek IRPF (zgodnie z progami) oraz składki na ubezpieczenie społeczne (około 6,35% kwoty brutto). Procent IRPF zmienia się w zależności od sytuacji osobistej i poziomu zarobków.',
  },
  {
    question: 'Jaka jest różnica między 12 a 14 wypłatami?',
    answer:
      'Przy 12 wypłatach premie są rozliczane co miesiąc. Przy 14 wypłatach otrzymujesz dwie dodatkowe wypłaty (zazwyczaj w czerwcu/lipcu i w grudniu). Roczna kwota brutto jest taka sama, zmienia się tylko rozkład wypłat.',
  },
  {
    question: 'Dlaczego mój pasek wynagrodzenia nie zgadza się dokładnie z kalkulatorem?',
    answer:
      'Ten kalkulator używa standardowych wartości przybliżonych. Twój rzeczywisty pasek może się różnić ze względu na: potrącenia specyficzne dla firmy, benefity, dzieci na utrzymaniu, niepełnosprawność lub sytuacje osobiste wpływające na IRPF.',
  },
  {
    question: 'Jaki procent moich zarobków zabiera Fiskus?',
    answer:
      'To zależy od wynagrodzenia. Ogólnie, między IRPF a ubezpieczeniem społecznym, potrącane jest od 25% do 45% kwoty brutto. Im wyższa pensja, tym wyższy procent potrąceń ze względu na progresywny system IRPF.',
  },
  {
    question: 'Czym jest IRPF?',
    answer:
      'To podatek dochodowy od osób fizycznych. Jest to podatek progresywny: ci, którzy zarabiają więcej, płacą wyższy procent od wyższych progów swoich zarobków.',
  },
];

const howToData = [
  {
    name: 'Wpisz roczne wynagrodzenie brutto',
    text: 'Wpisz całkowitą kwotę ustaloną w umowie przed podatkami i potrąceniami.',
  },
  {
    name: 'Ustaw sytuację rodzinną',
    text: 'Wskaż, czy masz dzieci lub osoby na utrzymaniu, ponieważ zmniejsza to procent stosowanego IRPF.',
  },
  {
    name: 'Liczba wypłat',
    text: 'Wybierz, czy otrzymujesz wynagrodzenie w 12 wypłatach (premie rozliczone co miesiąc) czy w 14 wypłatach.',
  },
  {
    name: 'Sprawdź miesięczne zestawienie',
    text: 'Zobacz, ile trafia na ubezpieczenie społeczne, IRPF i jakie jest dokładne wynagrodzenie netto, które trafi na Twoje konto.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: 'Roczne Wynagrodzenie Brutto',
    labelPays: 'Liczba Wypłat',
    btn12: '12 Wypłat',
    btn14: '14 Wypłat',
    labelAge: 'Wiek',
    labelContract: 'Rodzaj Umowy',
    optIndefinite: 'Na czas nieokreślony / Ogólna',
    optTemporal: 'Tymczasowa',
    btnCalculate: 'Oblicz Wynagrodzenie Netto',
    labelNetMonthly: 'Miesięczne Wynagrodzenie Netto',
    labelNetAnnual: 'Roczne Wynagrodzenie Netto',
    labelPaysDisplay: 'Wypłaty',
    labelBreakdown: 'Rozbicie potrąceń (Szacunkowe)',
    labelIRPF: 'IRPF',
    labelSS: 'Ubezpieczenie Społeczne',
    disclaimer:
      '*Uproszczone obliczenia dla pracownika stanu wolnego, bez dzieci i poniżej 65 roku życia.',
  },
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Gdzie znika moje wynagrodzenie brutto?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To najczęstsze zaskoczenie w pierwszej pracy: podpisujesz umowę na 24 000 € rocznie, dzielisz przez 12 spodziewając się 2 000 € miesięcznie, a na koncie znajdujesz 1 600 €. Gdzie jest pozostałe 400 €?',
    },
    {
      type: 'paragraph',
      html: 'W Hiszpanii różnica między kwotą <strong>Brutto</strong> (którą płaci firma) a <strong>Netto</strong> (którą otrzymujesz) dzieli się na dwie główne pozycje: IRPF i ubezpieczenie społeczne. Zrozumienie ich jest kluczem do negocjowania podwyżek.',
    },
    {
      type: 'title',
      text: 'Ubezpieczenie Społeczne: ~6,35%, które finansuje Twoją przyszłość',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jest to stała składka dla prawie wszystkich pracowników. Nie zależy od tego, czy jesteś singlem, czy masz żonę/męża. Z tych pieniędzy finansujesz:',
    },
    {
      type: 'list',
      items: [
        '<strong>Zdarzenia ogólne (4,70%)</strong>: Pokrywa nieobecności z powodu zwykłej choroby, wypadków poza pracą, emerytury i macierzyństwa.',
        '<strong>Bezrobocie (1,55% lub 1,60%)</strong>: Twoja składka na wypadek utraty pracy. Różni się nieznacznie, jeśli umowa jest tymczasowa.',
        '<strong>Szkolenia zawodowe (0,10%)</strong>: Na dofinansowane kursy szkoleniowe i przekwalifikowanie.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF: Podatek, który boli najbardziej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jest on progresywny i może wynosić od 2% do 47% w zależności od zarobków i sytuacji osobistej. Nie jest to stały podatek; to zaliczka płacona fiskusowi. Firma oblicza, ile podatku powinieneś zapłacić w przyszłym roku i potrąca go miesiąc po miesiącu.',
    },
    {
      type: 'title',
      text: 'Czynniki obniżające Twój IRPF',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Posiadanie dzieci (szczególnie poniżej 3 roku życia).',
        'Posiadanie uznanej niepełnosprawności (>33%).',
        'Posiadanie małżonka na utrzymaniu o niskich dochodach.',
      ],
    },
    {
      type: 'title',
      text: 'Państwowe progi IRPF (Szac. 2026)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '0 € - 12 450 €: 19%',
        '12 450 € - 20 200 €: 24%',
        '20 200 € - 35 200 €: 30%',
        '35 200 € - 60 000 €: 37%',
        '> 60 000 €: 45%',
      ],
    },
    {
      type: 'title',
      text: 'Wieczne pytanie: 12 czy 14 wypłat?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wielu pracowników woli 14 wypłat ze względu na dodatkowe pieniądze latem i na Boże Narodzenie. Inni wolą (lub firma narzuca) rozłożenie pensji na 12 miesięcy. Matematycznie zarabiasz dokładnie tyle samo rocznie.',
    },
    {
      type: 'list',
      items: [
        '<strong>12 WYPŁAT</strong>: Co miesiąc zarabiasz więcej, ale nie masz premii. Lepiej dla stałej miesięcznej płynności finansowej.',
        '<strong>14 WYPŁAT</strong>: Co miesiąc zarabiasz nieco mniej, ale otrzymujesz dwie podwójne wypłaty w roku. Działa to jak „wymuszone oszczędzanie”.',
      ],
    },
  ],
};

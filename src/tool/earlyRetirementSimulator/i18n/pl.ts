import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'symulator-wczesniejszej-emerytury-hiszpania';
const title = 'Symulator Wcześniejszej Emerytury Hiszpania: Oblicz Swoją Emeryturę';
const description =
  'Oblicz bezpłatnie swój wiek emerytalny, współczynniki redukcji i szacowaną emeryturę. Zaktualizowany symulator dla dobrowolnej i niedobrowolnej wcześniejszej emerytury w Hiszpanii.';

const faqData = [
  {
    question: 'Jaki jest minimalny wiek uprawniający do wcześniejszej emerytury w Hiszpanii?',
    answer:
      'W przypadku dobrowolnej wcześniejszej emerytury minimalny wiek to 2 lata przed ustawowym wiekiem emerytalnym (zazwyczaj 63 lub 65 lat, w zależności od składek). W przypadku emerytury niedobrowolnej jest to do 4 lat wcześniej (61 lub 63 lata).',
  },
  {
    question: 'Ile lat opłacania składek potrzebuję?',
    answer:
      'W przypadku dobrowolnej wcześniejszej emerytury wymagane jest co najmniej 35 lat efektywnego opłacania składek. W przypadku emerytury niedobrowolnej lub wymuszonej minimum to 33 lata.',
  },
  {
    question: 'Ile stracę, przechodząc na wcześniejszą emeryturę?',
    answer:
      'Redukcja zależy od liczby miesięcy przyspieszenia oraz całkowitej liczby lat opłacania składek. Obniżki wynoszą od 2,81% za jeden miesiąc do maksymalnie około 21% w przypadku pełnego 2-letniego dobrowolnego przyspieszenia.',
  },
  {
    question: 'Czy czas przebywania na bezrobociu liczy się do emerytury?',
    answer:
      'Tak, czas pobierania zasiłku dla bezrobotnych (paro) liczy się do emerytury, ponieważ SEPE odprowadza odpowiednie składki do Zakładu Ubezpieczeń Społecznych.',
  },
];

const howToData = [
  {
    name: 'Wpisz swój rok urodzenia',
    text: 'To określa Twój ustawowy zwykły wiek emerytalny zgodnie z przepisami obowiązującymi w 2026 roku.',
  },
  {
    name: 'Oszacuj swoje lata składkowe',
    text: 'Uwzględnij czas zatrudnienia, samozatrudnienia oraz okresy składkowego bezrobocia.',
  },
  {
    name: 'Wybierz rodzaj emerytury',
    text: 'Wskaż, czy emerytura jest dobrowolna czy wymuszona, aby zastosować poprawne współczynniki.',
  },
  {
    name: 'Sprawdź swoją szacowaną emeryturę',
    text: 'Zobacz zastosowaną redukcję i dokładną datę, kiedy możesz przestać pracować.',
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

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: 'Rok Urodzenia',
    labelContributions: 'Lata Składkowe',
    labelBasePension: 'Podstawa Miesięczna Brutto',
    labelRetirementAge: 'Wiek Emerytalny',
    labelExpectedDate: 'Przewidywana Data',
    labelEstimatedPension: 'Szacowana Emerytura',
    labelPermanentReduction: 'Trwała Redukcja',
    labelYears: 'LATA',
    btnLegalTitle: 'Standardowa',
    btnLegalDesc: 'Ustawowy wiek emerytalny. Brak redukcji. 100% podstawy.',
    btnVoluntaryTitle: 'Dobrowolna Wcześniejsza',
    btnVoluntaryDesc: 'Emerytura z wyboru osobistego. Zastosowano miesięczną redukcję.',
    btnInvoluntaryTitle: 'Niedobrowolna / ERE',
    btnInvoluntaryDesc: 'Wymuszone rozwiązanie umowy. Korzystniejsze współczynniki.',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: 'Przesuń suwak, aby zaprognozować swój harmonogram emerytalny.',
    adviceDefaultWithParams: 'Przesuń suwak, aby zaprognozować swój harmonogram emerytalny.',
    adviceDelay:
      'Jeśli opóźnisz przejście na emeryturę do wieku <strong>[AGE]</strong> lat, zyskasz około <strong>[GAIN] € dodatkowo</strong> miesięcznie.',
    adviceBonus: 'Gromadzisz premię za opóźnienie. Twoja emerytura przekroczy 100% podstawy.',
    adviceOptimal: 'Osiągnąłeś optymalny standardowy wiek z 100% Twoich uprawnień.',
  },
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData: 'Źródła',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Symulator Wcześniejszej Emerytury w Hiszpanii: Przewodnik 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Wcześniejsza emerytura</strong> to jedna z największych obaw finansowych pracowników w Hiszpanii. Zrozumienie, kiedy można przestać pracować, a przede wszystkim, ile pieniędzy straci się poprzez współczynniki redukcji, jest kluczowe dla zdrowego planowania życia.',
    },
    {
      type: 'list',
      items: [
        '<strong>Standardowy wiek ustawowy:</strong> 67 lat (lub 65 lat przy wystarczających składkach).',
        '<strong>Dobrowolna Wcześniejsza Emerytura:</strong> Do 2 lat przed limitem ustawowym.',
        '<strong>Niedobrowolna Wcześniejsza Emerytura:</strong> Do 4 lat wcześniej (z powodu zwolnień lub innych przyczyn).',
        '<strong>Współczynniki Redukcji:</strong> Trwałe miesięczne obniżki emerytury.',
        '<strong>Wymóg składkowy:</strong> Minimum 35 lat dla emerytury dobrowolnej, 33 lata dla wymuszonej.',
      ],
    },
    {
      type: 'title',
      text: 'W jakim wieku mogę legalnie przejść na emeryturę w Hiszpanii?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Ścieżka 65 lat:</strong> Jeśli opłacałeś składki przez ponad 38 lat i 6 miesięcy, możesz przejść na emeryturę w wieku 65 lat z 100% swojej podstawy.',
        '<strong>Ścieżka 67 lat:</strong> Jeśli Twoje składki są poniżej tego progu, Twój standardowy wiek to 67 lat.',
        '<strong>Służba wojskowa:</strong> Obowiązkowa służba wojskowa lub służba społeczna może dodać do 1 roku składek.',
      ],
    },
    {
      type: 'title',
      text: 'Dobrowolna Wcześniejsza Emerytura',
      level: 2,
    },
    {
      type: 'card',
      title: 'Wymagania dla Dobrowolnej Wcześniejszej Emerytury',
      html: '<ul><li>Bycie w wieku o dwa lata niższym niż standardowy wiek ustawowy.</li><li>Posiadanie minimalnego efektywnego okresu składkowego wynoszącego 35 lat.</li><li>Emerytura do otrzymania musi przekraczać emeryturę minimalną.</li></ul>',
    },
    {
      type: 'title',
      text: 'Współczynniki Redukcji: Koszt Wcześniejszego Przejścia na Emeryturę',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Poniżej 38,5 lat składkowych:</strong> Maksymalna redukcja 21% (2 lata przyspieszenia).',
        '<strong>Między 38,5 a 41,5 lat:</strong> Maksymalna redukcja około 19%.',
        '<strong>Między 41,5 a 44,5 lat:</strong> Maksymalna redukcja około 17%.',
        '<strong>Powyżej 44,5 lat:</strong> Maksymalna redukcja około 15%.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Złota rada:</strong> Opóźnienie wcześniejszej emerytury o zaledwie jeden miesiąc może przynieść znaczącą różnicę we współczynniku redukcji. Zawsze obliczaj korzyść z poczekania kilku dodatkowych dni, jeśli jesteś blisko granicy miesięcznego progu.',
    },
    {
      type: 'title',
      text: 'Niedobrowolna lub Wymuszona Wcześniejsza Emerytura',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Maksymalne przyspieszenie:</strong> 4 lata (48 miesięcy) przed wiekiem standardowym.',
        '<strong>Wymagane składki:</strong> 33 lata.',
        '<strong>Warunek:</strong> Należy być zarejestrowanym jako osoba poszukująca pracy przez co najmniej 6 miesięcy wcześniej.',
        '<strong>Współczynniki:</strong> Korzystniejsze niż dobrowolne, ale wpływ 4 lat jest nadal dotkliwy.',
      ],
    },
    {
      type: 'card',
      title: 'Przykład praktyczny',
      html: '<p>Pracownik z podstawą 2 000 €, który przechodzi na emeryturę dobrowolnie 2 lata wcześniej z 36-letnim stażem składkowym. Jego redukcja wyniesie około 21%, co pozostawi emeryturę na poziomie około <strong>1 580 € miesięcznie</strong> do końca życia.</p>',
    },
  ],
};

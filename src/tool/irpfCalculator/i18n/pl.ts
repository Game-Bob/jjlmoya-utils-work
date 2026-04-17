import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'kalkulator-irpf-hiszpania';
const title = 'Kalkulator IRPF 2026: Symulator Wynagrodzenia Netto Hiszpania';
const description =
  'Oblicz swoje miesięczne i roczne wynagrodzenie netto na rok 2026 w Hiszpanii. Zaktualizowany symulator uwzględniający skale państwowe, regionalne, MEI oraz sytuację rodzinną.';

const faqData = [
  {
    question: 'Jak MEI wpływa na moje wynagrodzenie netto w 2026 roku?',
    answer:
      'Mechanizm Solidarności Międzypokoleniowej (MEI) wzrasta do 0,90% w 2026 roku, aby zapewnić stabilność emerytur. Większość pokrywa pracodawca, ale pracownicy odczują spadek wynagrodzenia netto o odpowiedni procent ich składki.',
  },
  {
    question: 'Dlaczego moje wynagrodzenie netto jest inne w Madrycie niż w Katalonii?',
    answer:
      'IRPF to podatek w 50% przekazany Wspólnotom Autonomicznym. Madryt stosuje niższe progi niż skala państwowa, podczas gdy Katalonia posiada własną skalę, która może zwiększyć początkową zaliczkę na podatek.',
  },
  {
    question: 'Co to jest stawka marginalna i jak mnie ona dotyczy?',
    answer:
      'Stawka marginalna to procent podatku nałożony na ostatnie euro Twojego zarobku. Pokazuje, ile faktycznie kosztuje Cię podwyżka lub premia pod względem podatkowym.',
  },
  {
    question: 'Ile wypłat w roku powinienem wybrać do obliczeń miesięcznych?',
    answer:
      'Zazwyczaj otrzymuje się 12 lub 14 wypłat (z dodatkowymi wypłatami latem i na Boże Narodzenie). Wybierz opcję, którą stosuje Twoja firma, aby poznać swoje rzeczywiste miesięczne dochody netto.',
  },
  {
    question: 'Czy ten kalkulator jest rzetelny dla mojego rozliczenia podatkowego?',
    answer:
      'To narzędzie zapewnia szacunek oparty na przepisach na rok 2026. Miesięczna zaliczka jest przybliżeniem; rzeczywisty wynik końcowy jest ustalany podczas składania deklaracji podatkowej w czerwcu.',
  },
];

const howToData = [
  {
    name: 'Wpisz swoje wynagrodzenie brutto',
    text: 'Wpisz całkowitą roczną kwotę widniejącą w Twojej umowie przed wszelkimi potrąceniami czy zaliczkami na podatek.',
  },
  {
    name: 'Zdefiniuj swoją sytuację osobistą',
    text: 'Wskaż liczbę dzieci, ewentualną uznaną niepełnosprawność oraz stan cywilny, aby zastosować ustawowe kwoty wolne od podatku.',
  },
  {
    name: 'Wybierz swoją Wspólnotę Autonomiczną',
    text: 'Twoja rezydencja podatkowa determinuje zastosowaną regionalną skalę podatkową, wpływając na ostateczny dochód netto.',
  },
  {
    name: 'Przejrzyj zestawienie',
    text: 'Zobacz, ile trafia na IRPF, ubezpieczenie społeczne i jakie jest Twoje realne miesięczne oraz roczne wynagrodzenie netto.',
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: 'Zmienne Obliczeniowe',
    titleCalculo: 'Przejrzyste Obliczenia 2026',
    labelBruto: 'Roczne Wynagrodzenie Brutto (€)',
    labelPagas: 'Liczba Wypłat w Roku',
    labelComunidad: 'Rezydencja Podatkowa',
    labelHijos: 'Dzieci (poniżej 25 lat)',
    labelDiscapacidad: 'Stopień Niepełnosprawności',
    labelUnidad: 'Jednostka Rodzinna lub Wspólne Pożycie',
    opt12pagas: '12 wypłat',
    opt14pagas: '14 wypłat',
    optGen: 'Terytorium Wspólne (Ogólne)',
    optMad: 'Madryt',
    optCat: 'Katalonia',
    optAnd: 'Andaluzja',
    optVal: 'Wspólnota Walencka',
    optPV: 'Kraj Basków (Foral)',
    optNav: 'Nawarra (Foral)',
    optNinguna: 'Brak',
    opt33: '> 33%',
    opt65: '> 65%',
    optSoltero: 'Kawaler/Panna, rozwiedziony/a lub wdowiec/wdowa',
    optCasadoLow: 'W związku małżeńskim (małżonek zarabia mniej niż 1.500 €/rok)',
    optCasadoHigh: 'W związku małżeńskim (małżonek posiada dochody)',
    labelSalarioBruto: 'Wynagrodzenie Brutto',
    labelSS: 'Ubezpieczenie Społeczne / MEI (-)',
    labelGastos: 'Koszty Uzyskania Przychodu (Art. 20)',
    labelNetoAnual: 'ROCZNE WYNAGRODZENIE NETTO',
    labelRetencionIRPF: 'Zaliczka na IRPF (%)',
    labelNetoMensual: 'Dostępne Netto Miesięczne',
    labelMarginal: 'Zastosowana Stawka Marginalna',
    resultRetention: 'Zaliczka na IRPF (%)',
    resultAnual: '/ rok',
    infoText:
      'Algorytm AEAT (Podatek Brutto - Kwota Wolna) zweryfikowany na rok 2026. Zawiera składkę MEI na poziomie 6,47% oraz pomniejszenia z tytułu dochodów z pracy. jjlmoya.es.',
  },
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    {
      name: 'Agencja Podatkowa: IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator IRPF 2026: Kompletny przewodnik po nowym scenariuszu podatkowym',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Podatek dochodowy od osób fizycznych (IRPF) jest najważniejszą daniną w hiszpańskim systemie podatkowym, bezpośrednio wpływową na miesięczne paski wynagrodzeń milionów pracowników. W roku 2026 jesteśmy świadkami konsolidacji różnych reform mających na celu progresywność i dostosowanie do nowych realiów gospodarczych, takich jak wzrost Mechanizmu Solidarności Międzypokoleniowej (MEI) oraz deflacja stawek w różnych wspólnotach autonomicznych.',
    },
    {
      type: 'paragraph',
      html: 'Nasz <strong>kalkulator IRPF na rok 2026</strong> został zaprojektowany, aby zapewnić dokładny i aktualny wgląd w to, co faktycznie trafi na Twoje konto bankowe. Obliczanie wynagrodzenia netto to nie tylko odejmowanie stałego procentu; to proces matematyczny, który bierze pod uwagę Twoją sytuację osobistą, osoby na utrzymaniu, niepełnosprawność oraz, co kluczowe, Twoją rezydencję podatkową, ponieważ każdy region w Hiszpanii ma władzę nad własną regionalną skalą podatkową.',
    },
    {
      type: 'title',
      text: 'Co zmienia się w paskach wynagrodzeń w 2026 roku?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aby zrozumieć wyniki swojej symulacji, niezbędne jest poznanie filarów obliczeń zaliczek w tym roku:',
    },
    {
      type: 'list',
      items: [
        '<strong>Wpływ MEI:</strong> Mechanizm Solidarności Międzypokoleniowej kontynuuje swoją tendencję wzrostową w celu zagwarantowania emerytur, osiągając poziom 0,90% w 2026 roku. Większość pokrywa pracodawca, ale pracownicy odczują wzrost swojej składki do około 0,15%, co nieznacznie obniży dochód netto.',
        '<strong>SMI i Pomniejszenia:</strong> Minimalne wynagrodzenie międzybranżowe (SMI) działa jako bariera. Niskie dochody korzystają z rozszerzonego pomniejszenia z tytułu dochodów z pracy, aby zapewnić, że wzrost wynagrodzenia brutto nie zostanie pochłonięty przez wyższą zaliczkę na podatek.',
        '<strong>Skale Regionalne:</strong> regiony takie jak Madryt, Andaluzja czy Murcja zazwyczaj stosują niższe stawki niż średnia państwowa, podczas gdy Katalonia czy Wspólnota Walencka mają własne skale, które mogą zwiększyć zaliczkę na wyższych poziomach dochodów.',
      ],
    },
    {
      type: 'title',
      text: 'Kluczowe pojęcia do zrozumienia Twojego wynagrodzenia netto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Podstawa Opodatkowania vs. Wynagrodzenie Brutto:</strong> Nie płacisz podatku od wszystkiego, co zarabiasz. Podstawa, od której liczy się IRPF, jest wynikiem odjęcia od wynagrodzenia brutto składek na ubezpieczenie społeczne (ok. 6,45%) oraz ogólnego pomniejszenia z tytułu kosztów uzyskania przychodu (2.000 € rocznie). Od tego wyniku odejmowane są kwoty wolne od podatku.',
    },
    {
      type: 'title',
      text: 'Podstawowe pojęcia',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Stawka Marginalna:</strong> Procent podatku od ostatniego zarobionego euro. Kluczowy, aby wiedzieć, ile podwyżka lub premia będzie Cię faktycznie kosztować w podatkach.',
        '<strong>Minimum Egzystencjalne:</strong> Dochód, który państwo uznaje za niezbędny do pokrycia podstawowych potrzeb podatnika i jego rodziny, i który w związku z tym jest wolny od podatku.',
        '<strong>Zaliczka na Podatek w Wynagrodzeniu:</strong> Płatność na poczet podatku, którą pracodawca odprowadza co miesiąc do urzędu skarbowego w Twoim imieniu, oparta na szacunku tego, co będziesz winien na koniec roku.',
        '<strong>Dochód Netto:</strong> Wynagrodzenie brutto minus składki na ubezpieczenie społeczne i koszty uzyskania przychodu dozwolone przez prawo podatkowe.',
      ],
    },
    {
      type: 'title',
      text: 'Jak zoptymalizować zaliczkę na IRPF',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wielu pracowników zastanawia się, czy powinni poprosić pracodawcę o potrącanie większego lub mniejszego procentu. W rzeczywistości zaliczka jest „przedpłatą” do fiskusa. Jeśli w ciągu roku potrącono Ci za mało, w rozliczeniu rocznym może wystąpić dopłata; jeśli za dużo, otrzymasz zwrot.',
    },
    {
      type: 'paragraph',
      html: '<strong>Mit o skoku w wyższy próg podatkowy:</strong> Istnieje mit, że wejście w wyższy próg oznacza zarabianie mniejszej kwoty netto. To nieprawda. IRPF jest progresywny; tylko dochód przekraczający limit danego progu jest opodatkowany wyższą stawką. Nigdy nie zarobisz mniej netto z powodu podwyżki brutto, nawet przy wyższej stawce marginalnej.',
    },
    {
      type: 'paragraph',
      html: '<strong>Porada dla rodzin:</strong> Upewnij się, że prawidłowo zgłosiłeś narodziny dzieci lub zmiany w stopniu niepełnosprawności członków rodziny za pomocą formularza 145. To dostosowuje Twoją miesięczną zaliczkę i pozwala uniknąć niespodzianek podczas rozliczenia podatkowego w czerwcu.',
    },
    {
      type: 'title',
      text: 'Różnice według Wspólnot Autonomicznych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Decentralizacja fiskalna w Hiszpanii sprawia, że dwie osoby z takim samym wynagrodzeniem i sytuacją rodzinną zarabiają różną kwotę netto, w zależności od tego, czy mieszkają w Toledo czy w Barcelonie. Wspólnoty kontrolują połowę podatku (część regionalną). Madryt, na przykład, wyróżnia się posiadaniem najniższych stawek niemal na wszystkich poziomach dochodów, podczas gdy inne regiony stosują ulgi na wynajem czy edukację dzieci, które nie istnieją na poziomie państwowym. Nasz kalkulator uwzględnia te różnice, aby podać Ci najbardziej realistyczną kwotę w oparciu o Twoją lokalizację.',
    },
    {
      type: 'paragraph',
      html: 'Podsumowując, <strong>symulacja wynagrodzenia netto 2026</strong> jest podstawowym narzędziem planowania finansowego. Znajomość rzeczywistej zdolności oszczędnościowej i zrozumienie, jaka część Twoich dochodów wspiera usługi publiczne, pozwala na podejmowanie świadomych decyzji o inwestycjach, kredytach hipotecznych czy zmianach zawodowych.',
    },
  ],
};

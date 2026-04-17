import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'kalkulator-kosztow-spotkania';
const title = 'Licznik Kosztów Spotkania w Czasie Rzeczywistym';
const description =
  'Zobacz w czasie rzeczywistym, ile kosztuje Twoje spotkanie. Wprowadź liczbę uczestników i średnie wynagrodzenie, aby obserwować, jak kwota rośnie z każdą sekundą.';

const faqData = [
  {
    question: 'Dlaczego warto mierzyć koszt spotkania?',
    answer:
      'Przypisanie wartości pieniężnej do czasu spotkania buduje świadomość produktywności. Pomaga to wyeliminować niepotrzebne spotkania, zachęca do punktualności i gwarantuje, że omawiane tematy uzasadniają inwestycję ekonomiczną zespołu.',
  },
  {
    question: 'Jak obliczany jest koszt w czasie rzeczywistym?',
    answer:
      'System pobiera szacunkowe roczne lub godzinowe wynagrodzenie każdego uczestnika i oblicza stawkę wydatków na sekundę. Licznik aktualizuje się w każdej klatce animacji, pokazując skumulowany koszt w czasie rzeczywistym.',
  },
  {
    question: 'Jakich kosztów pośrednich to narzędzie nie uwzględnia?',
    answer:
      'Ten kalkulator skupia się na bezpośrednich kosztach wynagrodzeń. Nie uwzględnia on kosztu alternatywnego (tego, co pracownicy mogliby wyprodukować w tym czasie), ani stałych kosztów ogólnych, takich jak czynsz za biuro, licencje na oprogramowanie czy media.',
  },
  {
    question: 'Jak mogę obniżyć koszty moich spotkań?',
    answer:
      'Zdefiniuj jasny plan, ogranicz liczbę uczestników tylko do osób niezbędnych, ustal sztywny limit czasowy i rozważ, czy wiadomość asynchroniczna lub e-mail nie dałyby takich samych rezultatów.',
  },
];

const howToData = [
  {
    name: 'Wprowadź liczbę uczestników',
    text: 'Wpisz, ile osób obecnie bierze udział w spotkaniu.',
  },
  {
    name: 'Ustal średnie wynagrodzenie',
    text: 'Podaj szacunkowe średnie roczne wynagrodzenie brutto lub stawkę godzinową uczestników, aby uzyskać dokładne obliczenia.',
  },
  {
    name: 'Uruchom licznik',
    text: 'Naciśnij przycisk Start zaraz po rozpoczęciu spotkania i obserwuj, jak koszty narastają w czasie rzeczywistym.',
  },
  {
    name: 'Zatrzymaj i wyciągnij wnioski',
    text: 'Po zakończeniu spotkania zatrzymaj licznik. Przejrzyj całkowity koszt i oceń, czy osiągnięte wyniki były warte tej inwestycji.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: 'Skumulowany Koszt',
    labelAttendees: 'Uczestnicy',
    labelSalary: 'Średnie Wynagrodzenie',
    optAnnual: 'Roczne Brutto',
    optHourly: 'Stawka Godzinowa',
    btnStart: 'Rozpocznij Spotkanie',
    btnPause: 'Pauza',
    btnResume: 'Wznów',
    btnReset: 'Resetuj',
    currencySymbol: 'zł',
    defaultSalary: '100000',
    numberLocale: 'pl-PL',
  },
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: 'Skończ z szaleństwem spotkań (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'Marnowanie czasu w pracy (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Dlaczego warto wizualizować koszt spotkania?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Czas to najdroższy i najmniej odnawialny zasób w każdej organizacji. To narzędzie nie służy zniechęcaniu do współpracy — ma na celu budowanie <strong>produktywnej świadomości</strong>. Kiedy obserwujemy, jak pieniądze "płoną" w czasie rzeczywistym, stajemy się bardziej punktualni, konkretni i rozważni w planowaniu agendy.',
    },
    {
      type: 'card',
      title: 'Matematyka Ukrytych Kosztów',
      html: '<p>Obliczamy koszt na podstawie rocznego wynagrodzenia brutto lub stawki godzinowej. W przypadku wynagrodzeń rocznych przyjmujemy standard branżowy wynoszący <strong>1750 godzin roboczych rocznie</strong> (uwzględniając urlopy i święta), aby przeliczyć wynagrodzenie na stawkę godzinową.</p><p>Wzór na stawkę sekundową to:<br><code>(Stawka Godzinowa × Liczba Uczestników) / 3600</code><br>Daje to dokładny koszt na sekundę wyświetlany na liczniku.</p>',
    },
    {
      type: 'code',
      code: 'Wynagrodzenie roczne: 100 000 zł\nStawka godzinowa: 100 000 zł / 1 750 = 57,14 zł/h\nKoszt sekundowy (4 osoby): (57,14 zł × 4) / 3 600 = 0,063 zł/sek\nKoszt 1-godzinnego spotkania: 228,56 zł',
    },
    {
      type: 'title',
      text: 'Wskazówki Dotyczące Wydajniejszych Spotkań',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Zasada dwóch pizz:</strong> Spopularyzowana przez Jeffa Bezosa — jeśli dwie pizze nie są w stanie nakarmić wszystkich uczestników spotkania, w pokoju jest za dużo osób.',
        '<strong>Brak agendy, brak spotkania:</strong> Nigdy nie akceptuj spotkania bez jasnego planu i zdefiniowanych celów.',
        '<strong>Spotkania na stojąco (Stand-up):</strong> Codzienne synchronizacje prowadź na stojąco. Dyskomfort fizyczny sprzyja zwięzłości.',
        '<strong>Prawo Parkinsona:</strong> Praca rozszerza się tak, aby wypełnić dostępny czas. Ustawiaj bloki 25- lub 50-minutowe zamiast domyślnej godziny.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Używaj licznika na żywo:</strong> Udostępniaj ekran z licznikiem kosztów spotkania podczas meetingów zespołu. Widoczna kwota tworzy naturalną zachętę do trzymania się tematu i kończenia na czas.',
    },
  ],
};

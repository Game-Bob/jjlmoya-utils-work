import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'generator-wypowiedzenia-umowy-o-prace';
const title = 'Profesjonalny Generator Wypowiedzenia Umowy o Pracę';
const description =
  'Stwórz spersonalizowane wypowiedzenie umowy o pracę w kilka sekund. Profesjonalne szablony gotowe do skopiowania lub pobrania jako PDF.';

const faqData = [
  {
    question: 'Ile dni okresu wypowiedzenia muszę zachować?',
    answer:
      'W Polsce okres wypowiedzenia zależy od stażu pracy u danego pracodawcy: 2 tygodnie (staż poniżej 6 m-cy), 1 miesiąc (staż min. 6 m-cy) lub 3 miesiące (staż min. 3 lata). Sprawdź swoją umowę pod kątem ewentualnych uzgodnień.',
  },
  {
    question: 'Czy po złożeniu wypowiedzenia mam prawo do ekwiwalentu za urlop?',
    answer:
      'Tak. Jeśli nie wykorzystasz przysługującego Ci urlopu w naturze do dnia rozwiązania umowy, pracodawca ma obowiązek wypłacić Ci ekwiwalent pieniężny.',
  },
  {
    question: 'Czy otrzymam zasiłek dla bezrobotnych po wypowiedzeniu umowy?',
    answer:
      'W przypadku rozwiązania umowy za wypowiedzeniem przez pracownika, prawo do zasiłku zwykle przysługuje dopiero po 90 dniach od zarejestrowania w urzędzie pracy.',
  },
  {
    question: 'Co się stanie, jeśli nie dochowam okresu wypowiedzenia?',
    answer:
      'Pracownik, który porzuca pracę bez wypowiedzenia, może narazić się na odszkodowanie dla pracodawcy oraz adnotację o dyscyplinarnym trybie rozwiązania umowy (porzucenie pracy) w świadectwie pracy.',
  },
  {
    question: 'Czy mogę wycofać wypowiedzenie po jego złożeniu?',
    answer:
      'Wycofanie wypowiedzenia jest skuteczne tylko wtedy, gdy dotarło do pracodawcy jednocześnie z samym wypowiedzeniem lub gdy pracodawca oświadczył, że godzi się na jego wycofanie.',
  },
];

const howToData = [
  {
    name: 'Wypełnij dane osobowe',
    text: 'Wpisz swoje imię i nazwisko, dane przełożonego lub działu HR oraz nazwę firmy.',
  },
  {
    name: 'Ustal datę rozwiązania umowy',
    text: 'Wybierz dzień zakończenia pracy, uwzględniając okres wypowiedzenia wynikający z przepisów/umowy.',
  },
  {
    name: 'Wybierz styl uzasadnienia',
    text: 'Dobierz podejście pasujące do Twojej sytuacji, aby nadać pismu odpowiedni ton.',
  },
  {
    name: 'Skopiuj lub pobierz pismo',
    text: 'Kliknij przycisk, aby skopiować treść wypowiedzenia lub zapisać je jako gotowy plik PDF.',
  },
];

const bibliography = [
  {
    name: 'Państwowa Inspekcja Pracy - Rozwiązanie umowy',
    url: 'https://www.pip.gov.pl',
  },
  {
    name: 'Kodeks Pracy (Internetowy System Aktów Prawnych)',
    url: 'https://isap.sejm.gov.pl',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'Imię i nazwisko pracownika',
    labelManagerName: 'Imię i nazwisko przełożonego / HR',
    labelManagerGender: 'Forma grzecznościowa',
    labelCompanyName: 'Nazwa firmy',
    labelLastDay: 'Ostatni dzień pracy (Data ustania stosunku)',
    labelReasonType: 'Rodzaj uzasadnienia',
    labelCity: 'Miejscowość',
    optGenderNeutral: 'Szanowni Państwo (Neutralnie)',
    optGenderM: 'Szanowny Panie (Męski)',
    optGenderF: 'Szanowna Pani (Żeński)',
    optReasonStandard: 'Standardowe (Profesjonalne)',
    optReasonOpportunity: 'Nowa oferta pracy',
    optReasonPersonal: 'Powody osobiste',
    optReasonEducation: 'Rozwój naukowy / Studia',
    optReasonGrowth: 'Brak możliwości rozwoju wewnątrz firmy',
    optReasonDirect: 'Bezpośrednie i zwięzłe (Bez podania przyczyny)',
    btnCopy: 'Skopiuj treść',
    btnDownload: 'Pobierz PDF',
    copyFeedback: 'Skopiowano do schowka',
    defaultUserName: 'Jan Kowalski',
    defaultManagerName: 'Anna Nowak',
    defaultCompanyName: 'Nasza Firma Sp. z o.o.',
    defaultCity: 'Warszawa',
    dateLocale: 'pl-PL',
    datePrefix: '',
    managerPrefix: 'Do rąk własnych:',
    managerFallback: 'Dział Kadr i Płac',
    companyFallback: 'Nazwa Firmy',
    salutationNeutral: 'Szanowni Państwo',
    salutationM: 'Szanowny Panie',
    salutationF: 'Szanowna Pani',
    salutationFallback: 'Pracodawco',
    signatureFallback: 'Podpis Pracownika',
    thanksParagraph:
      'Chciałbym serdecznie podziękować za wszystkie możliwości rozwoju zawodowego i osobistego, które otrzymałem w trakcie pracy w Państwa firmie.',
    transitionParagraph:
      'Zobowiązuję się do pełnej współpracy w celu sprawnego przekazania moich obowiązków oraz domknięcia bieżących spraw przed zakończeniem współpracy.',
    closingWord: 'Z poważaniem,',
    reasonStandard:
      'Niniejszym składam wypowiedzenie umowy o pracę zawartej w dniu [DATE]. Rozwiązanie umowy nastąpi z zachowaniem umownego okresu wypowiedzenia, a ostatnim dniem pracy będzie [DATE].',
    reasonOpportunity:
      'Informuję o mojej decyzji o wypowiedzeniu umowy o pracę w związku z przyjęciem nowej oferty zawodowej. Moja współpraca z firmą zakończy się z dniem [DATE].',
    reasonPersonal:
      'Z przyczyn osobistych wymagających mojej natychmiastowej obecności, jestem zmuszony złożyć wypowiedzenie umowy o pracę. Stosunek pracy zostanie rozwiązany z dniem [DATE].',
    reasonEducation:
      'Postanowiłem podjąć studia w trybie stacjonarnym, w związku z czym składam za wypowiedzeniem rezygnację z zajmowanego stanowiska. Ostatnim dniem pracy będzie [DATE].',
    reasonGrowth:
      'Po głębokim namyśle zdecydować się na zmianę środowiska pracy w celu rozwijania kompetencji w innych obszarach. Rozwiązanie umowy nastąpi w dniu [DATE].',
    reasonDirect:
      'Niniejszym wypowiadam umowę o pracę. Stosunek pracy zostanie rozwiązany z zachowaniem przewidzianego okresu wypowiedzenia w dniu [DATE].',
  },
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Jak napisać profesjonalne wypowiedzenie umowy o pracę',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Decyzja o odejściu z pracy to ważny krok. <strong>Złożenie wypowiedzenia</strong> to nie tylko formalność, ale dokument o skutkach prawnych, który musi być sporządzony precyzyjnie.',
    },
    {
      type: 'tip',
      html: '<strong>Ważne:</strong> Wypowiedzenie powinno być sporządzone <strong>w formie pisemnej</strong>. Pismo to wyznacza bieg okresu wypowiedzenia i chroni interesy obu stron.',
    },
    {
      type: 'code',
      code: '[Miejscowość, Data]\n\nDo: [Imię i Nazwisko Przełożonego]\n[Nazwa Firmy]\n\nRozwiązanie umowy o pracę za wypowiedzeniem\n\nSzanowny Panie / Szanowna Pani,\nniniejszym wypowiadam umowę o pracę. Ostatnim dniem pracy będzie [Data].\n\nZ poważaniem,\n[Podpis]',
    },
  ],
};

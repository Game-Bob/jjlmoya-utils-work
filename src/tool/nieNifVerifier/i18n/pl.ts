import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'weryfikator-nie-nif-hiszpania';
const title = 'Weryfikator NIE/NIF/CIF Hiszpania: Walidator numeru identyfikacji podatkowej';
const description =
  'Bezpłatne narzędzie do weryfikacji poprawności numerów NIF (hiszpański DNI), NIE (cudzoziemcy) i CIF (firmy) w Hiszpanii. Sprawdza cyfrę kontrolną i oficjalny format.';

const faqData = [
  {
    question: 'Czy wpisywanie mojego numeru NIF lub NIE w tym narzędziu jest bezpieczne?',
    answer:
      'Tak, jest to całkowicie bezpieczne. Walidacja odbywa się w całości w Twojej przeglądarce za pomocą JavaScript. Twoje dane nigdy nie są wysyłane na żaden serwer ani przechowywane w żadnej bazie danych.',
  },
  {
    question: 'Jaka jest różnica między NIF a CIF?',
    answer:
      'NIF (Número de Identificación Fiscal) to obecnie termin określający wszystkie numery identyfikacji podatkowej. Jednak CIF (Código de Identificación Fiscal) jest nadal powszechnie używany w odniesieniu do numeru NIF osób prawnych (firm i organizacji).',
  },
  {
    question: 'Jak sprawdzić, czy NIF jest ważny, jeśli nie mam litery?',
    answer:
      'Wpisz 8 cyfr w naszym weryfikatorze i sprawdź, czy litera jest zgodna. Algorytm oblicza dokładną literę, dzieląc liczbę przez 23.',
  },
  {
    question: 'Czy to narzędzie obsługuje numery NIE zaczynające się od Y lub Z?',
    answer:
      'Tak, nasz weryfikator obsługuje wszystkie formaty NIE: starsze zaczynające się od X oraz nowsze zaczynające się od Y lub Z, stosując oficjalną konwersję numeryczną.',
  },
  {
    question: 'Czy narzędzie sprawdza, czy numer faktycznie istnieje w urzędzie skarbowym?',
    answer:
      'Nie. Narzędzie to wykonuje walidację algorytmiczną i matematyczną. Potwierdza, że numer ma legalną strukturę i poprawną cyfrę kontrolną, ale nie wysyła zapytań do rzeczywistego rejestru Agencia Tributaria.',
  },
];

const howToData = [
  {
    name: 'Znajdź identyfikator',
    text: 'Zlokalizuj kod alfanumeryczny na dokumencie (DNI, karta pobytu lub karta identyfikacji podatkowej).',
  },
  {
    name: 'Wpisz kod',
    text: 'Wpisz NIF, NIE lub CIF w polu tekstowym. Nie przejmuj się spacjami ani myślnikami.',
  },
  {
    name: 'Sprawdź wynik',
    text: 'Narzędzie natychmiast przeanalizuje, czy struktura jest poprawna i czy znak kontrolny się zgadza.',
  },
  {
    name: 'Skopiuj wynik',
    text: 'Jeśli kod jest poprawny, możesz go bezpośrednio skopiować, aby wkleić do faktury, umowy lub formularza administracyjnego.',
  },
];

const bibliography = [
  {
    name: 'Agencia Tributaria: NIF dla osób fizycznych i prawnych',
    url: 'https://sede.agenciatributaria.gob.es/Sede/procedimiento-recaudatorio-gestor/nif.html',
  },
  {
    name: 'Ministerstwo Spraw Wewnętrznych: Struktura DNI i NIE',
    url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_9._2.html?punto=5.2',
  },
  {
    name: 'BOE: Ogólne przepisy dotyczące zarządzania podatkami',
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Wpisz hiszpański identyfikator podatkowy',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: 'Poprawny',
    msgInvalidControl: 'Błędna cyfra kontrolna',
    msgInvalidNIEControl: 'Błąd znaku kontrolnego',
    msgInvalidCIF: 'Błędna kombinacja',
    msgIncomplete: 'Niekompletny',
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
      text: 'Znaczenie weryfikacji NIF, NIE i CIF w Hiszpanii',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W hiszpańskim systemie administracyjnym i biznesowym identyfikacja podatkowa jest podstawą wszelkich transakcji, umów i spraw urzędowych. Niezależnie od tego, czy jesteś freelancerem wystawiającym faktury, firmą zarządzającą dostawcami, czy osobą prywatną dokonującą zakupu, niezawodny <strong>weryfikator NIF, NIE i CIF</strong> jest niezbędnym narzędziem pozwalającym uniknąć błędów administracyjnych i potencjalnych oszustw.',
    },
    {
      type: 'title',
      text: 'Co to jest NIF, NIE i CIF? Kluczowe różnice',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF (Número de Identificación Fiscal):</strong> Ogólny termin oznaczający identyfikację podatkową w Hiszpanii. W przypadku obywateli Hiszpanii numer NIF odpowiada numerowi DNI z literą kontrolną na końcu (8 cyfr + 1 litera).',
        '<strong>NIE (Número de Identidad de Extranjero):</strong> Kod identyfikacyjny dla osób niebędących obywatelami Hiszpanii, prowadzących działalność podatkową w Hiszpanii. Zaczyna się od litery X, Y lub Z, po której następuje 7 cyfr i litera kontrolna.',
        '<strong>CIF (Código de Identificación Fiscal):</strong> Popularna nazwa numeru NIF osób prawnych (firmy, stowarzyszenia). Jedna litera wskazująca typ organizacji + 7 cyfr + cyfra lub litera kontrolna.',
      ],
    },
    {
      type: 'title',
      text: 'Jak działa algorytm walidacji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W przypadku NIF/DNI litera końcowa jest uzyskiwana przez podzielenie części numerycznej przez 23 (modulo 23) i przypisanie pozostałej części do sekwencji <strong>TRWAGMYFPDXBNJZSQVHLCKE</strong>. W przypadku CIF sumuje się pary i podwojone cyfry na pozycjach nieparzystych, aby zweryfikować znak kontrolny. Całość obliczeń odbywa się w przeglądarce w ciągu milisekund.',
    },
    {
      type: 'title',
      text: 'Typowe zastosowania weryfikatora NIE/NIF',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Biura rachunkowe i podatkowe:</strong> Weryfikacja identyfikatorów przed zarejestrowaniem klientów lub dostawców w modelach podatkowych.',
        '<strong>E-commerce:</strong> Walidacja numeru NIF przy składaniu zamówienia w celu wystawienia poprawnych faktur.',
        '<strong>Działy kadr (HR):</strong> Potwierdzanie numerów NIE pracowników zagranicznych przed zgłoszeniem ich do ubezpieczenia społecznego.',
      ],
    },
    {
      type: 'title',
      text: 'Wskazówki dotyczące poprawnej weryfikacji',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Jeśli weryfikator zgłasza błąd, sprawdź, czy nie pomyliłeś 0 (zero) z literą O — to bardzo częsty błąd w numerach NIE.',
        'W przypadku CIF zawsze podawaj literę początkową określającą typ podmiotu (A = S.A., B = S.L. itd.).',
        'To narzędzie sprawdza ważność matematyczną, a nie to, czy numer jest obecnie aktywny w rejestrach urzędu skarbowego.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Gwarancja prywatności:</strong> Walidacja odbywa sich w całości w Twojej przeglądarce. Wpisywane numery nigdy nie są wysyłane na serwer.',
    },
  ],
};

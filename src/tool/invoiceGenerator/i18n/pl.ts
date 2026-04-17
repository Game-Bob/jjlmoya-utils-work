import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'generator-faktur';
const title = 'Darmowy Generator Faktur dla Freelancerów i Małych Firm';
const description =
  'Twórz profesjonalne faktury online za darmo. Wpisz swoje dane, dodaj usługi, ustaw podatki i wygeneruj gotowy do druku plik PDF. Bez rejestracji.';

const faqData = [
  {
    question: 'Jakie informacje musi zawierać profesjonalna faktura?',
    answer:
      'Profesjonalna faktura musi zawierać unikalny numer faktury, datę wystawienia, pełną nazwę firmy i dane kontaktowe (w tym NIP), dane firmy klienta, wyszczególnioną listę usług lub produktów z ilościami i cenami jednostkowymi, obowiązujące podatki (np. VAT) oraz jasne warunki płatności.',
  },
  {
    question: 'Czy freelancerzy muszą naliczać podatek VAT za usługi?',
    answer:
      'To zależy od Twojego kraju i statusu podatkowego (np. czy jesteś czynnym podatnikiem VAT). W Polsce wielu freelancerów korzysta ze zwolnienia podmiotowego z VAT, ale jeśli przekroczysz limit obrotów, musisz naliczać podatek.',
  },
  {
    question: 'Co to jest podatek u źródła/potrącenie i kiedy ma zastosowanie?',
    answer:
      'Potrącenie podatku (np. zaliczka na podatek dochodowy) to kwota, którą klient odejmuje od Twojej zapłaty i wpłaca do urzędu skarbowego w Twoim imieniu. Jest to powszechne przy umowach zlecenie lub o dzieło.',
  },
  {
    question: 'Czy powinienem podawać numer PESEL czy NIP na fakturze?',
    answer:
      'Jeśli prowadzisz działalność gospodarczą, zawsze używaj numeru NIP. Numer PESEL na fakturach jest odradzany ze względu na ochronę danych osobowych, chyba że wystawiasz rachunek jako osoba prywatna.',
  },
];

const howToData = [
  {
    name: 'Wpisz dane swojej firmy',
    text: 'Kliknij na "Moja Firma Sp. z o.o." i zastąp ją rzeczywistą nazwą, numerem NIP, adresem i e-mailem.',
  },
  {
    name: 'Wypełnij dane klienta',
    text: 'W sekcji "Nabywca:", kliknij każde pole, aby wpisać nazwę firmy klienta, NIP, adres i e-mail.',
  },
  {
    name: 'Dodaj usługi i ceny',
    text: 'Opisz każdą usługę w tabeli, ustaw ilość i cenę jednostkową. Kliknij "Dodaj wiersz", aby dopisać kolejne pozycje.',
  },
  {
    name: 'Sprawdź sumy i wygeneruj PDF',
    text: 'Zweryfikuj poprawność kwot, ustaw stawkę podatku, jeśli dotyczy, i kliknij "Generuj PDF", aby zapisać fakturę.',
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

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: 'Edytor Interaktywny',
    labelEditHint: 'Kliknij dowolny tekst w dokumencie, aby go edytować.',
    btnGenerate: 'Generuj PDF',
    labelFrom: 'Sprzedawca:',
    labelTo: 'Nabywca:',
    labelDesc: 'Opis usługi lub produktu',
    labelQty: 'Ilość',
    labelPrice: 'Cena',
    labelAmount: 'Wartość',
    btnAddRow: 'Dodaj wiersz',
    labelSubtotal: 'Suma netto:',
    labelTax: 'Podatek',
    labelWithholding: 'Potrącenie',
    labelTotal: 'Suma do zapłaty:',
    defaultInvoiceTitle: 'FAKTURA',
    defaultInvoiceNum: 'FV/24/001',
    defaultCompanyName: 'Moja Firma Sp. z o.o.',
    defaultCompanyId: 'NIP 1234567890',
    defaultAddress: 'ul. Główna 123',
    defaultCity: '00-001 Warszawa',
    defaultEmail: 'biuro@mojafirma.pl',
    placeholderDesc: 'Dodaj opis...',
    placeholderNotes: 'np. Termin płatności 14 dni, przelew na konto...',
    labelNotes: 'Uwagi / Warunki płatności',
    currencySymbol: 'zł',
    defaultTaxRate: '23',
    defaultRetRate: '0',
  },
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: 'Elementy faktury - Portal Podatkowy', url: 'https://www.podatki.gov.pl/' },
    { name: 'Fakturowanie dla przedsiębiorców - Biznes.gov.pl', url: 'https://www.biznes.gov.pl/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Niezbędne elementy profesjonalnej faktury',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Prawidłowa faktura biznesowa to coś więcej niż prośba o zapłatę — to dokument prawny, który chroni Ciebie i Twojego klienta. Brak wymaganego pola może opóźnić płatność lub spowodować problemy z urzędem skarbowym. Dla freelancerów poprawne wystawianie faktur od pierwszego dnia jest kluczowe.',
    },
    {
      type: 'card',
      title: 'Wymagane pola na fakturze',
      html: '<ul><li><strong>Numer faktury:</strong> Musi być kolejny i unikalny (np. 2024/01).</li><li><strong>Data wystawienia:</strong> Dzień utworzenia dokumentu.</li><li><strong>Dane sprzedawcy i nabywcy:</strong> Pełna nazwa, NIP i adres obu stron.</li><li><strong>Szczegółowa lista usług:</strong> Opis, ilość i cena jednostkowa.</li><li><strong>Warunki płatności:</strong> Termin i metoda zapłaty.</li></ul>',
    },
    {
      type: 'title',
      text: 'Podatki i potrącenia na fakturach freelancera',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dwa czynniki wpływają na ostateczną kwotę. <strong>Podatek VAT</strong> jest doliczany do ceny i odprowadzany do państwa — zwiększa koszt klienta. <strong>Potrącenia</strong> (np. zaliczka na podatek dochodowy) są odejmowane od Twojej zapłaty — zmniejszają kwotę "na rękę", ale są Twoją wpłatą na poczet podatku.',
    },
    {
      type: 'code',
      code: 'Wykonane usługi               1.000,00 zł\n+ Podatek VAT (23%)             230,00 zł\n- Potrącenie (zaliczka PIT)     120,00 zł\n------------------------------------------\nZapłata netto do otrzymania   1.110,00 zł',
    },
    {
      type: 'title',
      text: 'Ochrona tożsamości podatkowej freelancera',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jeśli to możliwe, zawsze używaj numeru NIP zamiast PESEL. Dzięki temu Twój prywatny numer identyfikacyjny nie krąży w dokumentach udostępnianych wielu działom w firmie klienta.',
    },
    {
      type: 'tip',
      html: '<strong>Zapisuj każdą fakturę jako PDF:</strong> Przepisy wymagają przechowywania dokumentacji księgowej przez co najmniej 5 lat od końca roku. Korzystaj z przycisku Generuj PDF i przechowuj pliki w uporządkowanych folderach.',
    },
  ],
};

import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'kalkulator-vat-od-brutto-hiszpania';
const title = 'Kalkulator VAT od Brutto: Oblicz Podstawę Opodatkowania';
const description =
  'Internetowy kalkulator VAT wsteczny (od brutto). Wylicz podstawę opodatkowania z dowolnej kwoty całkowitej. Niezbędne narzędzie dla freelancerów w Hiszpanii.';

const faqData = [
  {
    question: 'Co to jest kalkulacja VAT od brutto (scorporo)?',
    answer:
      'Jest to proces obliczania podstawy opodatkowania (netto) z ceny całkowitej (brutto), która zawiera już podatek. Jest to kluczowe dla freelancerów, którzy muszą wystawić fakturę na podstawie uzgodnionej ceny końcowej.',
  },
  {
    question: 'Jak ręcznie obliczyć VAT od kwoty brutto?',
    answer:
      'Dla stawki 21% należy podzielić kwotę brutto przez 1,21. Wynikiem jest podstawa opodatkowania (netto). Różnica między kwotą brutto a netto to wartość podatku VAT.',
  },
  {
    question: 'Jakie stawki VAT obowiązują w Hiszpanii?',
    answer:
      'Obowiązują trzy stawki: Ogólna (21%), Zredukowana (10% na żywność, zdrowie, budownictwo) oraz Super-zredukowana (4% na podstawowe produkty jak chleb, mleko, książki).',
  },
  {
    question: 'Kiedy należy wyodrębnić VAT na fakturze?',
    answer:
      'Zawsze przy wystawianiu faktury profesjonalnej lub uproszczonej. Należy osobno wskazać podstawę opodatkowania, zastosowaną stawkę podatku oraz kwotę VAT.',
  },
];

const howToData = [
  {
    name: 'Wpisz kwotę całkowitą (Brutto)',
    text: 'Wpisz kwotę końcową zawierającą podatek VAT, którą chcesz rozbić.',
  },
  {
    name: 'Wybierz stawkę VAT',
    text: 'Wybierz 21%, 10% lub 4% w zależności od kategorii produktu lub usługi.',
  },
  {
    name: 'Oblicz podstawę (Netto)',
    text: 'Sprawdź wynik automatycznego obliczenia, który pokazuje faktyczną kwotę przed opodatkowaniem.',
  },
  {
    name: 'Skopiuj dane do faktury',
    text: 'Użyj wyliczonych wartości (netto i VAT) do wypełnienia pól w Twoim programie do faktur.',
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

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: 'Kwota Całkowita (Brutto)',
    labelVatType: 'Stawka VAT',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: 'Podstawa (Netto)',
    labelVat: 'Kwota VAT',
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
      text: 'Najczęstszy błąd przy obliczaniu VAT od brutto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Najczęstszym błędem jest myślenie, że aby odjąć 21% VAT, wystarczy odjąć 21% od kwoty brutto. <strong>To błąd!</strong> Jeśli od 100 € odejmiesz 21%, otrzymasz 79 €. Ale jeśli do 79 € dodasz 21% VAT, otrzymasz 95,59 €, a nie 100 €.',
    },
    {
      type: 'title',
      text: 'Wyjaśnienie matematyczne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'VAT nalicza się <strong>od podstawy</strong>. Zatem cena brutto to 121% netto (przy stawce 21%). Aby wrócić do netto, musimy <strong>podzielić</strong> łączną kwotę. <code>Netto = Brutto / 1,21</code>.',
    },
    {
      type: 'code',
      code: 'Podstawa (Netto) = Kwota Brutto / (1 + Stawka VAT)\nKwota VAT = Kwota Brutto - Podstawa (Netto)',
    },
  ],
};

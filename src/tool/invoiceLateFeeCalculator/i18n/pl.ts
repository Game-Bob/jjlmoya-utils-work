import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'kalkulator-oplaty-za-opoznienie-faktury';
const title = 'Kalkulator opłaty za opóźnienie faktury';
const description = 'Oblicz prostą opłatę za opóźnienie na podstawie przeterminowanej faktury, okresu karencji i stawki uzgodnionej w umowie. Zobacz liczbę naliczanych dni, opłatę i sumę w czytelnym zestawieniu.';

const faq = [
  { question: 'Jak działa obliczanie opłaty za opóźnienie faktury?', answer: 'Kalkulator odejmuje dni karencji od dni kalendarzowych między terminem płatności a datą obliczenia. Przy stawce rocznej lub miesięcznej uzgodniony procent jest proporcjonalnie naliczany za dni objęte opłatą. Stawka jednorazowa jest stosowana raz po zakończeniu karencji.' },
  { question: 'Czy mogę użyć ustawowej stawki za opóźnienie?', answer: 'Tak, jeśli sprawdzisz stawkę i umowa lub właściwe prawo pozwalają jej użyć. Wprowadź ją samodzielnie. Narzędzie nie wybiera kraju, nie zgaduje stawki ustawowej i nie rozstrzyga, czy opłata jest możliwa do wyegzekwowania.' },
  { question: 'Co zmienia okres karencji?', answer: 'Dni karencji są odejmowane od czasu po terminie płatności, zanim zacznie się naliczanie opłaty. Jeśli faktura nadal mieści się w tym okresie, opłata pozostaje równa zero, a wynik pokazuje, że trwa karencja.' },
  { question: 'Czy suma obejmuje podatki, koszty windykacji lub odsetki składane?', answer: 'Nie. Wynik to kwota główna w wybranej walucie oraz prosta opłata wynikająca z danych. Zmiana waluty używa stałego współczynnika orientacyjnego, a nie bieżącego kursu. Podatki, stałe koszty windykacji, koszty prawne, odsetki składane i historia płatności nie są dodawane.' },
];

const howTo = [
  { name: 'Wpisz kwotę faktury', text: 'Dodaj niezapłaconą kwotę główną i wybierz walutę faktury. Po późniejszej zmianie waluty kwota zostanie przeliczona według wyświetlonego współczynnika orientacyjnego, a nie bieżącego kursu walutowego.' },
  { name: 'Ustaw daty', text: 'Wybierz umowny termin płatności oraz datę, do której sprawdzasz konto. Narzędzie liczy pełne dni kalendarzowe między tymi datami.' },
  { name: 'Dodaj karencję i stawkę', text: 'Wpisz dni karencji oraz procent uzgodniony dla faktury. Wybierz, czy stawka jest roczna, miesięczna czy jednorazowa.' },
  { name: 'Sprawdź zestawienie', text: 'Przejrzyj dni od terminu, dni objęte opłatą, opłatę i sumę. Zachowaj zestawienie przy fakturze i sprawdź umowę przed wysłaniem wezwania.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' }, inLanguage: 'pl' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'PRZETERMINOWANA FAKTURA / PROSTE ZESTAWIENIE',
    intro: 'Zamień przekroczony termin płatności w jasne wezwanie.',
    sectionTerms: 'Ustaw warunki faktury',
    labelAmount: 'Niezapłacona kwota faktury',
    labelCurrency: 'Waluta faktury',
    currencyConversionHint: 'Zmiana waluty przelicza kwotę według stałego współczynnika orientacyjnego, a nie bieżącego kursu.',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}.',
    labelDueDate: 'Umowny termin płatności',
    labelCalculationDate: 'Oblicz do',
    labelGraceDays: 'Okres karencji',
    labelRate: 'Uzgodniona stawka opłaty',
    labelRatePeriod: 'Stawka obowiązuje',
    rateAnnual: 'Rocznie',
    rateMonthly: 'Miesięcznie',
    rateOneTime: 'Jednorazowo',
    sectionReceipt: 'Zestawienie do windykacji',
    labelDaysSinceDue: 'Dni od terminu płatności',
    labelChargedDays: 'Dni objęte opłatą',
    labelAppliedRate: 'Zastosowana stawka',
    labelLateFee: 'Opłata za opóźnienie',
    labelTotalDue: 'Suma do żądania',
    statusNotDue: 'Termin nieprzekroczony',
    statusGrace: 'Nadal trwa karencja',
    statusOverdue: 'Opłata jest naliczana',
    timelineDue: 'Termin płatności',
    timelineToday: 'Sprawdzone do',
    timelineGrace: 'dni objętych opłatą po karencji',
    noteDisclaimer: 'Proste oszacowanie na podstawie danych. Przed żądaniem zapłaty potwierdź umowę, jurysdykcję, sposób opodatkowania i stałe koszty windykacji.',
    buttonReset: 'Usuń zapisane warunki',
    numberLocale: 'pl-PL',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: 'Łatwo wyjaśnij przeterminowaną fakturę', level: 2 },
    { type: 'paragraph', html: 'Wezwanie do zapłaty jest łatwiejsze do sprawdzenia, gdy kwota główna, daty, karencja, stawka i opłata są widoczne w jednym miejscu. Ten kalkulator zamienia warunki umowy w niewielkie zestawienie w formie potwierdzenia.' },
    { type: 'card', title: 'Prosty wzór', html: '<p><strong>Dni objęte opłatą</strong> = dni między terminem płatności a datą obliczenia - dni karencji.</p><p><strong>Opłata</strong> = kwota faktury × stawka ÷ 100 × współczynnik czasu. Stawki roczne używają dni objętych opłatą ÷ 365, miesięczne dni ÷ 30, a jednorazowe są stosowane raz po karencji.</p>' },
    { type: 'paragraph', html: 'Obliczenie jest celowo przejrzyste i nie wybiera za Ciebie ustawowej stawki odsetek. Umowa może przewidywać opłatę stałą, stawkę roczną albo inną metodę liczenia dni. Przeliczenie waluty jest tylko orientacyjne i korzysta z wybranego współczynnika, a nie z bieżącego kursu. Jeśli umowa mówi inaczej, sprawdź jej zapis i dostosuj obliczenie poza tym narzędziem.' },
    { type: 'title', text: 'Sprawdź wynik przed wysłaniem wezwania', level: 2 },
    { type: 'code', code: 'Faktura: 1 250 zł\nDo sprawdzenia: 38 dni\nKarencja: 5 dni\nStawka roczna: 10%\nDni objęte opłatą: 33\nOpłata: 1 250 zł × 0,10 × 33 / 365 = 11,30 zł\nSuma: 1 261,30 zł' },
    { type: 'list', items: ['Porównaj termin płatności z podpisanym zamówieniem, fakturą lub umową.', 'Użyj rzeczywistej daty przygotowania wezwania, a nie wyobrażonej daty zapłaty.', 'Rozdziel kwotę główną i opłatę, aby odbiorca mógł uzgodnić obie wartości.', 'Sprawdź, czy podatki, stałe koszty odzyskania należności lub limity prawne zmieniają możliwą kwotę żądania.'] },
    { type: 'tip', html: '<strong>Wskazówka dotycząca dowodów:</strong> przechowuj razem fakturę, dowód dostawy lub odbioru, klauzulę umowną i to obliczenie. Narzędzie wyjaśnia arytmetykę, ale nie dowodzi wymagalności długu ani możliwości wyegzekwowania opłaty.' },
  ],
};

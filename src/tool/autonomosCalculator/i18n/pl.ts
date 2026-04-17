import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'kalkulator-skladek-samozatrudnieni-hiszpania';
const title = 'Kalkulator Składek Autonomo 2026: System Realny RETA Hiszpania';
const description =
  'Darmowy symulator składek dla samozatrudnionych w Hiszpanii w 2026 roku. Oblicz swój realny dochód netto, progi składowe i miesięczną kwotę z nowym MEI na poziomie 0,9%.';

const faqData = [
  {
    question: 'Jak działa nowy system składek na rok 2026?',
    answer:
      'System opiera się na 15 progach realnego dochodu netto. Musisz zadeklarować prognozę swoich zysków (przychody minus koszty) i płacić składkę przypisaną do danego progu miesięcznego.',
  },
  {
    question: 'Co to jest MEI i jak wpływa na moją składkę autonomo?',
    answer:
      'Mechanizm Sprawiedliwości Międzypokoleniowej (MEI) to podatek celowy na emerytury. W 2026 roku wzrasta on do 0,9%, co nieznacznie podnosi składkę w porównaniu do 2025 roku dla wszystkich samozatrudnionych.',
  },
  {
    question: 'Ile razy w roku mogę zmienić podstawę opodatkowania?',
    answer:
      'Możesz zmieniać podstawę opodatkowania, a tym samym wysokość składki autonomo, do 6 razy w roku, aby dopasować ją do rzeczywistych zysków miesięcznych.',
  },
  {
    question: 'Co się stanie, jeśli mój rzeczywisty dochód będzie inny niż prognozowany?',
    answer:
      'Zakład Ubezpieczeń Społecznych (Seguridad Social) przeprowadzi coroczne rozliczenie, porównując dane z Urzędem Skarbowym. Jeśli zapłaciłeś za mało, zostaniesz wezwany do zapłaty różnicy; jeśli za dużo, nadpłata zostanie zwrócona automatycznie.',
  },
  {
    question: 'Czy ryczałt 80 euro (Tarifa Plana) nadal obowiązuje?',
    answer:
      'Tak, zredukowana stawka 80 € zostaje utrzymana dla nowych przedsiębiorców przez pierwsze 12 miesięcy działalności, z możliwością przedłużenia o kolejne 12 miesięcy, jeśli dochody są niższe od płacy minimalnej.',
  },
];

const howToData = [
  {
    name: 'Wpisz przychody i koszty',
    text: 'Wprowadź przewidywane miesięczne obroty oraz koszty uzyskania przychodu swojej działalności profesjonalnej.',
  },
  {
    name: 'Zdefiniuj profil działalności',
    text: 'Wybierz, czy jesteś indywidualnym przedsiębiorcą (7% odliczenia), czy administratorem spółki (3% odliczenia).',
  },
  {
    name: 'Zobacz swój realny próg',
    text: 'Symulator obliczy Twój dochód netto i wskaże próg składowy obowiązujący w 2026 roku.',
  },
  {
    name: 'Sprawdź wpływ MEI',
    text: 'Znasz ostateczne rozbicie składek, uwzględniające ubezpieczenia oraz nowy współczynnik sprawiedliwości międzypokoleniowej.',
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

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: 'Miesięczny przychód brutto',
    labelExpenses: 'Miesięczne koszty uzyskania przychodu',
    labelType: 'Profil pracownika',
    labelFlatRate: 'Stawka ryczałtowa (Nowy wpis)',
    optStandard: 'Autonomo indywidualny (7% odliczenia)',
    optSocietario: 'Administrator spółki (3% odliczenia)',
    optNoFlatRate: 'Nie dotyczy (Składka realna)',
    optFlatRate: 'Tak, pierwszy rok (80 €/miesiąc)',
    labelBracket: 'Twój próg dochodu netto',
    labelNetDisplay: 'Miesięczny dochód netto',
    labelCuota: 'Składka na ubezpieczenie społeczne',
    labelBase: 'Podstawa wymiaru składek',
    labelNetAfter: 'Realne netto (po składce)',
    labelProjection: 'PROGNOZOWANE 2026 (MEI 0,9%)',
    infoText:
      'System RETA 2026: Obliczenie obejmuje miesięczny dochód netto z odliczeniem kosztów ogólnych (7% lub 3%). Wyświetlana składka zawiera ubezpieczenie ogólne, ubezpieczenie wypadkowe, zawieszenie działalności, szkolenia oraz Mechanizm Sprawiedliwości Międzypokoleniowej (MEI) zaktualizowany do 0,9% na rok 2026.',
  },
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    {
      name: 'Seguridad Social: Nowy system składek',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: 'Agencia Tributaria: Dochody z działalności gospodarczej',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE: Dekret z mocą ustawy 13/2022 o reformie RETA',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Składek Autonomo 2026: Przewodnik po Nowym Systemie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bycie samozatrudnionym w Hiszpanii oznacza stawienie czoła jednemu z najbardziej dynamicznych i czasem mylących zadań: <strong>składkom na ubezpieczenie społeczne</strong>. Odkąd wszedł w życie nowy system oparty na <strong>realnym dochodzie netto</strong>, pojęcie „stałej składki” zniknęło, zastąpione modelem progresywnym.',
    },
    {
      type: 'title',
      text: 'Jak działa nowy system składek RETA?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Do 2023 roku każdy samozatrudniony mógł dowolnie wybierać podstawę wymiaru składek, co sprawiało, że większość płaciła minimum. Reforma ma na celu zapewnienie, że osoby o wysokich zarobkach wnoszą większy wkład, podczas gdy osoby o niższych dochodach widzą zmniejszenie swoich miesięcznych obciążeń.',
    },
    {
      type: 'paragraph',
      html: 'System opiera się na <strong>progach dochodu netto</strong>. Oznacza to, że Twoja składka nie zależy od przychodu brutto (obrotu), ale od tego, co faktycznie pozostaje Ci „na czysto” po odjęciu kosztów zawodowych i zastosowaniu dodatkowego odliczenia z tytułu kosztów ogólnych.',
    },
    {
      type: 'title',
      text: 'Kluczowe zmiany na 2026 rok: Współczynnik MEI',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rok 2026 oznacza konsolidację drugiej fazy reformy. Jedną z najbardziej istotnych aktualizacji jest wzrost <strong>Mechanizmu Sprawiedliwości Międzypokoleniowej (MEI)</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>Wzrost MEI:</strong> Na rok 2026 MEI wzrasta do 0,9%, co oznacza lekki wzrost składki w porównaniu do 2025 roku dla wszystkich progów.',
        '<strong>Przegląd progów:</strong> Progi dochodu netto zostają utrzymane, ale minimalne i maksymalne składki w każdym zakresie zostaną dostosowane, aby zbiegać się z systemem składek od dochodu realnego.',
        '<strong>Coroczne rozliczenie:</strong> Pod koniec roku Seguridad Social porówna dane z Urzędem Skarbowym. Jeśli zapłaciłeś za mało lub za dużo w stosunku do rzeczywistych zysków, zostanie wystawiony zwrot lub wezwanie do zapłaty.',
      ],
    },
    {
      type: 'title',
      text: 'Jak obliczyć swój miesięczny dochód netto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aby dokładnie korzystać z naszego kalkulatora, ważne jest zrozumienie, jaką kwotę należy wprowadzić. Formuła stosowana przez Seguridad Social to:',
    },
    {
      type: 'code',
      code: 'Dochód netto = (Przychód brutto - Koszty uzyskania przychodu) / (1 - Odliczenie kosztów ogólnych)',
    },
    {
      type: 'paragraph',
      html: '<strong>Odliczenie kosztów ogólnych</strong> wynosi <strong>7%</strong> dla indywidualnych przedsiębiorców i <strong>3%</strong> dla administratorów spółek.',
    },
    {
      type: 'card',
      title: 'Przykład obliczeń na 2026 rok',
      html: '<ul><li>Obrót: 4.000 € / Koszty: 1.000 €</li><li>Marża zysku: 3.000 €</li><li>Odliczenie ogólne (7%): 210 €</li><li>Dochód netto do obliczeń: 2.790 €</li><li><strong>Szacowana składka 2026:</strong> Próg 8, ok. 350 € + korekta MEI.</li></ul>',
    },
    {
      type: 'title',
      text: 'Zalety systemu progresywnego',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Lepsza ochrona socjalna:</strong> Składki płacone od bardziej realistycznych podstaw oznaczają, że zasiłki z tytułu czasowej niezdolności do pracy, macierzyństwa, ojcostwa, a zwłaszcza emerytura, będą znacznie wyższe.',
        '<strong>Pełna elastyczność:</strong> Możesz zmieniać podstawę wymiaru składek do 6 razy w roku. Jeśli przewidujesz drastyczny spadek dochodów, możesz przejść do niższego progu, aby uniknąć problemów z płynnością finansową.',
        '<strong>Ryczałt 80 €:</strong> Zostaje utrzymany dla nowych przedsiębiorców w pierwszym roku, co pozwala na start przy kontrolowanych kosztach stałych.',
      ],
    },
    {
      type: 'title',
      text: 'Administrator spółki vs Indywidualny samozatrudniony',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Administrator spółki</strong> (prowadzący spółkę SL) ma nieco wyższą minimalną podstawę wymiaru składek, a odliczenie kosztów ogólnych jest niższe (3%). Wynika to z faktu, że prawo uznaje, iż kontrola udziałowców daje im inną pozycję w stosunku do ryzyk rynkowych.',
    },
    {
      type: 'tip',
      html: '<strong>Porada pro:</strong> Jeśli Twoje dochody netto mocno się zmieniają z miesiąca na miesiąc, staraj się pozycjonować w rozsądnym, średnim progu. Późniejsze rozliczenie jest nieuniknione, ale w ten sposób unikniesz niespodziewanych płatności rzędu tysięcy euro, gdy na koniec roku przyjdzie „rachunek” od Seguridad Social.',
    },
    {
      type: 'title',
      text: 'Co zawiera Twoja miesięczna składka?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Ubezpieczenie ogólne (28,30%):</strong> Pokrywa nieobecności z powodu powszechnej choroby lub wypadków pozapracowniczych.',
        '<strong>Ubezpieczenia wypadkowe (1,30%):</strong> Wypadki przy pracy i choroby zawodowe.',
        '<strong>Zawieszenie działalności (0,90%):</strong> Odpowiednik zasiłku dla bezrobotnych dla samozatrudnionych.',
        '<strong>Szkolenia zawodowe (0,10%):</strong> Dostęp do kursów i szkoleń.',
        '<strong>MEI (0,90% w 2026 r.):</strong> Fundusz gwarantujący stabilność emerytur.',
      ],
    },
    {
      type: 'title',
      text: 'Proces rozliczenia (Urząd Skarbowy i Seguridad Social)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Co roku, po zakończeniu kampanii składania deklaracji podatkowych, Urząd Skarbowy przekazuje Twoje rzeczywiste dochody netto do Seguridad Social. Jeśli wybrałeś niższy próg niż ten wymagany przez Twoje realne dochody, otrzymasz wezwanie do zapłaty różnicy. Z kolei jeśli wpłaciłeś więcej niż wynikało z Twoich zysków, Seguridad Social automatycznie zwróci nadpłatę, bez konieczności składania przez Ciebie wniosku.',
    },
    {
      type: 'title',
      text: 'Podsumowanie i rekomendacje',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Kalkulator dla samozatrudnionych 2026</strong> to niezbędne narzędzie do planowania podatkowego dla każdego freelancera. Zalecamy korzystanie z tego symulatora za każdym razem, gdy podpisujesz ważny kontrakt lub zmieniasz koszty stałe, aby upewnić się, że Twoja składka autonomo jest zawsze zgodna z rzeczywistością Twojego biznesu.',
    },
  ],
};

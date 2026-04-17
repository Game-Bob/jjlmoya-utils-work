import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'factuur-generator';
const title = 'Gratis Factuur Generator voor Freelancers en Kleine Bedrijven';
const description =
  'Maak gratis online professionele facturen. Vul uw gegevens in, voeg diensten toe, stel btw en inhouding in en genereer een printklare PDF. Geen account nodig.';

const faqData = [
  {
    question: 'Welke informatie moet een professionele factuur bevatten?',
    answer:
      'Een professionele factuur moet een uniek factuurnummer, de factuurdatum, uw volledige bedrijfsnaam en contactgegevens (inclusief KvK- of btw-nummer), de bedrijfsgegevens van de klant, een gespecificeerde lijst van diensten of producten met aantallen en eenheidsprijzen, de toepasselijke btw en duidelijke betalingsvoorwaarden bevatten.',
  },
  {
    question: 'Moeten freelancers btw in rekening brengen voor diensten?',
    answer:
      'Dit hangt af van uw land en het type dienst. In de meeste EU-landen moet u btw in rekening brengen, tenzij u gebruikmaakt van een vrijstellingsregeling (zoals de KOR in Nederland). Raadpleeg een belastingadviseur voor uw specifieke situatie.',
  },
  {
    question: 'Wat is bronbelasting en wanneer is dit van toepassing?',
    answer:
      'Bronbelasting of inhouding is een belasting die de klant op uw betaling inhoudt en namens u aan de belastingdienst afdraagt. Dit komt vaker voor in landen als Spanje of bij bepaalde internationale diensten.',
  },
  {
    question: 'Moet ik mijn burgerservicenummer (BSN) op facturen vermelden?',
    answer:
      'Nee, het is veiliger en professioneler om een btw-identificatienummer of KvK-nummer te gebruiken in plaats van uw BSN. Het gebruik van een BSN op facturen wordt sterk afgeraden in verband mit privacy.',
  },
];

const howToData = [
  {
    name: 'Voer uw bedrijfsinformatie in',
    text: 'Klik op "Mijn Bedrijf BV" en vervang dit door uw werkelijke bedrijfsnaam, btw-nummer, adres en e-mailadres.',
  },
  {
    name: 'Vul de gegevens van uw klant in',
    text: 'Onder "Factuur aan:", klik op elk veld om de bedrijfsnaam van de klant, het btw-nummer, het adres en e-mailadres in te voeren.',
  },
  {
    name: 'Voeg diensten toe en stel tarieven in',
    text: 'Beschrijf elke dienst in de tabel, stel het aantal en de eenheidsprijs in. Klik op "Rij toevoegen" voor extra posten.',
  },
  {
    name: 'Controleer totalen en genereer PDF',
    text: 'Controleer of alle bedragen correct zijn, stel het btw-percentage in en klik op "Genereer PDF" om de factuur op te slaan of te printen.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: 'Interactieve Editor',
    labelEditHint: 'Klik op een tekst in het document om deze direct te bewerken.',
    btnGenerate: 'Genereer PDF',
    labelFrom: 'Van:',
    labelTo: 'Factuur aan:',
    labelDesc: 'Beschrijving van Dienst of Product',
    labelQty: 'Aantal',
    labelPrice: 'Prijs',
    labelAmount: 'Bedrag',
    btnAddRow: 'Rij toevoegen',
    labelSubtotal: 'Subtotaal:',
    labelTax: 'BTW',
    labelWithholding: 'Inhouding',
    labelTotal: 'Totaal:',
    defaultInvoiceTitle: 'FACTUUR',
    defaultInvoiceNum: 'FAC-24-001',
    defaultCompanyName: 'Mijn Bedrijf BV',
    defaultCompanyId: 'BTW NL123456789B01',
    defaultAddress: 'Hoofdstraat 1',
    defaultCity: '1011 AB Amsterdam',
    defaultEmail: 'info@mijnbedrijf.nl',
    placeholderDesc: 'Voeg beschrijving toe...',
    placeholderNotes: 'bijv. Betaling binnen 30 dagen via bankoverschrijving...',
    labelNotes: 'Opmerkingen / Betalingsvoorwaarden',
    currencySymbol: '€',
    defaultTaxRate: '21',
    defaultRetRate: '0',
  },
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen',
  bibliography: [
    { name: 'Eisen aan een factuur - Belastingdienst', url: 'https://www.belastingdienst.nl/' },
    { name: 'Factureren voor ondernemers - KvK', url: 'https://www.kvk.nl/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Essentiële Elementen van een Professionele Factuur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een geldige zakelijke factuur is meer dan alleen een betalingsverzoek — het is een juridisch document dat zowel u als uw klant beschermt. Het ontbreken van verplichte velden kan de betaling vertragen, problemen met de belastingdienst veroorzaken of de factuur zelfs ongeldig maken. Voor freelancers is het van cruciaal belang om dit vanaf dag één goed te doen.',
    },
    {
      type: 'card',
      title: 'Verplichte Velden op een Factuur',
      html: '<ul><li><strong>Factuurnummer:</strong> Moet opeenvolgend zijn zonder gaten (bijv. 2024-001, 2024-002).</li><li><strong>Factuurdatum:</strong> De datum waarop u de factuur verstuurt.</li><li><strong>Info verkoper en koper:</strong> Volledige naam, btw-nummer en adres van beide partijen.</li><li><strong>Gespecificeerde diensten:</strong> Beschrijving, aantal en prijs per item.</li><li><strong>Betalingsvoorwaarden:</strong> Vervaldatum en geaccepteerde betalingsmethoden.</li></ul>',
    },
    {
      type: 'title',
      text: 'BTW en Inhoudingen op Facturen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Twee factoren beïnvloeden uw uiteindelijke betalingsbedrag. <strong>BTW</strong> wordt geïnd bij de klant und afgedragen aan de staat — het verhoogt de kosten voor de klant. <strong>Inhoudingen</strong> (zoals bronbelasting) worden door de klant op uw betaling ingehouden — dit vermindert het bedrag dat u daadwerkelijk ontvangt, maar geldt als vooruitbetaling van uw inkomstenbelasting.',
    },
    {
      type: 'code',
      code: 'Geleverde diensten            € 1.000,00\n+ BTW (21%)                    € 210,00\n- Inhouding                     € 0,00\n------------------------------------------\nNetto ontvangen betaling       € 1.210,00',
    },
    {
      type: 'title',
      text: 'Uw Identiteit Beschermen als Freelancer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gebruik altijd uw btw-identificatienummer of KvK-nummer op facturen. Dit zorgt ervoor dat uw BSN niet onnodig wordt verspreid op documenten die met meerdere personen binnen de organisatie van de klant gedeeld kunnen worden.',
    },
    {
      type: 'tip',
      html: '<strong>Sla elke factuur op als PDF:</strong> De belastingdienst vereist dat u zakelijke administratie minimaal 7 jaar bewaart. Gebruik de knop "Genereer PDF" na elke factuur en sla deze op in een map georganiseerd per jaar en klant.',
    },
  ],
};

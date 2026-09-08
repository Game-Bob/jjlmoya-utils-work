import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'kalkylator-forseningsavgift-faktura';
const title = 'Kalkylator för förseningsavgift på faktura';
const description = 'Beräkna en enkel förseningsavgift från en förfallen faktura, en anståndsperiod och den räntesats som avtalats. Se debiterade dagar, avgift och totalsumma i en tydlig sammanställning.';

const faq = [
  { question: 'Hur fungerar beräkningen av förseningsavgiften?', answer: 'Kalkylatorn drar av anståndsdagarna från kalenderdagarna mellan förfallodagen och beräkningsdagen. För årliga eller månatliga satser fördelas den avtalade procentsatsen över de debiterade dagarna. En engångssats tillämpas en gång när anståndet har löpt ut.' },
  { question: 'Kan jag använda en lagstadgad förseningsränta?', answer: 'Ja, om du har kontrollerat räntan och avtalet eller tillämplig lag tillåter att den används. Ange räntan själv. Verktyget väljer inget land, gissar inte en lagstadgad ränta och avgör inte om avgiften kan krävas.' },
  { question: 'Vad ändrar anståndsperioden?', answer: 'Anståndsdagarna tas bort från tiden efter förfallodagen innan avgiften börjar räknas. Om fakturan fortfarande ligger inom perioden förblir avgiften noll och resultatet visar att anståndet pågår.' },
  { question: 'Ingår skatt, inkassokostnader eller ränta på ränta i totalen?', answer: 'Nej. Resultatet är kapitalbeloppet i vald valuta plus den enkla avgiften från dina uppgifter. Valutabyte använder en fast vägledande faktor, inte en aktuell växelkurs. Skatt, fasta inkassokostnader, juridiska kostnader, ränta på ränta och betalningshistorik läggs inte till.' },
];

const howTo = [
  { name: 'Ange fakturabeloppet', text: 'Lägg till det obetalda kapitalet och välj fakturans valuta. Om du byter valuta senare räknas beloppet om med den visade vägledande faktorn, inte med en aktuell valutakurs.' },
  { name: 'Ställ in datumen', text: 'Välj avtalad förfallodag och det datum som du kontrollerar kontot till. Verktyget räknar hela kalenderdagar mellan datumen.' },
  { name: 'Lägg till anstånd och ränta', text: 'Ange anståndsdagar och den procentsats som avtalats för fakturan. Välj om satsen gäller per år, per månad eller som en engångsavgift.' },
  { name: 'Kontrollera sammanställningen', text: 'Granska dagar sedan förfallodagen, debiterade dagar, avgift och totalsumma. Spara sammanställningen med fakturan och kontrollera avtalet innan du skickar ett krav.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' }, inLanguage: 'sv' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'FÖRFALLEN FAKTURA / ENKEL SAMMANSTÄLLNING',
    intro: 'Gör en missad förfallodag till ett tydligt krav.',
    sectionTerms: 'Ställ in fakturans villkor',
    labelAmount: 'Obetalt fakturabelopp',
    labelCurrency: 'Fakturavaluta',
    currencyConversionHint: 'Ett valutabyte räknar om beloppet med en fast vägledande faktor, inte med en aktuell växelkurs.',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}.',
    labelDueDate: 'Avtalad förfallodag',
    labelCalculationDate: 'Beräkna till',
    labelGraceDays: 'Anståndsperiod',
    labelRate: 'Avtalad förseningsavgift',
    labelRatePeriod: 'Satsen gäller',
    rateAnnual: 'Per år',
    rateMonthly: 'Per månad',
    rateOneTime: 'En gång',
    sectionReceipt: 'Kravsammanställning',
    labelDaysSinceDue: 'Dagar sedan förfallodagen',
    labelChargedDays: 'Debiterade dagar',
    labelAppliedRate: 'Tillämpad sats',
    labelLateFee: 'Förseningsavgift',
    labelTotalDue: 'Totalsumma att kräva',
    statusNotDue: 'Inte förfallen',
    statusGrace: 'Fortfarande inom anstånd',
    statusOverdue: 'Avgiften räknas',
    timelineDue: 'Förfallodag',
    timelineToday: 'Kontrollerat till',
    timelineGrace: 'debiterbara dagar efter anstånd',
    noteDisclaimer: 'Enkel uppskattning från dina uppgifter. Bekräfta avtal, jurisdiktion, skattehantering och eventuella fasta inkassokostnader innan du framställer ett krav.',
    buttonReset: 'Rensa sparade villkor',
    numberLocale: 'sv-SE',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: 'Förklara en förfallen faktura enkelt', level: 2 },
    { type: 'paragraph', html: 'Ett betalningskrav är lättare att granska när kapital, datum, anstånd, räntesats och avgift syns på samma ställe. Den här kalkylatorn omvandlar avtalsvillkoren till en liten sammanställning i kvittostil.' },
    { type: 'card', title: 'Den enkla formeln', html: '<p><strong>Debiterbara dagar</strong> = dagar mellan förfallodag och beräkningsdag - anståndsdagar.</p><p><strong>Förseningsavgift</strong> = fakturabelopp × sats ÷ 100 × tidsfaktor. Årliga satser använder debiterbara dagar ÷ 365, månatliga satser använder dagar ÷ 30 och engångssatser tillämpas en gång efter anståndet.</p>' },
    { type: 'paragraph', html: 'Beräkningen är medvetet tydlig och väljer ingen lagstadgad ränta åt dig. Ett avtal kan använda ett fast belopp, en årsränta eller en annan beräkning av dagar. Valutakonvertering är bara en vägledande hjälp baserad på vald faktor, inte en aktuell valutakurs. Om avtalet säger något annat ska du kontrollera klausulen och anpassa beräkningen utanför verktyget.' },
    { type: 'title', text: 'Kontrollera resultatet innan du kräver betalning', level: 2 },
    { type: 'code', code: 'Faktura: 1 250 kr\nTill kontroll: 38 dagar\nAnstånd: 5 dagar\nÅrsränta: 10 %\nDebiterbara dagar: 33\nAvgift: 1 250 kr × 0,10 × 33 / 365 = 11,30 kr\nTotalt: 1 261,30 kr' },
    { type: 'list', items: ['Jämför förfallodagen med den signerade beställningen, fakturan eller avtalet.', 'Använd det faktiska datumet då du förbereder kravet, inte ett antaget betalningsdatum.', 'Håll kapital och avgift separerade så att mottagaren kan stämma av båda beloppen.', 'Kontrollera om skatt, fasta återvinningskostnader eller lagliga gränser ändrar vad du kan kräva.'] },
    { type: 'tip', html: '<strong>Dokumentationstips:</strong> spara faktura, leverans- eller mottagningsbevis, avtalsklausul och den här beräkningen tillsammans. Verktyget förklarar aritmetiken men bevisar inte att skulden är förfallen eller att avgiften kan krävas.' },
  ],
};

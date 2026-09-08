import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'calculator-laatbetalingskosten-factuur';
const title = 'Calculator voor kosten bij een te late factuur';
const description = 'Bereken een eenvoudige toeslag voor een verlopen factuur met een respijtperiode en het tarief uit je overeenkomst. Bekijk de berekende dagen, kosten en het totaal in een duidelijk overzicht.';

const faq = [
  { question: 'Hoe werkt de berekening van kosten voor een te late factuur?', answer: 'De calculator trekt de respijtdagen af van de kalenderdagen tussen de vervaldatum en de berekeningsdatum. Bij een jaarlijks of maandelijks tarief wordt het afgesproken percentage naar de berekende dagen omgerekend. Een eenmalig tarief wordt na de respijtperiode één keer toegepast.' },
  { question: 'Kan ik een wettelijke vertragingsrente gebruiken?', answer: 'Ja, als je het tarief hebt gecontroleerd en de overeenkomst of toepasselijke wet het gebruik toestaat. Voer het tarief zelf in. De tool kiest geen land, raadt geen wettelijk tarief en bepaalt niet of de toeslag afdwingbaar is.' },
  { question: 'Wat verandert de respijtperiode?', answer: 'Respijtdagen worden afgetrokken van de periode na de vervaldatum voordat de toeslag begint. Valt de factuur nog binnen die periode, dan blijft de toeslag nul en zie je dat de respijtperiode nog loopt.' },
  { question: 'Zitten belasting, incassokosten of samengestelde rente in het totaal?', answer: 'Nee. Het resultaat is de hoofdsom in de gekozen valuta plus de eenvoudige toeslag uit je invoer. Een valutawijziging gebruikt een vaste indicatieve factor, geen actuele wisselkoers. Belastingen, vaste incassokosten, juridische kosten, samengestelde rente en betaalgeschiedenis worden niet toegevoegd.' },
];

const howTo = [
  { name: 'Voer het factuurbedrag in', text: 'Voeg de openstaande hoofdsom toe en kies de valuta van de factuur. Als je later van valuta wisselt, wordt het bedrag omgerekend met de getoonde indicatieve factor, niet met een live valutakoers.' },
  { name: 'Stel de datums in', text: 'Kies de contractuele vervaldatum en de datum tot waarop je de rekening controleert. De tool telt volledige kalenderdagen tussen beide datums.' },
  { name: 'Voeg respijt en tarief toe', text: 'Vul de respijtdagen en het afgesproken percentage voor de factuur in. Kies of het tarief per jaar, per maand of eenmalig geldt.' },
  { name: 'Controleer het overzicht', text: 'Bekijk de dagen sinds de vervaldatum, berekende dagen, toeslag en totaal. Bewaar het overzicht bij de factuur en controleer de overeenkomst voordat je een claim verstuurt.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'nl' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'VERLOPEN FACTUUR / EENVOUDIG OVERZICHT',
    intro: 'Maak van een gemiste vervaldatum een duidelijke vordering.',
    sectionTerms: 'Stel de factuurvoorwaarden in',
    labelAmount: 'Openstaand factuurbedrag',
    labelCurrency: 'Factuurvaluta',
    currencyConversionHint: 'Een valutawijziging rekent het bedrag om met een vaste indicatieve factor, niet met een actuele wisselkoers.',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}.',
    labelDueDate: 'Contractuele vervaldatum',
    labelCalculationDate: 'Berekenen tot',
    labelGraceDays: 'Respijtperiode',
    labelRate: 'Afgesproken tarief voor te late betaling',
    labelRatePeriod: 'Tarief geldt',
    rateAnnual: 'Per jaar',
    rateMonthly: 'Per maand',
    rateOneTime: 'Eenmalig',
    sectionReceipt: 'Incasso-overzicht',
    labelDaysSinceDue: 'Dagen sinds vervaldatum',
    labelChargedDays: 'Berekende dagen',
    labelAppliedRate: 'Toegepast tarief',
    labelLateFee: 'Toeslag wegens te late betaling',
    labelTotalDue: 'Totaal te vorderen',
    statusNotDue: 'Niet verlopen',
    statusGrace: 'Nog binnen de respijtperiode',
    statusOverdue: 'Toeslag loopt',
    timelineDue: 'Vervaldatum',
    timelineToday: 'Gecontroleerd tot',
    timelineGrace: 'berekenbare dagen na respijt',
    noteDisclaimer: 'Eenvoudige schatting op basis van je invoer. Controleer overeenkomst, rechtsgebied, fiscale behandeling en vaste incassokosten voordat je een vordering indient.',
    buttonReset: 'Opgeslagen voorwaarden wissen',
    numberLocale: 'nl-NL',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: 'Leg een verlopen factuur eenvoudig uit', level: 2 },
    { type: 'paragraph', html: 'Een betalingsverzoek is makkelijker te controleren wanneer hoofdsom, datums, respijtperiode, tarief en toeslag op één plek zichtbaar zijn. Deze calculator zet die contractvoorwaarden om in een klein overzicht in ontvangstbewijsstijl.' },
    { type: 'card', title: 'De eenvoudige formule', html: '<p><strong>Berekenbare dagen</strong> = dagen tussen vervaldatum en berekeningsdatum - respijtdagen.</p><p><strong>Toeslag</strong> = factuurbedrag × tarief ÷ 100 × tijdfactor. Jaarlijkse tarieven gebruiken berekenbare dagen ÷ 365, maandelijkse tarieven berekenbare dagen ÷ 30 en eenmalige tarieven gelden één keer na het respijt.</p>' },
    { type: 'paragraph', html: 'De berekening is bewust duidelijk en kiest geen wettelijke rente voor je. Een overeenkomst kan een vast bedrag, een jaartarief of een andere dagentelling gebruiken. Valutaconversie is alleen een indicatieve hulp op basis van de gekozen factor, geen actuele valutakoers. Als je overeenkomst iets anders zegt, controleer dan de clausule en pas de berekening buiten deze tool aan.' },
    { type: 'title', text: 'Controleer het resultaat voordat je claimt', level: 2 },
    { type: 'code', code: 'Factuur: €1.250\nTot controle: 38 dagen\nRespijtperiode: 5 dagen\nJaarlijks tarief: 10%\nBerekenbare dagen: 33\nToeslag: €1.250 × 0,10 × 33 / 365 = €11,30\nTotaal: €1.261,30' },
    { type: 'list', items: ['Vergelijk de vervaldatum met de ondertekende bestelling, factuur of overeenkomst.', 'Gebruik de datum waarop je de claim werkelijk voorbereidt, niet een veronderstelde betaaldatum.', 'Houd hoofdsom en toeslag apart zodat de ontvanger beide bedragen kan afstemmen.', 'Controleer of belasting, vaste herstelkosten of wettelijke grenzen veranderen wat je kunt vorderen.'] },
    { type: 'tip', html: '<strong>Bewijstip:</strong> bewaar factuur, bewijs van levering of aanvaarding, contractclausule en deze berekening bij elkaar. De tool legt de rekenkunde uit, maar bewijst niet dat de schuld opeisbaar is of dat de toeslag afdwingbaar is.' },
  ],
};

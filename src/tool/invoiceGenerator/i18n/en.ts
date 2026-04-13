import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'invoice-generator';
const title = 'Free Invoice Generator for Freelancers and Small Business';
const description =
  'Create professional invoices online for free. Fill in your details, add services, set sales tax and withholding, then generate a print-ready PDF. No account required.';

const faqData = [
  {
    question: 'What information must a professional US invoice include?',
    answer:
      'A professional invoice must include a unique invoice number, the invoice date, your full business name and contact information (including EIN or SSN), the client\'s business information, an itemized list of services or products with quantities and unit prices, the applicable sales tax, and clear payment terms.',
  },
  {
    question: 'Do freelancers need to charge sales tax on services?',
    answer:
      'It depends on your state and the type of service. Most US states require sales tax on physical products, but services are taxed differently by state. Many professional services such as consulting, design, and software development are exempt in most states. Check your state\'s tax authority or consult a CPA for your specific situation.',
  },
  {
    question: 'What is backup withholding and when does it apply?',
    answer:
      'Backup withholding (currently 24%) is a federal income tax that clients may withhold from your payment and remit to the IRS on your behalf. It typically applies when you have not provided a valid Taxpayer Identification Number (TIN), or when the IRS has notified the payer to withhold.',
  },
  {
    question: 'Should I use my SSN or EIN on invoices?',
    answer:
      'It is safer to use an EIN (Employer Identification Number) rather than your Social Security Number on invoices. You can apply for a free EIN from the IRS at irs.gov. Clients who pay you $600 or more in a year will need your tax ID for 1099-NEC reporting, so having an EIN protects your personal information.',
  },
];

const howToData = [
  {
    name: 'Enter your business information',
    text: 'Click on "My Company LLC" and replace it with your actual business name, EIN or Tax ID, mailing address, and contact email.',
  },
  {
    name: 'Fill in your client details',
    text: 'Under "Bill To:", click each field to enter the client company name, Tax ID, address, and contact email.',
  },
  {
    name: 'Add services and set rates',
    text: 'Describe each service in the table, set the quantity and unit price. Click "Add Row" to include additional line items.',
  },
  {
    name: 'Review totals and generate PDF',
    text: 'Verify all amounts are correct, set the Sales Tax percentage if applicable, and click "Generate PDF" to print or save as PDF.',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: 'Interactive Editor',
    labelEditHint: 'Click on any text in the document to edit it directly.',
    btnGenerate: 'Generate PDF',
    labelFrom: 'From:',
    labelTo: 'Bill To:',
    labelDesc: 'Description of Service or Product',
    labelQty: 'Qty.',
    labelPrice: 'Price',
    labelAmount: 'Amount',
    btnAddRow: 'Add Row',
    labelSubtotal: 'Subtotal:',
    labelTax: 'Sales Tax',
    labelWithholding: 'Withholding',
    labelTotal: 'Total:',
    defaultInvoiceTitle: 'INVOICE',
    defaultInvoiceNum: 'INV-24-001',
    defaultCompanyName: 'My Company LLC',
    defaultCompanyId: 'EIN 12-3456789',
    defaultAddress: '123 Main Street',
    defaultCity: 'New York, NY 10001',
    defaultEmail: 'admin@mycompany.com',
    placeholderDesc: 'Add description...',
    placeholderNotes: 'e.g. Payment due within 30 days via bank transfer or check...',
    labelNotes: 'Notes / Payment Terms',
    currencySymbol: '$',
    defaultTaxRate: '0',
    defaultRetRate: '0',
  },
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography: [
    { name: 'IRS Publication 583 Starting a Business and Keeping Records', url: 'https://www.irs.gov/pub/irs-pdf/p583.pdf' },
    { name: 'IRS Self-Employed Individuals Tax Center', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Essential Elements of a Professional US Invoice',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A valid business invoice is more than just a payment request — it is a legal document that protects both you and your client. Missing a required field can delay payment, cause tax reporting issues, or even make the invoice unenforceable. For freelancers and independent contractors, getting this right from day one is critical.',
    },
    {
      type: 'card',
      title: 'Required Fields on a US Invoice',
      html: '<ul><li><strong>Invoice number:</strong> Must be sequential with no gaps (e.g. INV-2024-001, INV-2024-002).</li><li><strong>Invoice date:</strong> The date you issue the invoice, not the date of service.</li><li><strong>Seller and buyer info:</strong> Full legal name, EIN or Tax ID, and mailing address for both parties.</li><li><strong>Itemized services:</strong> Description, quantity, and unit price for each line item.</li><li><strong>Payment terms:</strong> Due date, accepted payment methods, and any late fee policy.</li></ul>',
    },
    {
      type: 'title',
      text: 'Sales Tax and Withholding on Freelance Invoices',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Two tax variables affect your final payment amount. <strong>Sales tax</strong> is collected from the client and remitted to your state — it adds to the client\'s cost. <strong>Backup withholding</strong> is deducted from your payment by the client and sent to the IRS — it reduces what you actually receive. Most freelancers providing professional services do not charge sales tax, but always verify with your state\'s Department of Revenue.',
    },
    {
      type: 'code',
      code: 'Services rendered          $1,000.00\n+ Sales Tax (6%)              $60.00\n- Backup Withholding (24%)  -$240.00\n-----------------------------------------\nNet payment received         $820.00',
    },
    {
      type: 'title',
      text: 'Protecting Your Tax Identity as a Freelancer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When a client pays you $600 or more in a calendar year, they are required to file a 1099-NEC with the IRS and provide you a copy. They will ask for your tax identification number. <strong>Always use an EIN instead of your SSN</strong> whenever possible — it keeps your Social Security Number off documents that are shared with multiple parties. Applying for an EIN is free and takes minutes at irs.gov.',
    },
    {
      type: 'tip',
      html: '<strong>Save every invoice as PDF:</strong> The IRS recommends keeping business records for at least 3 years (up to 7 years for employment taxes). Use the Generate PDF button after each invoice and save it to a dedicated folder organized by year and client.',
    },
  ],
};

import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'fatura-olusturucu';
const title = 'Freelancerlar ve Küçük İşletmeler için Ücretsiz Fatura Oluşturucu';
const description =
  'Ücretsiz olarak profesyonel çevrimiçi faturalar oluşturun. Bilgilerinizi doldurun, hizmet ekleyin, vergileri ve kesintileri ayarlayın, ardından yazdırmaya hazır bir PDF oluşturun. Hesap oluşturmanıza gerek yok.';

const faqData = [
  {
    question: 'Profesyonel bir faturada hangi bilgiler yer almalıdır?',
    answer:
      'Profesyonel bir fatura benzersiz bir fatura numarası, fatura tarihi, tam işletme adınız ve iletişim bilgileriniz (Vergi No veya T.C. No dahil), müşterinin işletme bilgileri, miktarları ve birim fiyatlarıyla birlikte kalemlere ayrılmış hizmet veya ürün listesi, uygulanan vergiler ve net ödeme koşullarını içermelidir.',
  },
  {
    question: 'Freelancerların hizmetleri için KDV hesaplaması gerekir mi?',
    answer:
      "Bu durum ülkenize ve hizmet türüne bağlıdır. Türkiye'de bir işletmeniz varsa (şahıs şirketi vb.), faturanızda KDV hesaplamanız ve bunu beyan etmeniz gerekir. Muafiyet durumları için bir mali müşavire danışmanız önerilir.",
  },
  {
    question: 'Stopaj nedir ve ne zaman uygulanır?',
    answer:
      'Stopaj (vergi kesintisi), müşterinin ödemenizden bir kısmını kesip sizin adınıza vergi dairesine yatırmasıdır. Serbest meslek makbuzu düzenleyen profesyoneller için yaygın bir uygulamadır.',
  },
  {
    question: 'Faturalarda T.C. Kimlik No mu yoksa Vergi No mu kullanmalıyım?',
    answer:
      'Bir şirketiniz varsa Vergi Numarasını kullanmanız daha profesyoneldir ve kişisel veri güvenliği açısından daha güvenlidir. Şahıs şirketiyseniz bağlı olduğunuz vergi dairesi ve numaranız faturada belirtilmelidir.',
  },
];

const howToData = [
  {
    name: 'İşletme bilgilerinizi girin',
    text: '"Şirketim LTD" kısmına tıklayın ve gerçek işletme adınız, vergi numaranız, adresiniz ve iletişim e-postanızla değiştirin.',
  },
  {
    name: 'Müşteri detaylarını doldurun',
    text: '"Fatura Edilen:" altındaki her alana tıklayarak müşteri şirket adını, vergi numarasını, adresi ve e-postayı girin.',
  },
  {
    name: 'Hizmetleri ekleyin ve fiyatları belirleyin',
    text: 'Tabloda her bir hizmeti tanımlayın, miktar ve birim fiyatı ayarlayın. Ek kalemler eklemek için "Satır Ekle"ye tıklayın.',
  },
  {
    name: 'Toplamları inceleyin ve PDF oluşturun',
    text: 'Tüm tutarların doğru olduğunu doğrulayın, varsa Vergi oranını ayarlayın ve yazdırmak veya kaydetmek için "PDF Oluştur"a tıklayın.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: 'Etkileşimli Düzenleyici',
    labelEditHint: 'Düzenlemek için belgedeki herhangi bir metne tıklayın.',
    btnGenerate: 'PDF Oluştur',
    labelFrom: 'Gönderen:',
    labelTo: 'Fatura Edilen:',
    labelDesc: 'Hizmet veya Ürün Açıklaması',
    labelQty: 'Adet',
    labelPrice: 'Fiyat',
    labelAmount: 'Tutar',
    btnAddRow: 'Satır Ekle',
    labelSubtotal: 'Ara Toplam:',
    labelTax: 'Vergi',
    labelWithholding: 'Stopaj',
    labelTotal: 'Toplam:',
    defaultInvoiceTitle: 'FATURA',
    defaultInvoiceNum: 'FAT-24-001',
    defaultCompanyName: 'Şirketim LTD',
    defaultCompanyId: 'Vergi No: 1234567890',
    defaultAddress: 'Ana Cadde No: 123',
    defaultCity: 'İstanbul, 34000',
    defaultEmail: 'bilgi@sirketim.com',
    placeholderDesc: 'Açıklama ekleyin...',
    placeholderNotes: 'ör. Ödeme 30 gün içinde banka havalesi ile yapılmalıdır...',
    labelNotes: 'Notlar / Ödeme Koşulları',
    currencySymbol: '₺',
    defaultTaxRate: '20',
    defaultRetRate: '0',
  },
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: 'Gib - Fatura Düzenleme Esasları', url: 'https://www.gib.gov.tr/' },
    { name: 'Freelancerlar için Vergi Rehberi', url: 'https://www.gib.gov.tr/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Profesyonel Bir Faturanın Temel Unsurları',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Geçerli bir işletme faturası sadece bir ödeme talebi değildir; hem sizi hem de müşterinizi koruyan yasal bir belgedir. Gerekli bir alanın eksik olması ödemeyi geciktirebilir, vergi raporlama sorunlarına neden olabilir. Freelancerlar ve bağımsız yükleniciler için bunu ilk günden doğru yapmak kritiktir.',
    },
    {
      type: 'card',
      title: 'Bir Faturada Gerekli Alanlar',
      html: '<ul><li><strong>Fatura numarası:</strong> Arada boşluk olmadan sıralı olmalıdır (ör. FAT-2024-001).</li><li><strong>Fatura tarihi:</strong> Faturayı düzenlediğiniz tarih.</li><li><strong>Satıcı ve alıcı bilgileri:</strong> Her iki tarafın tam yasal adı, Vergi No ve adresi.</li><li><strong>Kalemlere ayrılmış hizmetler:</strong> Her bir satır öğesi için açıklama, miktar ve birim fiyat.</li><li><strong>Ödeme koşulları:</strong> Son ödeme tarihi ve kabul edilen ödeme yöntemleri.</li></ul>',
    },
    {
      type: 'title',
      text: 'Freelance Faturalarında Vergiler ve Kesintiler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İki vergi değişkeni nihai ödeme tutarınızı etkiler. <strong>KDV</strong> müşteriden tahsil edilir ve devlete ödenir. <strong>Stopaj</strong> ise müşteri tarafından ödemenizden düşülür ve sizin adınıza vergi dairesine gönderilir; bu, aslında aldığınız net ödemeyi azaltır ancak sizin peşin ödenmiş verginiz sayılır.',
    },
    {
      type: 'code',
      code: 'Verilen Hizmetler              1.000,00 ₺\n+ KDV (%20)                      200,00 ₺\n- Stopaj (%20)                  -200,00 ₺\n------------------------------------------\nAlınan Net Ödeme                1.000,00 ₺',
    },
    {
      type: 'title',
      text: 'Vergi Kimliğinizi Korumak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mümkünse şahsi bilgileriniz yerine işletme vergi numaranızı kullanın. Bu, kişisel verilerinizin müşteri organizasyonu içindeki birçok kişiyle paylaşılan belgelerde kalmamasını sağlar.',
    },
    {
      type: 'tip',
      html: "<strong>Her faturayı PDF olarak kaydedin:</strong> Vergi kanunları işletme kayıtlarının belirli bir süre (Türkiye'de genellikle 5 yıl) saklanmasını gerektirir. Her faturadan sonra PDF Oluştur butonunu kullanın ve yıl ve müşteri bazında düzenlenmiş bir klasöre kaydedin.",
    },
  ],
};

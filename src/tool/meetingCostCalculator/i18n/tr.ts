import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'toplanti-maliyeti-hesaplayici';
const title = 'Gerçek Zamanlı Toplantı Maliyeti Sayacı';
const description =
  'Toplantınızın ne kadara mal olduğunu gerçek zamanlı olarak görün. Katılımcı sayısını ve ortalama maaşı girerek her saniye tutarın nasıl arttığını izleyin.';

const faqData = [
  {
    question: 'Toplantı maliyetini ölçmek neden yararlıdır?',
    answer:
      'Toplantı süresine parasal bir değer biçmek, üretkenlik bilinci oluşturur. Gereksiz toplantıların azaltılmasına yardımcı olur, dakikliği teşvik eder ve tartışılan konuların ekibin ekonomik yatırımını haklı çıkarıp çıkarmadığını görmeyi sağlar.',
  },
  {
    question: 'Gerçek zamanlı maliyet nasıl hesaplanır?',
    answer:
      'Sistem, her katılımcının tahmini yıllık veya saatlik maaşını alır ve saniye başına bir harcama oranı hesaplar. Sayaç, biriken maliyeti gerçek zamanlı olarak göstermek için her animasyon karesinde güncellenir.',
  },
  {
    question: 'Bu araç hangi dolaylı maliyetleri içermez?',
    answer:
      'Bu hesaplayıcı doğrudan maaş maliyetine odaklanır. Fırsat maliyetini (çalışanların o sırada üretebileceği diğer değerler) veya ofis kirası, yazılım lisansları gibi sabit genel giderleri içermez.',
  },
  {
    question: 'Toplantı maliyetlerini nasıl azaltabilirim?',
    answer:
      'Net bir gündem belirleyin, katılımcıları yalnızca gerekli ana kadroyla sınırlayın, katı bir süre sınırı koyun ve asenkron bir mesajın veya e-postanın aynı sonucu verip vermeyeceğini değerlendirin.',
  },
];

const howToData = [
  {
    name: 'Katılımcı sayısını girin',
    text: 'Şu anda toplantıya katılan kişi sayısını yazın.',
  },
  {
    name: 'Ortalama maaşı ayarlayın',
    text: 'Doğru bir hesaplama için katılımcıların ortalama yıllık brüt maaşını veya saatlik ücretini girin.',
  },
  {
    name: 'Sayacı başlatın',
    text: 'Toplantı başlar başlamaz Başlat düğmesine basın ve maliyetin gerçek zamanlı birikmesini izleyin.',
  },
  {
    name: 'Durdurun ve değerlendirin',
    text: 'Toplantı bittiğinde sayacı durdurun. Toplam maliyeti gözden geçirin ve ulaşılan sonuçların bu yatırıma değip değmediğini değerlendirin.',
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

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: 'Biriken Maliyet',
    labelAttendees: 'Katılımcılar',
    labelSalary: 'Ortalama Maaş',
    optAnnual: 'Yıllık Brüt',
    optHourly: 'Saatlik Ücret',
    btnStart: 'Toplantıyı Başlat',
    btnPause: 'Duraklat',
    btnResume: 'Devam Et',
    btnReset: 'Sıfırla',
    currencySymbol: '₺',
    defaultSalary: '250000',
    numberLocale: 'tr-TR',
  },
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: 'Meeting Madness'ı Durdurun (HBR)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'İş Yerinde Zaman Kaybı (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Toplantı Maliyetini Neden Görselleştirmeli?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zaman, herhangi bir organizasyondaki en pahalı ve en az yenilenebilir kaynaktır. Bu araç iş birliğini caydırmak için değil, <strong>üretkenlik bilincini</strong> teşvik etmek için tasarlanmıştır. Paranın gerçek zamanlı olarak "yanışını" izlediğimizde, daha dakik, daha özlü ve gündem konusunda daha dikkatli oluruz.',
    },
    {
      type: 'card',
      title: 'Gizli Maliyet Matematiği',
      html: '<p>Maliyeti yıllık brüt maaş veya saatlik ücret bazında hesaplıyoruz. Yıllık maaşlar için, maaşı saatlik ücrete dönüştürmek amacıyla endüstri standardı olan <strong>yıllık 1.750 çalışma saati</strong> (tatiller ve resmi tatiller dahil) baz alıyoruz.</p><p>Saniye başına harcama formülü:<br><code>(Saatlik Ücret × Katılımcı Sayısı) / 3600</code><br>Bu, sayaçta gösterilen her saniyenin tam maliyetini verir.</p>',
    },
    {
      type: 'code',
      code: 'Yıllık Maaş: 350.000 ₺\nSaatlik Ücret: 350.000 / 1.750 = 200 ₺/saat\nHarcama Hızı (4 kişi): (200 × 4) / 3600 = 0.222 ₺/saniye\n1 saatlik toplantı maliyeti: 800 ₺',
    },
    {
      type: 'title',
      text: 'Daha Verimli Toplantılar İçin İpuçları',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>2-Pizza Kuralı:</strong> Jeff Bezos tarafından popülerleştirilmiştir; eğer iki pizza toplantıdaki herkesi doyurmaya yetmiyorsa, odada çok fazla kişi var demektir.',
        '<strong>Gündem Yoksa Toplantı da Yok:</strong> Net bir gündemi ve tanımlanmış hedefleri olmayan bir toplantıyı asla kabul etmeyin.',
        '<strong>Ayakta toplantılar:</strong> Günlük senkronizasyonları ayakta yapın. Fiziksel rahatsızlık kısa konuşmayı teşvik eder.',
        '<strong>Parkinson Yasası:</strong> İş, bitirilmesi için ayrılan sürenin tamamını kapsayacak şekilde genişler. Varsayılan bir saat yerine 25 veya 50 dakikalık süreler belirleyin.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Sayacı canlı bir uyarıcı olarak kullanın:</strong> Ekip toplantıları sırasında toplantı maliyeti sayacını ekranınızda paylaşın. Görünür para tutarı, konuya sadık kalmak için doğal bir teşvik oluşturur.',
    },
  ],
};

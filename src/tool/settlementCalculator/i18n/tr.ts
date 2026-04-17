import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'ispanya-tazminat-ve-is-sonu-hesaplama';
const title = 'İspanya İş Sonu Tazminatı Hesaplama 2026: Finiquito Hesapla';
const description =
  "İspanya'daki iş sonu alacaklarınızı (finiquito) adım adım hesaplayın: kullanılmayan izin günleri, ikramiye payları ve işten çıkarma tazminatı.";

const faqData = [
  {
    question: "Kendi isteğimle istifa edersem tazminat veya alacak alabilir miyim?",
    answer:
      "Evet, kesinlikle. İş sonu alacağı (finiquito); çalışılan ayın günleri, kullanılmayan izinler ve ikramiyelerin (bonus) o yıla düşen payını kapsar. Ancak ihbar/kıdem tazminatı (indemnización) veya işsizlik maaşı alamazsınız.",
  },
  {
    question: 'Haksız işten çıkarma durumunda tazminat ne kadardır?',
    answer:
      "12 Şubat 2012'den sonra imzalanan sözleşmeler için, çalışılan her yıl için 33 günlük maaş tutarındadır (maksimum 24 aylık maaş sınırıyla).",
  },
  {
    question: "İhbar süresine uymazsam işveren finiquito'dan kesinti yapabilir mi?",
    answer:
      "Evet. Sözleşmenizde bir ihbar süresi (genellikle 15 gün) varsa ve buna uymazsanız, şirket eksik günlere karşılık gelen maaşı alacağınızdan düşme hakkına sahiptir.",
  },
  {
    question: "Kullanılmayan izinlerin ödenmesi durumunda sigorta süreci nasıl işler?",
    answer:
      "Kullanılmayan izinler ödendiğinde, şirket o günler için sizin adınıza Sosyal Güvenlik primlerini ödemeye devam etmelidir. Bu süre bitmeden işsizlik maaşına başvuramazsınız.",
  },
];

const howToData = [
  {
    name: 'Brüt maaşınızı girin',
    text: 'Yıllık brüt maaşınızı girin ve yılda kaç maaş (12 veya 14) aldığınızı seçin.',
  },
  {
    name: 'Tarihleri belirleyin',
    text: 'İşe giriş tarihinizi ve planlanan son iş gününüzü girin.',
  },
  {
    name: 'Kullanılmayan izinleri ekleyin',
    text: 'Bu yıl içinde kaç günlük kullanılmamış izniniz kaldığını belirtin.',
  },
  {
    name: 'Ayrılma nedenini seçin',
    text: 'Simülatörün doğru tazminat oranını uygulaması için ayrılma nedenini seçin.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: 'Yıllık Brüt Maaş',
    labelExtraPayments: 'Yıldaki Maaş Sayısı',
    labelStartDate: 'Başlangıç Tarihi',
    labelEndDate: 'Bitiş Tarihi',
    labelVacationDays: 'Kullanılmayan İzin Günleri',
    labelDepartureReason: 'Ayrılma Nedeni',
    opt12pays: '12 Maaş (İkramiye dahil)',
    opt14pays: '14 Maaş (Standart)',
    optImprocedente: 'Haksız İşten Çıkarma (33 Gün)',
    optObjetivo: 'Haklı Nedenle Çıkarma (20 Gün)',
    optTemporal: 'Süreli Sözleşme Sonu (12 Gün)',
    optVoluntaria: 'İstifa (Tazminatsız)',
    labelTotal: 'Tahmini Toplam Alacak',
    labelSeverance: 'İşten Çıkarma Tazminatı',
    labelVacation: 'İzin Ücreti',
    labelExtras: 'İkramiye Payları',
    labelMonthSalary: 'Aylık Maaş',
    disclaimer:
      'Not: Bu, genel İspanyol iş hukukuna dayalı yaklaşık bir tahmindir. Kesin tutar sözleşmeye ve vergilere göre değişebilir.',
    btnCopy: 'Özeti Kopyala',
    copySuccess: 'Kopyalandı',
    copySummaryTitle: 'Tahmini İş Sonu Alacak Özeti',
    defaultSalary: '24000',
  },
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "İspanya'da İşten Ayrılma ve Finiquito Rehberi",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "İspanya'da iş sözleşmesi sona erdiğinde haklarınızı bilmek önemlidir. İster <strong>istifa</strong> ister <strong>işten çıkarılma</strong> olsun.",
    },
  ],
};

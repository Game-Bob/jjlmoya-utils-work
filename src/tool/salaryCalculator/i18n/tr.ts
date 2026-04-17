import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'maas-hesaplama-ispanya';
const title = 'Maaş Hesaplayıcı İspanya: Net Maaş Simülatörü IRPF ve Sosyal Güvenlik';
const description =
  'Her ay gerçekte ne kadar kazanacağınızı görün. İspanyol mevzuatına göre stopajların, vergi matrahının ve net gelirin doğru hesaplanması.';

const faqData = [
  {
    question: 'İspanya'da net maaş nasıl hesaplanır?',
    answer:
      'Net maaş, brüt tutardan IRPF stopajları (dilimlere göre) ve Sosyal Güvenlik katkı paylarının (brüt tutarın yaklaşık %6,35'i) çıkarılmasıyla hesaplanır. IRPF yüzdesi kişisel durumunuza ve maaş seviyenize göre değişir.',
  },
  {
    question: '12 ve 14 ödeme dönemi arasındaki fark nedir?',
    answer:
      '12 ödeme döneminde ikramiye ödemesi aylık olarak dağıtılır. 14 ödeme döneminde iki ekstra ödeme alırsınız (genellikle Haziran/Temmuz ve Aralık aylarında). Yıllık brüt aynıdır, sadece dağılım değişir.',
  },
  {
    question: 'Maaş bordrom neden hesaplayıcıyla tam olarak uyuşmuyor?',
    answer:
      'Bu hesaplayıcı standart yaklaşık değerleri kullanır. Gerçek maaş bordronuz şunlara bağlı olarak değişebilir: şirkete özel kesintiler, yan haklar, bakmakla yükümlü olunan çocuklar, engellilik veya IRPF'yi etkileyen kişisel durumlar.',
  },
  {
    question: 'Maaşımın yüzde kaçını Maliye alıyor?',
    answer:
      'Bu maaşınıza bağlıdır. Genel olarak, IRPF ve Sosyal Güvenlik arasında brüt maaşın %25 ila %45'i kesilir. Maaş ne kadar yüksek olursa, IRPF'nin artan oranlı sistemi nedeniyle stopaj yüzdesi o kadar yüksek olur.',
  },
  {
    question: 'IRPF nedir?',
    answer:
      'Kişisel Gelir Vergisi. Artan oranlı bir vergidir: Daha fazla kazananlar, maaşlarının daha yüksek dilimleri üzerinden daha yüksek bir yüzde öderler.',
  },
];

const howToData = [
  {
    name: 'Yıllık brüt maaşı girin',
    text: 'Sözleşmenizde kararlaştırılan vergi ve stopajlar öncesi toplam tutarı yazın.',
  },
  {
    name: 'Aile durumunu ayarlayın',
    text: 'Çocuğunuz veya bakmakla yükümlü olduğunuz kişiler olup olmadığını belirtin, çünkü bu size uygulanan IRPF yüzdesini düşürür.',
  },
  {
    name: 'Ödeme dönemi sayısı',
    text: 'Maaşınızı 12 ödeme döneminde mi (ikramiyeler dağıtılmış) yoksa 14 ödeme döneminde mi alacağınızı seçin.',
  },
  {
    name: 'Aylık detayları inceleyin',
    text: 'Sosyal Güvenliğe ve IRPF'ye ne kadar gittiğini ve banka hesabınıza yatacak tam net gelirin ne olduğunu kontrol edin.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: 'Yıllık Brüt Maaş',
    labelPays: 'Ödeme Dönemi Sayısı',
    btn12: '12 Dönem',
    btn14: '14 Dönem',
    labelAge: 'Yaş',
    labelContract: 'Sözleşme Türü',
    optIndefinite: 'Belirsiz / Genel',
    optTemporal: 'Geçici',
    btnCalculate: 'Net Maaşı Hesapla',
    labelNetMonthly: 'Aylık Net Maaş',
    labelNetAnnual: 'Yıllık Net Maaş',
    labelPaysDisplay: 'Ödeme Dönemleri',
    labelBreakdown: 'Kesinti Detayları (Tahmini)',
    labelIRPF: 'IRPF',
    labelSS: 'Sosyal Güvenlik',
    disclaimer:
      '*Bekar, çocuksuz ve 65 yaş altı çalışanlar için basitleştirilmiş hesaplama.',
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
      text: 'Brüt maaşım nereye kayboluyor?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İlk işe girişte en yaygın sürprizdir: Yılda 24.000 € tutarında bir sözleşme imzalarsınız, ayda 2.000 € bekleyerek 12'ye bölersiniz ve hesabınızda 1.600 € bulursunuz. Diğer 400 € nerede?',
    },
    {
      type: 'paragraph',
      html: 'İspanya'da, <strong>Brüt</strong> (şirketin ödediği) ile <strong>Net</strong> (sizin aldığınız) arasındaki fark iki ana kalem arasında bölünmüştür: IRPF ve Sosyal Güvenlik. Bunları anlamak, maaş artışlarını müzakere etmenin anahtarıdır.',
    },
    {
      type: 'title',
      text: 'Sosyal Güvenlik: Geleceğinizi finanse eden yaklaşık %6,35',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hemen hemen tüm çalışanlar için sabit bir katkı payıdır. Bekar veya evli olmanıza bağlı değildir. Bu parayla şunları finanse edersiniz:',
    },
    {
      type: 'list',
      items: [
        '<strong>Genel Riskler (%4,70)</strong>: Genel hastalık, iş dışı kazalar, emeklilik ve doğuma bağlı devamsızlıkları kapsar.',
        '<strong>İşsizlik (%1,55 veya %1,60)</strong>: İşinizi kaybetmeniz durumunda işsizlik ödeneği talep etmek için yaptığınız katkı payıdır. Sözleşme geçici ise biraz değişir.',
        '<strong>Mesleki Eğitim (%0,10)</strong>: Sübvansiyonlu eğitim kursları ve yeniden eğitim için.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF: En çok can yakan vergi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Artan oranlıdır ve maaşınıza ve kişisel durumunuza bağlı olarak %2 ile %47 arasında değişebilir. Sabit bir vergi değil, Maliye'ye yapılan bir ön ödemedir. Şirket, gelecek yıl ne kadar vergi ödemeniz gerektiğini hesaplar ve bunu ay ay keser.',
    },
    {
      type: 'title',
      text: 'IRPF'nizi düşüren faktörler',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Çocuk sahibi olmak (özellikle 3 yaş altı).',
        'Tanınmış bir engellilik durumuna sahip olmak (>%33).',
        'Düşük gelirli, bakmakla yükümlü olduğunuz bir eşe sahip olmak.',
      ],
    },
    {
      type: 'title',
      text: 'Devlet IRPF Dilimleri (Yaklaşık 2026)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '0 € - 12.450 €: %19',
        '12.450 € - 20.200 €: %24',
        '20.200 € - 35.200 €: %30',
        '35.200 € - 60.000 €: %37',
        '> 60.000 €: %45',
      ],
    },
    {
      type: 'title',
      text: 'Ebedi soru: 12 mi yoksa 14 ödeme mi?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Birçok çalışan, yaz ve Noel'deki ek ödemeler için 14 ödeme dönemini tercih eder. Diğerleri ise maaşın 12 aya yayılmasını tercih eder (veya şirket bunu zorunlu kılar). Matematiksel olarak yılda tam olarak aynı kazancı elde edersiniz.',
    },
    {
      type: 'list',
      items: [
        '<strong>12 ÖDEME DÖNEMİ</strong>: Her ay daha fazla kazanırsınız ancak ikramiyeniz olmaz. Sabit bir aylık nakit akışı için daha iyidir.',
        '<strong>14 ÖDEME DÖNEMİ</strong>: Her ay biraz daha az kazanırsınız ancak yılda iki kez çift ödeme alırsınız. "Zorunlu tasarruf" gibi çalışır.',
      ],
    },
  ],
};
